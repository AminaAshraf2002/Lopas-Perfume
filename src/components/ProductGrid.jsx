import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { products } from '../data/products';
import './ProductGrid.css';

gsap.registerPlugin(ScrollTrigger);

export default function ProductGrid() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from('.sg-text-content > *', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%'
      },
      y: 20,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: 'power3.out'
    });

    gsap.from('.sg-card', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%'
      },
      x: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: 'power3.out'
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="sg-section">
      <div className="sg-container">
        
        {/* Left Column: Text */}
        <div className="sg-text-column">
          <div className="sg-text-content">
            <span className="sg-eyebrow">FORMULATION CATALOG —</span>
            <h2 className="sg-title">Sample Formulations</h2>
            <p className="sg-desc">
              Our master perfumers have developed an expansive library of ready-to-license accords. Each formulation is engineered for stability, exceptional longevity, and scales perfectly from small pilot runs to mass market production.
            </p>
            <button className="sg-btn">REQUEST SAMPLES</button>
          </div>
        </div>

        {/* Right Column: Cards Carousel */}
        <div className="sg-cards-column">
          <div className="sg-cards-track">
            {products.map((product) => (
              <div key={product.id} className="sg-card">
                <div className="sg-card-image">
                  <img src={product.img} alt={product.name} />
                </div>
                <div className="sg-card-info">
                  <h3 className="sg-card-title">{product.name}</h3>
                  <div className="sg-card-divider"></div>
                  
                  <div className="sg-card-notes">
                    <p><strong>Top:</strong> Bergamot, Cardamom, Pink Pepper</p>
                    <p><strong>Heart:</strong> Jasmine, Sandalwood, Rose</p>
                    <p><strong>Base:</strong> Vanilla, Musk, Oud</p>
                    <br/>
                    <p><strong>Concentration:</strong> Up to 30% Extrait</p>
                    <p><strong>MOQ:</strong> 500 units</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
