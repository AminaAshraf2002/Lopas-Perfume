import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { families } from '../data/products';
import heroImg from '../assets/collection.png';
import p1 from '../assets/vanila.png';
import p2 from '../assets/amber .png';
import p3 from '../assets/aventra.png';
import p4 from '../assets/blackash.png';
import p5 from '../assets/velvet.png';
import p6 from '../assets/rose.png';
import p7 from '../assets/black safron.png';
import p8 from '../assets/velisse.png';
import ritualVid from '../assets/2.mp4';
import './Collections.css';

export default function Collections() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: 'ease-out' });
  }, []);

  const featuredProducts = [
    { id: '1', name: 'Vanilla Powdery', price: 265, img: p1 },
    { id: '2', name: 'Amber Kiss', price: 340, img: p2 },
    { id: '3', name: 'Aventra', price: 295, img: p3 },
    { id: '4', name: 'Black Ash', price: 310, img: p4 },
    { id: '5', name: 'Velvet Glow', price: 320, img: p5 },
    { id: '6', name: 'Rosemoire', price: 330, img: p6 },
    { id: '7', name: 'Black Saffron', price: 380, img: p7 },
    { id: '8', name: 'Velisse Rouge', price: 290, img: p8 }
  ];

  return (
    <div className="collections-page">
      
      {/* 1. HERO SECTION */}
      <section 
        className="ex-hero-full" 
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="ex-hero-overlay"></div>
        <div className="ex-hero-content">
          <h1 className="ex-hero-title-full">
            <span className="hero-title-line">
              <span className="hero-text-reveal" style={{ animationDelay: '0.1s' }}>THE HOUSE LINE,</span>
            </span>
            <span className="hero-title-line">
              <span className="hero-text-reveal" style={{ animationDelay: '0.25s' }}>FIVE WORLDS,</span>
            </span>
            <span className="hero-title-line">
              <span className="hero-text-reveal" style={{ animationDelay: '0.4s' }}>TWELVE BOTTLES.</span>
            </span>
          </h1>
          <p className="ex-hero-desc-full" data-aos="fade-up" data-aos-delay="600">
            The house line, built at extrait strength.<br/>
            Every accord here can also be licensed.<br/>
            Reworked into something only yours.
          </p>
          <a href="#explore" className="ex-btn-outline-full">
            DISCOVER THE COLLECTION &nbsp;&nbsp;&rarr;
          </a>
        </div>
      </section>

      {/* 2. ALTERNATING FAMILY SECTIONS */}
      <div className="ex-families">
        {families.map((family, index) => {
          const isEven = index % 2 === 0;
          const isReverse = !isEven; 
          const displayImg = family.img;
          
          return (
            <section key={family.id} className="ex-family-section bg-white">
              <div className={`ex-split ${isReverse ? 'row-reverse' : ''}`}>
                
                <div className="ex-split-image" data-aos={isReverse ? "fade-left" : "fade-right"}>
                  <img src={displayImg} alt={family.name} />
                </div>
                
                <div className="ex-split-text" data-aos={isReverse ? "fade-right" : "fade-left"}>
                  <div className="ex-text-content">
                    <span className="ex-huge-num">{family.number}</span>
                    <h2 className="ex-family-title">{family.name}</h2>
                    <p className="ex-family-desc">{family.description} {family.notes}</p>
                    <a href="#learn-more" className="ex-link-simple">
                      LEARN MORE &nbsp;&nbsp;&rarr;
                    </a>
                  </div>
                </div>

              </div>
            </section>
          );
        })}
      </div>

      {/* 3. PRODUCT GRID */}
      <section className="ex-product-section bg-cream">
        <div className="ex-product-grid">
          {featuredProducts.map((product, idx) => (
            <div key={product.id} className="ex-product-card" data-aos="fade-up" data-aos-delay={idx * 50}>
              <div className="ex-product-image-box">
                <img src={product.img} alt={product.name} />
              </div>
              <div className="ex-product-info-box">
                <div className="ex-product-details">
                  <span className="ex-product-name">{product.name}</span>
                  <span className="ex-product-price">${product.price}</span>
                </div>
                <button className="ex-product-add">+</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. BOTTOM BANNER */}
      <section className="ex-bottom-banner">
        <video src={ritualVid} autoPlay loop muted playsInline className="ex-banner-vid" />
        <div className="ex-banner-overlay"></div>
        <div className="ex-banner-content" data-aos="fade-up">
          <h2 className="ex-banner-title">
            Elevated by Nature.<br/>
            Grounded in Science.
          </h2>
          <p className="ex-banner-desc">
            Our commitment to purity, sustainability,<br/>
            and skin health guides everything we do.
          </p>
          <button className="ex-btn-outline-light">
            DISCOVER OUR STORY
          </button>
        </div>
      </section>

    </div>
  );
}