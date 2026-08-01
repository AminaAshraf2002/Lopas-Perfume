import React, { useRef, useState, useEffect, Suspense, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ThreeHero.css';

import video1 from '../assets/IMG.mp4';

gsap.registerPlugin(ScrollTrigger);

// FIX 6: by default ScrollTrigger re-measures pin start/end whenever it
// detects a layout change (images loading, fonts swapping in, other
// sections resizing below the hero). If that recalculation happens WHILE
// the user is scrolling through the pinned hero, the same scroll position
// suddenly maps to a different progress value — which can jump backward
// and drag the video target back with it (this is what produced "reaches
// Chapter III then snaps back to an earlier scene"). Restricting refresh
// events to page-load moments only stops mid-scroll recalculation.
ScrollTrigger.config({
  autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load',
});

// ---- Optional: overlay text per scroll-progress range ----
// Edit these to match your copy. `from`/`to` are 0–1 scroll progress values
// within the pinned hero. Text fades in/out as progress enters/leaves its range.
const SLIDES = [
  {
    from: 0.0,
    to: 0.28,
    eyebrow: 'SCENT IN MOTION',
    heading1: 'Pure Extracts',
    heading2: 'Captured in Time.',
    subtext: 'Sourced from the finest raw materials across the world.',
  },
  {
    from: 0.3,
    to: 0.58,
    eyebrow: 'CRAFTED EXCELLENCE',
    heading1: 'Every Note',
    heading2: 'Tells a Story.',
    subtext: 'Layered fragrances built with patience and precision.',
  },
  {
    from: 0.6,
    to: 1.0,
    eyebrow: 'TIMELESS RITUAL',
    heading1: 'Wear It',
    heading2: 'Like Memory.',
    subtext: 'A scent that lingers long after the moment has passed.',
  },
];

function VideoPlane({ video }) {
  const { viewport } = useThree();

  const texture = useMemo(() => {
    if (!video) return null;
    const tex = new THREE.VideoTexture(video);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.minFilter = THREE.LinearFilter;
    tex.magFilter = THREE.LinearFilter;
    return tex;
  }, [video]);

  useFrame(() => {
    if (texture) {
      // Force GPU to update the texture from the video element every frame
      texture.needsUpdate = true;
    }
  });

  useEffect(() => {
    return () => {
      if (texture) texture.dispose();
    };
  }, [texture]);

  if (!texture) return null;

  return (
    <mesh position={[0, 0, 0]}>
      <planeGeometry args={[viewport.width, viewport.height]} />
      <meshBasicMaterial map={texture} toneMapped={false} />
    </mesh>
  );
}

function Scene({ video }) {
  // Camera is intentionally static here — this is a scroll-scrubbed VIDEO,
  // not a moving 3D camera. If you want the camera to actually travel through
  // 3D space, this is the file to extend (see note at bottom of chat).
  useFrame((state) => {
    state.camera.position.set(0, 0, 7);
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <VideoPlane video={video} />
      <EffectComposer disableNormalPass>
        <Bloom
          luminanceThreshold={0.5}
          luminanceSmoothing={0.9}
          height={300}
          opacity={0.5}
          intensity={0.15}
        />
        <Vignette eskil={false} offset={0.1} darkness={1.1} />
      </EffectComposer>
    </>
  );
}

export default function ThreeHero() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const audioRef = useRef(null);
  const targetTime = useRef(0);
  const scrollProgress = useRef(0);

  const [isMobile, setIsMobile] = useState(false);
  const [inView, setInView] = useState(true);
  const [videoElement, setVideoElement] = useState(null);
  const [isMuted, setIsMuted] = useState(true);
  const [visibleSlideIdx, setVisibleSlideIdx] = useState(0);

  // ---- Mobile detection ----
  useEffect(() => {
    setVideoElement(videoRef.current);

    const checkPerf = () => setIsMobile(window.innerWidth <= 768);
    checkPerf();
    let timeoutId = setTimeout(checkPerf, 200);
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkPerf, 200);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  // ---- Pause 3D render loop when hero is off-screen ----
  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // ---- FIX 1: wait for the video to be FULLY buffered before enabling scrub ----
  // Previously the trigger armed on `loadedmetadata`, which only guarantees
  // duration/dimensions are known — not that the file is downloaded. Seeking
  // into an unbuffered region stalls on the last decoded frame, which is why
  // the tail of the scroll (last ~7-9%) appeared to "not show."
  useEffect(() => {
    if (!containerRef.current || !videoElement || isMobile) return;

    let trigger = null;

    const createTrigger = () => {
      if (trigger) return; // avoid double-creation
      trigger = ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: '+=800%',
        pin: true,
        scrub: true,
        anticipatePin: 1, // removes the jump/snap right at pin start/end
        fastScrollEnd: true, // handles fast scroll bursts near boundaries gracefully
        preventOverlaps: true,
        onUpdate: (self) => {
          // FIX 4: clamp progress — overscroll/rubber-banding at the very
          // top or bottom of the pin can briefly report progress outside
          // 0–1, which yanks the video target backward and reads as
          // "snapping back to the previous scene."
          const p = Math.min(Math.max(self.progress, 0), 1);
          scrollProgress.current = p;
          if (videoElement.duration) {
            // FIX 2: don't set currentTime directly here — just record the
            // target. The actual seek happens in useFrame below, damped,
            // so rapid scroll events don't queue up faster than the browser
            // can decode (which is what caused the freeze/stutter).
            // The user explicitly requested the full 9 seconds, so we remove the buffer entirely.
            // If the browser jumps backwards, it is due to an HTML5 MP4 decoding limitation.
            targetTime.current = p * videoElement.duration;
          }
        },
      });

      // FIX 7: measurements taken at creation time can still be off if
      // fonts or images elsewhere on the page haven't finished loading yet
      // (both change document height). Do ONE deliberate refresh once
      // everything is settled, so the pin's start/end are locked in
      // correctly before the user starts scrolling. Combined with FIX 6
      // (restricting auto-refresh), this is the only refresh that happens.
      const lockInMeasurements = () => ScrollTrigger.refresh();
      if (document.readyState === 'complete') {
        // page already loaded by the time video finished buffering
        requestAnimationFrame(lockInMeasurements);
      } else {
        window.addEventListener('load', lockInMeasurements, { once: true });
      }
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(lockInMeasurements);
      }
    };

    const checkFullyBuffered = () => {
      if (videoElement.buffered.length > 0 && videoElement.duration) {
        const bufferedEnd = videoElement.buffered.end(
          videoElement.buffered.length - 1
        );
        if (bufferedEnd >= videoElement.duration - 0.5) {
          createTrigger();
          videoElement.removeEventListener('progress', checkFullyBuffered);
          videoElement.removeEventListener(
            'canplaythrough',
            checkFullyBuffered
          );
        }
      }
    };

    videoElement.addEventListener('progress', checkFullyBuffered);
    videoElement.addEventListener('canplaythrough', checkFullyBuffered);
    // in case it's already buffered by the time this effect runs
    checkFullyBuffered();

    return () => {
      videoElement.removeEventListener('progress', checkFullyBuffered);
      videoElement.removeEventListener('canplaythrough', checkFullyBuffered);
      if (trigger) trigger.kill();
    };
  }, [videoElement, isMobile]);

  // ---- FIX 3: damped seeking loop, guarded against overlapping seeks ----
  // Runs every frame regardless of Canvas frameloop state, since scrubbing
  // should keep working even if you pause 3D rendering while off-screen.
  useEffect(() => {
    if (!videoElement) return;
    let rafId;

    const tick = () => {
      if (!videoElement.seeking) {
        // If we are at the absolute bottom of the scroll, force the exact target time
        // regardless of the tiny difference, to guarantee the final scene plays.
        if (scrollProgress.current >= 0.999 && videoElement.currentTime !== targetTime.current) {
          videoElement.currentTime = targetTime.current;
        } else {
          const diff = targetTime.current - videoElement.currentTime;
          if (Math.abs(diff) > 0.005) {
            videoElement.currentTime += diff * 0.15;
          }
        }
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [videoElement]);

  // ---- Track which text slide should be visible based on scroll progress ----
  useEffect(() => {
    if (isMobile) return;
    let rafId;
    const track = () => {
      const p = scrollProgress.current;
      const idx = SLIDES.findIndex((s) => p >= s.from && p <= s.to);
      setVisibleSlideIdx(idx);
      rafId = requestAnimationFrame(track);
    };
    rafId = requestAnimationFrame(track);
    return () => cancelAnimationFrame(rafId);
  }, [isMobile]);

  const toggleSound = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(audioRef.current.muted);
      if (!audioRef.current.muted) {
        audioRef.current
          .play()
          .catch((e) => console.log('Audio play blocked', e));
      }
    }
  };

  return (
    <section ref={containerRef} className="th-hero-section">
      {/* Hidden video element used to feed the 3D texture and scrub reliably */}
      <video
        ref={videoRef}
        src={video1}
        muted
        loop
        playsInline
        preload="auto"
        style={{ display: 'none' }}
      />

      {/* Hidden audio element to provide background sound while scrubbing */}
      <audio ref={audioRef} src={video1} muted loop preload="auto" />

      <div className="th-canvas-container">
        {!isMobile ? (
          <Canvas
            dpr={[1, 2]}
            frameloop={inView ? 'always' : 'demand'}
            gl={{ antialias: true, powerPreference: 'high-performance' }}
            camera={{ position: [0, 0, 7], fov: 45 }}
          >
            <color attach="background" args={['#050806']} />
            <Suspense fallback={null}>
              {videoElement && <Scene video={videoElement} />}
            </Suspense>
          </Canvas>
        ) : (
          <div className="th-mobile-fallback">
            <div className="th-mobile-pattern"></div>
          </div>
        )}
      </div>



      <button
        onClick={toggleSound}
        className="th-sound-toggle"
        aria-label={isMuted ? 'Unmute sound' : 'Mute sound'}
      >
        {isMuted ? 'Unmute Sound' : 'Mute Sound'}
      </button>

      <div className="th-progress-indicator">
        <div className="th-scroll-cue">SCROLL</div>
        <div className="th-progress-line"></div>
      </div>
    </section>
  );
}