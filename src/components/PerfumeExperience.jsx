import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import bottleImg from '../assets/gs.png';
import './PerfumeExperience.css';

gsap.registerPlugin(ScrollTrigger);

export default function PerfumeExperience() {
  const containerRef = useRef(null);
  const bottleRef = useRef(null);
  const detailLeftRef = useRef(null);
  const detailRightRef = useRef(null);

  useEffect(() => {
    // 1. Initial State for panels
    gsap.set([detailLeftRef.current, detailRightRef.current], { y: 100, opacity: 0 });
    
    // 2. Animate panels in when this section comes into view
    gsap.to(detailLeftRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 70%',
        end: 'center center',
        scrub: 1,
      },
      y: 0, opacity: 1,
    });

    gsap.to(detailRightRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 70%',
        end: 'center center',
        scrub: 1,
      },
      y: 0, opacity: 1,
    });
    
    // 3. To create the illusion of the bottle spinning down from the hero section,
    // we start it high up (-50vh) and bring it to center (0vh) as the user scrolls into this section.
    gsap.fromTo(bottleRef.current, 
      { y: '-50vh', rotation: 180, opacity: 0 }, 
      {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'center center',
          scrub: 1,
        },
        y: '0vh',
        rotation: 360,
        opacity: 1,
        ease: 'none'
      }
    );

  }, []);

  return (
    <div ref={containerRef} className="experience-wrapper relative w-full" style={{ backgroundColor: '#ffffff' }}>
      
      <section className="detail-section relative w-full h-screen flex items-center justify-between detail-section-container overflow-hidden">
        
        {/* Detail Left Panel */}
        <div ref={detailLeftRef} className="detail-panel left-panel flex flex-col" style={{ zIndex: 10 }}>
          <span className="fs-xs mb-4 text-secondary spacing-text">OLFACTORY ENGINEERING</span>
          <h2 className="serif fs-xl mb-8 detail-heading">Bespoke Formulation</h2>

          <div className="note-group mb-4">
            <h4 className="fs-xs mb-2 text-secondary">TOP NOTES</h4>
            <p className="fs-sm">Cardamom, Papyrus, Cypress</p>
          </div>
          <div className="hairline-divider"></div>

          <div className="note-group mb-4">
            <h4 className="fs-xs mb-2 text-secondary">HEART NOTES</h4>
            <p className="fs-sm">Sandalwood, Virginia Cedar, Leather</p>
          </div>
          <div className="hairline-divider"></div>

          <div className="note-group mb-4">
            <h4 className="fs-xs mb-2 text-secondary">BASE NOTES</h4>
            <p className="fs-sm">Amber, Iris, Australian Sandalwood</p>
          </div>
        </div>

        {/* The Bottle in the center */}
        <div className="absolute top-0 left-0 w-full h-screen flex items-center justify-center pointer-events-none" style={{ zIndex: 5 }}>
          <img ref={bottleRef} src={bottleImg} alt="Santal Trouble" className="bottle-img" />
        </div>

        {/* Detail Right Panel */}
        <div ref={detailRightRef} className="detail-panel right-panel" style={{ zIndex: 10 }}>
          <span className="fs-xs mb-4 text-secondary spacing-text">CASE STUDY</span>
          <h2 className="serif fs-xl mb-4 detail-heading">Client Formulation</h2>
          <p className="fs-sm text-secondary mb-8 detail-desc">
            This example demonstrates our ability to engineer a complex, deeply aromatic background using pure, sustainably sourced Australian sandalwood. A perfect turnkey solution for niche luxury brands.
          </p>

          <div className="flex justify-between items-center mb-4">
            <span className="fs-sm text-secondary">Available Formats</span>
            <span className="fs-sm fw-medium">50ml, 100ml, Bulk Oil</span>
          </div>
          <div className="hairline-divider divider-mb-1"></div>

          <div className="flex justify-between items-center mb-4">
            <span className="fs-sm text-secondary">Concentration Range</span>
            <span className="fs-sm fw-medium">10% – 30% Extrait</span>
          </div>
          <div className="hairline-divider divider-mb-1"></div>

          <div className="flex justify-between items-center">
            <span className="fs-sm text-secondary">Production</span>
            <span className="fs-sm fw-medium">Compounded & Filled in Dubai</span>
          </div>
        </div>
      </section>

      {/* Footer bar at the bottom */}
      <div className="bottom-footer absolute bottom-0 left-0 w-full py-8 text-secondary fs-xs marquee-container">
        <div className="marquee-content gap-16">
          <span>FULL-SERVICE MANUFACTURING</span>
          <span>•</span>
          <span>GMP CERTIFIED FACILITY</span>
          <span>•</span>
          <span>TURNKEY PRIVATE LABEL</span>
          <span>•</span>
          <span>COMPOUNDED & BOTTLED IN DUBAI</span>
          <span>•</span>
          <span>FULL-SERVICE MANUFACTURING</span>
          <span>•</span>
          <span>GMP CERTIFIED FACILITY</span>
          <span>•</span>
          <span>TURNKEY PRIVATE LABEL</span>
          <span>•</span>
          <span>COMPOUNDED & BOTTLED IN DUBAI</span>
          <span>•</span>
        </div>
      </div>
      
    </div>
  );
}