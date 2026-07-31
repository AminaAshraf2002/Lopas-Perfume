import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import bottleImg from '../assets/dummy.png';
import './SpinReveal.css';

gsap.registerPlugin(ScrollTrigger);

export default function SpinReveal() {
  const containerRef = useRef(null);
  const bottleContainerRef = useRef(null);
  const bottleRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      
      // 1. PIN THE BOTTLE CONTAINER
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom", 
        pin: bottleContainerRef.current,
        pinSpacing: false, 
        scrub: 1,
      });

      // 2. TIMELINE FOR SCROLL
      const splitTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        }
      });

      // Bottle spins full 360 over the entire scroll
      splitTl.to(bottleRef.current, { rotation: 360, ease: "none", duration: 1 }, 0);

      // Section 1 text splits (0 to 0.5)
      splitTl.to('.word-left', { x: '-20vw', ease: "none", duration: 0.5 }, 0)
             .to('.word-right', { x: '20vw', ease: "none", duration: 0.5 }, 0);
             
      // Section 2 text splits (0.5 to 1)
      splitTl.fromTo('.word2-left', { x: '5vw' }, { x: '-20vw', ease: "none", duration: 0.5 }, 0.5)
             .fromTo('.word2-right', { x: '-5vw' }, { x: '20vw', ease: "none", duration: 0.5 }, 0.5);

    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="spin-reveal-container" ref={containerRef}>
      
      {/* GLOBAL SEAMLESS BACKGROUND */}
      <div className="global-bg-layer">
        <div className="bg-red"></div>
      </div>

      {/* SECTION 1: THE WILD SCENT */}
      <section className="spin-section-1">
        <div className="eyebrow">The Masterpiece</div>

        <div className="bg-word">
          <div className="word-left">THE WILD</div>
          <div className="word-right">SCENT</div>
        </div>
      </section>

      {/* SECTION 2: EXCEPTIONAL CUT & PARAGRAPH */}
      <section className="spin-section-2">
        <div className="bg-word-2">
          <span className="word2-left">EXCEP</span>
          <span className="word2-right">TIONAL</span>
        </div>

        <div className="pin-text-subtle">
          <h4 className="sub-title">TAME THE WILD SCENT</h4>
          <p>Macerated in small batches for maximum depth and longevity.<br/>Brace yourself for an explosion of premium oud and amber,<br/>slow-fermented for a trail that lingers. No compromises. Just unrivaled boldness.</p>
        </div>
      </section>

      {/* PINNED BOTTLE CONTAINER (Overlays both sections) */}
      <div className="pinned-bottle-container" ref={bottleContainerRef}>
        <div className="bottle-wrap" ref={bottleRef}>
          <img src={bottleImg} alt="Perfume Bottle" />
        </div>
      </div>

    </div>
  );
}
