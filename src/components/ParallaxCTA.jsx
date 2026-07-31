import React from 'react';
import './ParallaxCTA.css';

export default function ParallaxCTA() {
  return (
    <section className="parallax-cta-section">
      <div className="parallax-bg"></div>
      <div className="parallax-content container" style={{ maxWidth: '800px' }}>
        <h3 className="serif mb-4" style={{ color: '#bda27e', fontSize: '1.5rem', fontStyle: 'italic' }}>Anyone can fill a bottle. Very few can hold the formula.</h3>
        <h2 className="parallax-title" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Tell us what you want it to smell of</h2>
        <p className="parallax-subtitle mb-8" style={{ fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
          Send a reference, a market and a volume. We come back with a direction, a lead time and a price per unit — usually within two working days.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/contact" className="parallax-shop-btn" style={{ textDecoration: 'none' }}>REQUEST A QUOTE</a>
          <a href="https://wa.me/971542576685?text=Hello%20LOPAZ%2C%20I%20would%20like%20to%20discuss%20manufacturing%20perfume%20for%20my%20brand." style={{ color: '#fff', textDecoration: 'none', display: 'flex', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.5)', paddingBottom: '2px' }}>or message us on WhatsApp →</a>
        </div>
      </div>
    </section>
  );
}
