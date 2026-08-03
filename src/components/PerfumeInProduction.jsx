import React, { useState } from 'react';
import './PerfumeInProduction.css';

import floralImg from '../assets/base.png';
import chairImg from '../assets/top.png'; 
import purpleBottle from '../assets/middle.png';
import blackBottle from '../assets/blackash.png';

export default function PerfumeInProduction() {
  const [openIndex, setOpenIndex] = useState(0);

  const accordionItems = [
    {
      title: "1 — Top Notes",
      content: "The initial impression of a fragrance, awakening the senses. Bright citrus, fresh herbs, and delicate florals that vanish softly after the first hour, setting the stage."
    },
    {
      title: "2 — Middle Notes",
      content: "The heart of the perfume. Deep florals, warm spices, and rich accords that emerge as the top notes fade, giving the fragrance its true character and emotional depth."
    },
    {
      title: "3 — Base Notes",
      content: "The lasting foundation. Heavy woods, resins, musk, and vanilla that anchor the fragrance to the skin, lingering for hours and defining the perfume's enduring memory."
    }
  ];

  return (
    <section className="production-section sg-page py-24">
      <div className="container production-grid-container">
        
        {/* Left Side: Text and Accordion */}
        <div className="production-left">
          <span className="production-eyebrow">PROCESS</span>
          <h2 className="production-heading">
            Why We Do,<br/>What We Do.
          </h2>
          <p className="production-desc">
            LOPAZ is a perfume house first and a manufacturer above all. Brands come to us with a brief, a reference, or nothing but a mood — and leave with a finished, filled, labelled bottle ready for their shelf.
          </p>

          <div className="production-accordion">
            {accordionItems.map((item, index) => (
              <div 
                key={index} 
                className={`accordion-item ${openIndex === index ? 'active' : ''}`}
              >
                <button 
                  className="accordion-header" 
                  onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                >
                  <span className="accordion-title">{item.title}</span>
                  <span className="accordion-icon">{openIndex === index ? '—' : '+'}</span>
                </button>
                <div className="accordion-content">
                  <p>{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: 3-Image Grid */}
        <div className="production-right">
          <div className="production-grid-3">
            <img src={chairImg} alt="Top notes" className="prod-img" />
            <img src={purpleBottle} alt="Middle notes" className="prod-img" />
            <img src={floralImg} alt="Base notes" className="prod-img span-2" />
          </div>
        </div>

      </div>
    </section>
  );
}
