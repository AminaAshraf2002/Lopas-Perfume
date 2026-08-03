import React from 'react';
import './CollageSection.css';
import { Link } from 'react-router-dom';
import imgLeft from '../assets/banner0.png';
import imgTop from '../assets/banner2.png';
import imgBottom from '../assets/banner3.png';

const serviceCards = [
  { id: '01', title: 'Private label', text: 'Choose from our library of finished accords, put your name on it, and ship. Low minimums, no formulation lead time.', link: '/contact' },
  { id: '02', title: 'Contract manufacturing', text: 'You bring the formula or the brief. We build it to spec, match it batch to batch, and hold the standard on file.', link: '/contact' },
  { id: '03', title: 'Bespoke formulation', text: 'Our perfumers compose from raw materials — oud, amber, florals, musks, gourmands — until the brief is on skin exactly as described.', link: '/contact' },
  { id: '04', title: 'Bulk fragrance oil', text: 'Concentrates supplied by the kilo for perfume, body care, candles, detergents and ambient scenting.', link: '/contact' },
  { id: '05', title: 'Packaging & assembly', text: 'Flacons, caps, pumps, cartons, cellophane and coding. Sourced, decorated and assembled under one roof.', link: '/contact' },
  { id: '06', title: 'Filling & finishing', text: 'Maceration, chilling, filtration, filling, crimping and labelling — 2 ml samples through 100 ml retail bottles.', link: '/contact' }
];

export default function CollageSection() {
  return (
    <section className="collage-section py-24" style={{ backgroundColor: '#fff' }}>
      <div className="container">
        <div className="section-header-centered mb-16">
          <span className="fs-xs mb-4 text-secondary spacing-text">02 — SERVICES</span>
          <h2 className="serif fs-xl mb-6">Everything under one roof</h2>
          <p className="fs-sm text-secondary mx-auto mb-8" style={{ maxWidth: '600px' }}>
            Take the whole chain or just the part you need — we are as happy filling someone else's approved formula as we are writing one from scratch.
          </p>
          <a href="https://wa.me/971542576685?text=Hello%20LOPAZ%2C%20I%20would%20like%20to%20discuss%20manufacturing%20perfume%20for%20my%20brand." className="btn-primary" style={{ backgroundColor: '#1a1a1a', borderRadius: '30px', padding: '0.8rem 2rem', color: '#fff', textDecoration: 'none', display: 'inline-block' }}>Talk to production <span className="arrow-icon">→</span></a>
        </div>

        <div className="collage-grid">
          {/* Left Large Image */}
          <div className="collage-left">
            <img src={imgLeft} alt="Model with perfume" />
          </div>
          
          {/* Right Split Images */}
          <div className="collage-right">
            <div className="collage-right-top">
              <img src={imgTop} alt="Model smiling with perfume" />
            </div>
            <div className="collage-right-bottom">
              <img src={imgBottom} alt="Perfume bottle close up" />
            </div>
          </div>
        </div>

        {/* The 6 service cards section */}
        <div className="collage-cards-section mt-16">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {serviceCards.map((service) => (
              <div key={service.id} style={{ backgroundColor: '#f8f8f8', padding: '2rem', border: '1px solid #eaeaea' }}>
                <h3 className="serif fs-md mb-2">{service.id} — {service.title}</h3>
                <p className="fs-sm text-secondary mb-6">{service.text}</p>
                <Link to={service.link} style={{ color: '#1a1a1a', textDecoration: 'none', borderBottom: '1px solid #1a1a1a', paddingBottom: '0.2rem', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Enquire →</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
