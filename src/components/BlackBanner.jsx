import React from 'react';
import './BlackBanner.css';
import bannerImg from '../assets/banner.png';

export default function BlackBanner() {
  return (
    <section className="black-banner-section">
      <div className="black-banner-grid">
        {/* Left Side: Text Content */}
        <div className="black-banner-content">
          <span className="banner-subtitle">FORMULATION (DUBAI, UAE)</span>
          <h2 className="banner-title">Built from<br/>raw materials</h2>
          <p className="banner-text">
            Our perfumers compose from raws, not from off-the-shelf bases. That is why a brief can be matched precisely, and why a signed-off formula reproduces batch after batch — the standard stays on file with us.
          </p>
          <a href="/about" className="banner-btn" style={{ textDecoration: 'none', display: 'inline-block' }}>HOW WE BLEND</a>
        </div>
        
        {/* Right Side: Image */}
        <div className="black-banner-image">
          <img src={bannerImg} alt="Formulation Process" />
        </div>
      </div>
    </section>
  );
}
