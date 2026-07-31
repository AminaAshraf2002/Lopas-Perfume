import React, { useRef } from 'react';
import './ProcessSteps.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import bg1 from '../assets/process_1.png';
import bg2 from '../assets/process_2.png';
import bg3 from '../assets/process_3.png';
import bg4 from '../assets/process_4.png';

gsap.registerPlugin(ScrollTrigger);

export default function ProcessSteps() {
  const containerRef = useRef(null);

  const steps = [
    { 
      num: 'Step 01', 
      title: 'Briefing', 
      desc: 'Consultation on brand positioning and olfactory direction.',
      bg: bg1,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
        </svg>
      )
    },
    { 
      num: 'Step 02', 
      title: 'Chemistry', 
      desc: 'R&D Lab trials and stability testing for international compliance.',
      bg: bg2,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M10 2v7.31M14 9.31V2M8.5 2h7M14 9.31L22.61 21A1 1 0 0 1 21.75 22H2.25a1 1 0 0 1-.86-1.5L10 9.31V2" />
        </svg>
      )
    },
    { 
      num: 'Step 03', 
      title: 'Bottling', 
      desc: 'Precision filling and artisanal assembly in our dust-free facility.',
      bg: bg3,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <path d="M12 8v8" />
          <path d="M8 12h8" />
        </svg>
      )
    },
    { 
      num: 'Step 04', 
      title: 'Logistics', 
      desc: 'Export-ready packaging and global shipping documentation.',
      bg: bg4,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="1" y="3" width="15" height="13" />
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      )
    }
  ];

  useGSAP(() => {
    gsap.from('.process-card', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 70%'
      },
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: 'power3.out'
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="process-cards-section py-24 bg-[#fdfdfc]">
      <div className="container max-w-7xl mx-auto px-6">
        
        <div className="process-cards-grid">
          {steps.map((step, index) => (
            <div key={index} className={`process-card card-${index + 1}`} style={{ backgroundImage: `url(${step.bg})` }}>
              <div className="process-icon mb-6">
                {step.icon}
              </div>
              <span className="process-step-num">{step.num}</span>
              <h4 className="process-step-title">{step.title}</h4>
              <p className="process-step-desc text-secondary">{step.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
