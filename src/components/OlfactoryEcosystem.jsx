import React, { useRef } from 'react';
import './OlfactoryEcosystem.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import zoneA from '../assets/zone_a.png';
import zoneB from '../assets/zone_b.png';
import zoneC from '../assets/zone_c.png';

gsap.registerPlugin(ScrollTrigger);

export default function OlfactoryEcosystem() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from('.eco-header > *', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%'
      },
      y: 20,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: 'power3.out'
    });

    gsap.from('.eco-layer-block', {
      scrollTrigger: {
        trigger: '.eco-diagram',
        start: 'top 75%'
      },
      scaleY: 0,
      transformOrigin: 'bottom',
      opacity: 0,
      duration: 1.5,
      stagger: 0.2,
      ease: 'power3.inOut'
    });

    gsap.from('.eco-text-item', {
      scrollTrigger: {
        trigger: '.eco-diagram',
        start: 'top 60%'
      },
      x: (index) => (index % 2 === 0 ? -30 : 30),
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: 'power2.out',
      delay: 0.5
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="eco-section">
      <div className="eco-header">
        <h2 className="eco-title">The Olfactory Ecosystem</h2>
        <span className="eco-subtitle">ARCHITECTURAL MAPPING OF SCENT LAYERS</span>
      </div>

      <div className="eco-container">
        
        {/* Left Text Items */}
        <div className="eco-text-column left-text">
          <div className="eco-text-item mt-12">
            <h3>TOP NOTES</h3>
            <span className="eco-label">Volatile Impact</span>
            <p>Citrus and herbaceous molecules that define the first 15 minutes of experience.</p>
          </div>
          <div className="eco-text-item mt-32">
            <h3>HEART NOTES</h3>
            <span className="eco-label">Core Identity</span>
            <p>Floral and spicy compounds forming the soul of the fragrance for 4-6 hours.</p>
          </div>
        </div>

        {/* Central Diagram */}
        <div className="eco-diagram">
          <div className="eco-layer-block zone-a" style={{ backgroundImage: `url(${zoneA})` }}>
            <span>ZONE A</span>
          </div>
          <div className="eco-layer-block zone-b" style={{ backgroundImage: `url(${zoneB})` }}>
            <span>ZONE B</span>
          </div>
          <div className="eco-layer-block zone-c" style={{ backgroundImage: `url(${zoneC})` }}>
            <span>ZONE C</span>
          </div>
        </div>

        {/* Right Text Items */}
        <div className="eco-text-column right-text">
          <div className="eco-text-item mt-24">
            <h3>BASE NOTES</h3>
            <span className="eco-label">Structural Foundation</span>
            <p>Heavy molecules like Musks and Resins providing longevity and sillage.</p>
          </div>
          <div className="eco-text-item mt-32">
            <h3>SOLVENTS</h3>
            <span className="eco-label">Carrier Purity</span>
            <p>Denatured ethanol of 99.9% purity for optimal evaporation curves.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
