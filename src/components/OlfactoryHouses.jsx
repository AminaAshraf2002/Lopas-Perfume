import React from 'react';
import './OlfactoryHouses.css';
import img1 from '../assets/oud.png';
import img2 from '../assets/floww.png';
import img3 from '../assets/Amb.png';
import img4 from '../assets/musk.png';
// Reusing img1 for the 5th item as discussed in the plan
import img5 from '../assets/gourmand.png'; 

export default function OlfactoryHouses() {
  const families = [
    { id: '01', name: 'Oud', desc: 'Resin & smoke', img: img1 },
    { id: '02', name: 'Floral', desc: 'Rose & tuberose', img: img2 },
    { id: '03', name: 'Amber', desc: 'Warmth & spice', img: img3 },
    { id: '04', name: 'Musk', desc: 'Skin & linen', img: img4 },
    { id: '05', name: 'Gourmand', desc: 'Vanilla & praline', img: img5 },
  ];

  return (
    <section className="oh-white-section">
      <div className="oh-white-container">
        
        {/* Header Area */}
        <div className="oh-header-row">
          <div className="oh-header-left">
            <span className="oh-eyebrow">06 — OUR OWN HOUSE · OLFACTIVE FAMILIES</span>
            <h2 className="oh-title">Five worlds, twelve bottles</h2>
            <p className="oh-desc">
              LOPAZ also puts out its own extraits. They are the clearest sample of what the facility can do — and any of these accords can be licensed for your label.
            </p>
          </div>
          <div className="oh-header-right">
            <a href="/collections" className="oh-browse-link">
              Browse collections &rarr;
            </a>
          </div>
        </div>

        {/* Horizontal Card Grid */}
        <div className="oh-cards-scroll-container">
          <div className="oh-cards-track">
            {families.map((item, idx) => (
              <div key={idx} className="oh-card">
                <div className="oh-card-image-wrapper">
                  <img src={item.img} alt={item.name} />
                </div>
                <div className="oh-card-info">
                  <div className="oh-card-text">
                    <span className="oh-card-id">{item.id}</span>
                    <h3 className="oh-card-name">{item.name}</h3>
                    <p className="oh-card-desc">{item.desc}</p>
                  </div>
                  <button className="oh-card-add-btn">
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
