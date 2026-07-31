import React from 'react';
import './ManufacturingShowcase.css';

export default function ManufacturingShowcase() {
  return (
    <div className="ms-wrapper" style={{ display: 'flex', flexDirection: 'column', width: '100%', backgroundColor: 'transparent' }}>
      
      {/* SECTION 1 */}
      <section className="ms-section">
        <div className="ms-overlay"></div>
        <div className="ms-content">
          
          <div className="ms-left-text">
            <h2 className="ms-title">Precision At Scale</h2>
            <div className="ms-line"></div>
            <p className="ms-subtitle">
              We compose directly from raw materials.
            </p>
          </div>

          <div className="ms-right-text">
            <p className="ms-desc-small">
              Every detail matters, from the selection of the finest oud and amber to the final maceration. We ensure your brief is matched perfectly.
            </p>
          </div>
          
        </div>
        <div className="ms-indicator">
          <span><strong>01</strong> — 02</span>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="ms-section">
        <div className="ms-overlay"></div>
        <div className="ms-content">
          
          <div className="ms-left-text">
            <h2 className="ms-title">The House Standard</h2>
            <p className="ms-desc-large">
              Most contract fillers buy finished bases from a supplier and put them in your bottle. We compose from raw materials — which is why a brief can be matched precisely instead of approximately, and why we can hold that match across every batch that follows.
            </p>
          </div>

        </div>
        <div className="ms-indicator">
          <span>01 — <strong>02</strong></span>
        </div>
      </section>

    </div>
  );
}
