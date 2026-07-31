import React, { useRef } from 'react';
import './VideoHero.css';
import bottleImg from '../assets/gs.png'; // Using the existing bottle image
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function VideoHero() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // 0. Initial Load Animation for the LOPAZ text (zooming in from smaller)
    gsap.from('.gsap-bg-text', { 
      scale: 0.5, 
      opacity: 0, 
      duration: 2.5, 
      ease: 'power3.out',
      delay: 0.2
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=4500', // Pin longer for 3 slides
        pin: true,
        scrub: 2.5,
      }
    });

    // Initial state: Bottle comes in
    tl.fromTo('.gsap-bottle', 
      { y: '100vh', rotation: -15, scale: 0.8, opacity: 0 }, 
      { y: '5vh', rotation: 10, scale: 1.1, opacity: 1, duration: 2, ease: 'power2.out' }
    );

    // Fade in Slide 1 (Text is on Left, so Bottle goes Right)
    tl.to('.gsap-bg-text-wrapper', { opacity: 0, scale: 0.9, duration: 1 }, "+=0.5")
      .fromTo('.gsap-slide-1', { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 2 }, "<")
      .to('.gsap-bottle', { x: '15vw', rotation: 5, duration: 2 }, "<"); // Bottle RIGHT

    tl.to('.gsap-bottle', { rotation: 2, duration: 1 }); // Pause

    // Transition Slide 1 to Slide 2 (Text is on Right, so Bottle goes Left)
    tl.to('.gsap-slide-1', { opacity: 0, x: -50, duration: 2 })
      .fromTo('.gsap-slide-2', { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 2 }, "<")
      .to('.gsap-bottle', { x: '-15vw', rotation: -5, duration: 2 }, "<"); // Bottle LEFT

    tl.to('.gsap-bottle', { rotation: -8, duration: 1 }); // Pause

    // Transition Slide 2 to Slide 3 (Text is on Left, so Bottle goes Right)
    tl.to('.gsap-slide-2', { opacity: 0, x: 50, duration: 2 })
      .fromTo('.gsap-slide-3', { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 2 }, "<")
      .to('.gsap-bottle', { x: '15vw', rotation: 10, duration: 2 }, "<"); // Bottle RIGHT

    tl.to('.gsap-bottle', { rotation: 15, duration: 1 }); // Pause

    // Exit
    tl.to('.gsap-slide-3', { opacity: 0, y: -50, duration: 2 }, "+=1")
      .to('.gsap-bottle', { y: '120vh', rotation: 180, scale: 0.5, opacity: 0, duration: 2 }, "<");

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="gsap-hero-section">
      <div className="gsap-bg-pattern"></div>

      <div className="gsap-hero-container">
        
        {/* Layer 1: Background Text */}
        <div className="gsap-bg-text-wrapper">
          <div className="gsap-flower-icon">✻</div>
          <h1 className="gsap-bg-text">LOPAZ</h1>
        </div>

        {/* Slide 1 */}
        <div className="gsap-slide gsap-slide-1">
          <h2 className="gsap-slide-title">The UAE's most trusted perfume manufacturing partner</h2>
          <h3 className="gsap-slide-subtitle">Made for your brand</h3>
          <p className="gsap-slide-desc">
            LOPAZ — we make the perfume behind other names. Production from brief to filled bottle.<br/><br/>
            Private label, contract manufacturing and bespoke formulation — composed by our perfumers, macerated eight weeks, filled and finished under one roof in Dubai.
          </p>
          <div className="gsap-slide-footer">
            <button className="gsap-slide-btn">Start a production brief &rarr;</button>
            <span className="gsap-slide-meta">Made in the UAE · IFRA compliant</span>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="gsap-slide gsap-slide-2">
          <h2 className="gsap-slide-title">01 — Private label</h2>
          <h3 className="gsap-slide-subtitle">Your name on it</h3>
          <p className="gsap-slide-desc">
            Our accords, your bottle, your market.<br/><br/>
            Pick from a library of finished compositions and skip formulation entirely. Low minimums, and a filled, labelled bottle in weeks rather than seasons.
          </p>
          <div className="gsap-slide-footer">
            <button className="gsap-slide-btn">See what we hold &rarr;</button>
            <span className="gsap-slide-meta">From 500 bottles · 4 weeks</span>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="gsap-slide gsap-slide-3">
          <h2 className="gsap-slide-title">02 — Contract Manufacturing</h2>
          <h3 className="gsap-slide-subtitle">Your formulation, our facility</h3>
          <p className="gsap-slide-desc">
            Bring your own juice or concentrate.<br/><br/>
            We handle the compounding, maceration, chilling, filtering, filling and crimping with European automatic lines capable of 20,000 units daily.
          </p>
          <div className="gsap-slide-footer">
            <button className="gsap-slide-btn">Learn about capacity &rarr;</button>
            <span className="gsap-slide-meta">ISO Certified · High Volume</span>
          </div>
        </div>

        {/* The Perfume Bottle */}
        <img src={bottleImg} alt="Lopaz Perfume" className="gsap-bottle" />
        
      </div>
    </section>
  );
}
