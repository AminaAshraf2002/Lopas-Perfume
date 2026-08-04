import React, { useRef, useState, useEffect, Suspense, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing';
import * as THREE from 'three';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ThreeHero.css';

import video1 from '../assets/hero8_scrub.mp4';
import mobileVideo from '../assets/mobile_scrub.mp4';
import logoImg from '../assets/logg.png';

gsap.registerPlugin(ScrollTrigger);

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

    </>
  );
}

export default function ThreeHero() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const targetTime = useRef(0);
  const scrollProgress = useRef(0);

  const [isMobile, setIsMobile] = useState(false);
  const [inView, setInView] = useState(true);
  const [videoElement, setVideoElement] = useState(null);
  const [visibleSlideIdx, setVisibleSlideIdx] = useState(0);
  const [isVideoReady, setIsVideoReady] = useState(false);

  // ---- Mobile detection ----
  useEffect(() => {
    const el = videoRef.current;
    setVideoElement(el);
    if (el && el.readyState >= 2) {
      setIsVideoReady(true);
    }

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

  // ---- ScrollTrigger configuration ----
  useGSAP(() => {
    if (!videoElement) return;

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: '+=300%', // pinned height scroll duration
      pin: true,
      scrub: 0.5, // Damped scroll progress for smooth scrubbing
      anticipatePin: 1,
      fastScrollEnd: true,
      preventOverlaps: true,
      onUpdate: (self) => {
        const p = Math.min(Math.max(self.progress, 0), 1);
        scrollProgress.current = p;
        if (videoElement.duration) {
          const safeDuration = Math.max(0, videoElement.duration - 0.05);
          targetTime.current = p * safeDuration;
          // Seek directly! H.264 intra keyframes make this buttery smooth.
          videoElement.currentTime = targetTime.current;
        }
      },
    });

    const lockInMeasurements = () => ScrollTrigger.refresh();
    if (document.readyState === 'complete') {
      requestAnimationFrame(lockInMeasurements);
    } else {
      window.addEventListener('load', lockInMeasurements, { once: true });
    }
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(lockInMeasurements);
    }
  }, { dependencies: [videoElement, isMobile], scope: containerRef });

  // Force reload the video tag whenever mobile switch triggers to reload the new video stream
  useEffect(() => {
    if (videoElement) {
      setIsVideoReady(false);
      videoElement.load();
    }
  }, [isMobile, videoElement]);

  // Unlock video decoder on mobile browsers (especially iOS Safari) by playing it with playbackRate = 0
  useEffect(() => {
    if (!videoElement) return;

    const unlock = () => {
      videoElement.playbackRate = 0;
      videoElement.play()
        .then(() => {
          window.removeEventListener('touchstart', unlock);
          window.removeEventListener('click', unlock);
        })
        .catch((e) => {
          console.log('Video decode unlock deferred until user interaction:', e);
        });
    };

    window.addEventListener('touchstart', unlock);
    window.addEventListener('click', unlock);
    unlock();

    return () => {
      window.removeEventListener('touchstart', unlock);
      window.removeEventListener('click', unlock);
    };
  }, [videoElement]);

  const sprayAudioRef = useRef(new Audio('https://upload.wikimedia.org/wikipedia/commons/e/e0/Deodorant_spray_short.ogg'));
  const hasPlayedSpray = useRef(false);

  // ---- Track which text slide should be visible based on scroll progress & play spray sound ----
  useEffect(() => {
    if (isMobile) return;
    let rafId;
    const track = () => {
      const p = scrollProgress.current;
      const idx = SLIDES.findIndex((s) => p >= s.from && p <= s.to);
      setVisibleSlideIdx(idx);

      if (idx === 1) {
        if (!hasPlayedSpray.current) {
          sprayAudioRef.current.currentTime = 0;
          sprayAudioRef.current.volume = 0.5;
          sprayAudioRef.current.play().catch((e) => console.log('Spray audio blocked by browser policies:', e));
          hasPlayedSpray.current = true;
        }
      } else {
        hasPlayedSpray.current = false;
      }

      rafId = requestAnimationFrame(track);
    };
    rafId = requestAnimationFrame(track);
    return () => cancelAnimationFrame(rafId);
  }, [isMobile]);

  return (
    <section ref={containerRef} className="th-hero-section">
      {/* Hidden video element used to feed the 3D texture and scrub reliably */}
      <video
        ref={videoRef}
        src={isMobile ? mobileVideo : video1}
        muted
        loop
        playsInline
        autoPlay
        preload="auto"
        onLoadedData={() => {
          setIsVideoReady(true);
          if (videoRef.current) {
            videoRef.current.currentTime = 0;
          }
        }}
        style={{ position: 'absolute', width: '1px', height: '1px', opacity: 0, pointerEvents: 'none' }}
      />

      <div className="th-canvas-container" style={{ opacity: isVideoReady ? 1 : 0, transition: 'opacity 0.8s ease' }}>
        <Canvas
          dpr={[1, 2]}
          frameloop={inView ? 'always' : 'demand'}
          gl={{ antialias: true, powerPreference: 'high-performance' }}
          camera={{ position: [0, 0, 7], fov: 45 }}
        >
          <color attach="background" args={['#050806']} />
          <Suspense fallback={null}>
            {videoElement && isVideoReady && <Scene video={videoElement} />}
          </Suspense>
        </Canvas>
      </div>

      {!isVideoReady && (
        <div className="th-hero-loader">
          <div className="th-loader-logo-container">
            <img src={logoImg} alt="LOPAZ Logo" className="th-loader-logo" />
            <div className="th-loader-bar">
              <div className="th-loader-progress" />
            </div>
          </div>
        </div>
      )}

      {/* Text overlays that fade in/out as scroll progress enters/leaves their range */}
      <div className="th-text-container" style={{ opacity: isVideoReady ? 1 : 0, transition: 'opacity 0.8s ease' }}>
        {SLIDES.map((slide, idx) => (
          <div
            key={idx}
            className={`th-text-overlay ${visibleSlideIdx === idx ? 'th-text-visible' : ''}`}
          >
            <span className="th-eyebrow">{slide.eyebrow}</span>
            <h1 className="th-heading">
              <span className="th-heading-line1">{slide.heading1}</span>
              <span className="th-heading-line2">{slide.heading2}</span>
            </h1>
            <p className="th-subtext">{slide.subtext}</p>
          </div>
        ))}
      </div>

      <div className="th-progress-indicator" style={{ opacity: isVideoReady ? 1 : 0, transition: 'opacity 0.8s ease' }}>
        <div className="th-scroll-cue">SCROLL</div>
        <div className="th-progress-line"></div>
      </div>
    </section>
  );
}