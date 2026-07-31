import React, { useRef } from 'react';
import './HouseFacility.css';
import facilityImg from '../assets/fac.png';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HouseFacility() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from('.hf-text-reveal > *', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%'
      },
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: 'power3.out'
    });

    gsap.from('.hf-image-wrapper', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%'
      },
      x: 50,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out'
    });

    gsap.from('.hf-overlay-box', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 60%'
      },
      y: 20,
      opacity: 0,
      duration: 0.8,
      delay: 0.4,
      ease: 'power2.out'
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="hf-section">
      <div className="hf-container">
        
        {/* Left Side: Text */}
        <div className="hf-text-side hf-text-reveal">
          <span className="hf-eyebrow">FACTORY</span>
          <h2 className="hf-title">The House Facility</h2>
          <div className="hf-divider">
            <span className="hf-flower">✻</span>
          </div>
          <p className="hf-desc">
            Compounded, aged, filled and finished in our own facility. Nothing is sub-contracted out of sight. Maceration, chilling, filtration, filling, crimping, labelling and cartoning all happen here.
          </p>
          
          <ul className="hf-list">
            <li>
              <span className="hf-check">✔</span>
              <span>4000sqm manufacturing plant</span>
            </li>
            <li>
              <span className="hf-check">✔</span>
              <span>In-house regulatory and compliance</span>
            </li>
            <li>
              <span className="hf-check">✔</span>
              <span>Export documentation and logistics</span>
            </li>
          </ul>
        </div>

        {/* Right Side: Image with Overlay */}
        <div className="hf-image-side">
          <div className="hf-image-wrapper">
            <img src={facilityImg} alt="The House Facility" className="hf-image" />
            
            <div className="hf-overlay-box">
              <span className="hf-box-small">BUILD: V.2.04</span>
              <span className="hf-box-large">DUBAI SOUTH FACILITY</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
