import React from 'react';
import './ProcessSteps.css';
import bgImg from '../assets/process.jpeg'; 

export default function ProcessSteps() {
  const promises = [
    {
      title: "Step 01: Briefing",
      desc: "Consultation on brand positioning and olfactory direction.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
        </svg>
      )
    },
    {
      title: "Step 02: Chemistry",
      desc: "R&D Lab trials and stability testing for international compliance.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M10 2v7.31M14 9.31V2M8.5 2h7M14 9.31L22.61 21A1 1 0 0 1 21.75 22H2.25a1 1 0 0 1-.86-1.5L10 9.31V2" />
        </svg>
      )
    },
    {
      title: "Step 03: Bottling",
      desc: "Precision filling and artisanal assembly in our dust-free facility.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <path d="M12 8v8" />
          <path d="M8 12h8" />
        </svg>
      )
    },
    {
      title: "Step 04: Logistics",
      desc: "Export-ready packaging and global shipping documentation.",
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

  return (
    <section className="promise-section sg-page">
      <div className="promise-container max-w-7xl mx-auto">
        
        {/* Left Side: Contained Image */}
        <div className="promise-left-container">
          <div className="promise-image-wrapper">
            <img src={bgImg} alt="Process" className="promise-image" />
          </div>
        </div>

        {/* Right Side: The Process */}
        <div className="promise-right">
          <span className="promise-eyebrow">OUR PROCESS</span>
          <div className="promise-list">
            {promises.map((item, idx) => (
              <div key={idx} className="promise-item">
                <div className="promise-icon">{item.icon}</div>
                <div className="promise-text">
                  <h4 className="promise-item-title">{item.title}</h4>
                  <p className="promise-item-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
