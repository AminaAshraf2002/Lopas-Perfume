import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Maximize2, Sparkles } from 'lucide-react';
import './PerfumeExperience.css';

gsap.registerPlugin(ScrollTrigger);

export default function PerfumeExperience() {
  const containerRef = useRef(null);
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

  }, []);

  return (
    <div ref={containerRef} className="experience-wrapper relative w-full dark-experience">

      <section className="detail-section relative w-full h-screen flex items-center justify-between detail-section-container overflow-hidden dark-section-bg">

        {/* full-bleed dark background layer */}
        <div className="dark-bg-layer" aria-hidden="true"></div>

        {/* Detail Left Panel */}
        <div ref={detailLeftRef} className="detail-panel left-panel-dark flex flex-col" style={{ zIndex: 10 }}>
          <span className="fs-xs mb-4 badge-label-dark spacing-text">BESTSELLER</span>
          <h2 className="serif fs-xl mb-6 detail-heading-dark">Bespoke Formulation,<br />Crafted to Endure</h2>
          <p className="fs-sm mb-8 detail-desc-dark">
            A refined extrait built around pure, sustainably sourced Australian sandalwood.
          </p>
          <a href="#formulation" className="learn-more-link">
            LEARN MORE <ArrowUpRight size={14} strokeWidth={1.75} />
          </a>
        </div>

        {/* Detail Right Panel */}
        <div ref={detailRightRef} className="detail-panel right-panel-dark" style={{ zIndex: 10 }}>
          <div className="benefit-row">
            <h4 className="fs-xs benefit-label">TOP NOTES</h4>
            <p className="fs-sm benefit-value">Cardamom, Papyrus, Cypress</p>
          </div>
          <div className="hairline-divider-dark"></div>

          <div className="benefit-row">
            <h4 className="fs-xs benefit-label">HEART NOTES</h4>
            <p className="fs-sm benefit-value">Sandalwood, Virginia Cedar, Leather</p>
          </div>
          <div className="hairline-divider-dark"></div>

          <div className="benefit-row">
            <h4 className="fs-xs benefit-label">BASE NOTES</h4>
            <p className="fs-sm benefit-value">Amber, Iris, Australian Sandalwood</p>
          </div>
        </div>

        
      </section>
    </div>
  );
}