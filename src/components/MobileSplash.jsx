import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import bottleImg from '../assets/slash.png';
import './MobileSplash.css';

export default function MobileSplash() {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const bottleRef = useRef(null);

  useEffect(() => {
    let mm = gsap.matchMedia();

    mm.add("(max-width: 768px)", () => {
      // ---- Initial states ----
      gsap.set(logoRef.current, { opacity: 0, y: 15 });
      gsap.set(bottleRef.current, { opacity: 0, y: 20 });

      // =========================================================
      // Splash Animation - Minimalist Luxury
      // =========================================================
      const tl = gsap.timeline({ delay: 0.3 });

      tl.to(bottleRef.current, { opacity: 1, y: 0, duration: 2, ease: 'power2.out' }, 0)
        .to(bottleRef.current, { y: -10, duration: 2, ease: 'sine.inOut', yoyo: true, repeat: -1 }, 2) // Subtle floating
        .to(logoRef.current, { opacity: 1, y: 0, duration: 1.5, ease: 'power2.out' }, 0.8);
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={containerRef} className="mobile-splash-section minimalist-luxury relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
      
      <div className="relative pointer-events-none flex flex-col items-center justify-center" style={{ zIndex: 10, height: '70vh', width: '100vw' }}>
        <img ref={bottleRef} src={bottleImg} alt="Bottle" style={{ height: '60vh', width: 'auto', maxWidth: 'none', filter: 'drop-shadow(0 15px 25px rgba(0,0,0,0.15))' }} />
      </div>

      <div ref={logoRef} className="splash-logo-container absolute bottom-16 flex flex-col items-center w-full text-center" style={{ zIndex: 20 }}>
        <h1 className="splash-logo-text-minimal">LOPAZ</h1>
        <p className="splash-logo-sub-minimal">Discover The Essence</p>
      </div>

    </section>
  );
}