import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import aboutHeroImg from '../assets/about0.jpeg';
import jarImg from '../assets/aboutpafe.png';
import stage1Img from '../assets/stage_1_compounding.png';
import stage2Img from '../assets/stage_2_maceration.png';
import stage3Img from '../assets/stage_3_filtration.png';
import stage4Img from '../assets/stage_4_filling.png';
import collectionImg from '../assets/collection.png';
import './About.css';

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: 'ease-out-cubic' });
  }, []);

  return (
    <div className="sg-page">
      
      {/* 1. HERO SECTION */}
      <section className="sg-hero">
        <div 
          className="sg-hero-bg" 
          style={{ backgroundImage: `url(${aboutHeroImg})` }}
        ></div>
        <h1 className="sg-hero-title">
          <span className="hero-title-line">
            <span className="hero-text-reveal" style={{ animationDelay: '0.2s' }}>about us</span>
          </span>
        </h1>
      </section>

      {/* 2. PHILOSOPHY SECTION */}
      <section className="sg-section sg-intro">
        <div className="sg-intro-left" data-aos="fade-right">
          <h2>A manufacturer with a nose:<br/>healthy formulations</h2>
          <p>
            Most contract fillers buy finished bases from a supplier and put them in your bottle. We compose from raw materials — oud, amber, iris, saffron, musks, gourmands.
          </p>
          <p>
            We believe perfume should support your brand, not overwhelm it, combining modern science with a calm, minimal approach. The house standard is extrait: 20–30% perfume oil.
          </p>
          <button className="sg-btn">More about Lopaz</button>
        </div>
        <div className="sg-intro-right" data-aos="fade-left" data-aos-delay="200">
          <div className="sg-jar-wrap">
            <img src={jarImg} alt="Lopaz Bottle" />
          </div>
        </div>
      </section>

      {/* 3. PROCESS SECTION (3-Image Grid) */}
      <section className="sg-section sg-process-new">
        <div className="sg-process-header" data-aos="fade-up">
          <span className="sg-eyebrow">02 — BEHIND THE BOTTLE</span>
          <h2 className="sg-section-title">Watch it come together</h2>
          <p className="sg-section-desc">
            Thoughtfully crafted formulas designed to bring balance and calm to your daily routine. Lightweight textures, gentle ingredients, and a minimalist approach.
          </p>
        </div>
        
        <div className="sg-process-grid">
          <div className="sg-pg-left" data-aos="fade-right">
             <img src={stage1Img} alt="Compounding" />
          </div>
          <div className="sg-pg-right">
             <div className="sg-pg-right-top" data-aos="fade-left">
                <img src={stage2Img} alt="Maceration" />
                <button className="sg-btn-overlay">DISCOVER MORE</button>
             </div>
             <div className="sg-pg-right-bottom" data-aos="fade-left" data-aos-delay="150">
                <img src={stage3Img} alt="Filtration" />
             </div>
          </div>
        </div>
      </section>

      {/* 4. ALL-IN-ONE COMPLEX SECTION (3-Image Grid) */}
      <section className="sg-section sg-complex">
        <div className="sg-complex-bg-text">process</div>
        
        <div className="sg-process-header" style={{ position: 'relative', zIndex: 2 }} data-aos="fade-up">
          <span className="sg-eyebrow">03 — OUR EXPERTISE</span>
          <h2 className="sg-section-title">All-in-One<br/>Manufacturing Complex</h2>
          <p className="sg-section-desc">
            Multifunctional line designed to simplify your brand's daily routine without compromising results. Each formula combines 500 minimum bottles per order, 20-30% extrait concentration, and 8 weeks maceration.
          </p>
        </div>

        <div className="sg-process-grid reverse" style={{ position: 'relative', zIndex: 2 }}>
          <div className="sg-pg-right">
             <div className="sg-pg-right-top" data-aos="fade-right">
                <img src={collectionImg} alt="Collection" />
                <button className="sg-btn-overlay">SERVICES</button>
             </div>
             <div className="sg-pg-right-bottom" data-aos="fade-right" data-aos-delay="150">
                <img src={jarImg} alt="Product Detail" />
             </div>
          </div>
          <div className="sg-pg-left" data-aos="fade-left">
             <img src={stage4Img} alt="Filling" />
          </div>
        </div>
      </section>

      {/* 5. WHAT YOU'RE BUYING */}
      <section className="sg-section sg-buying">
        <div className="sg-process-header" style={{ textAlign: 'left', marginBottom: '4rem' }} data-aos="fade-up">
          <span className="sg-eyebrow">04 — WHAT YOU'RE BUYING</span>
          <h2 className="sg-section-title" style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)' }}>Choosing a<br/>manufacturer</h2>
        </div>
        
        <div className="sg-buying-grid" data-aos="fade-up" data-aos-delay="100">
          <div className="sg-buy-col">
            <span className="sg-buy-num">01</span>
            <h3>We hold the standard</h3>
            <p>Every signed-off formula is retained, along with a sample of every production run. Batch three smells like batch one because we can prove what batch one was.</p>
          </div>
          <div className="sg-buy-col">
            <span className="sg-buy-num">02</span>
            <h3>We own the whole chain</h3>
            <p>Compounding, maceration, filtration, filling, assembly and cartoning all happen in our facility. Nothing goes out to a third party where we cannot see it.</p>
          </div>
          <div className="sg-buy-col">
            <span className="sg-buy-num">03</span>
            <h3>Your formula stays yours</h3>
            <p>Bespoke work is done under NDA. We do not resell a composition we built for you, and we do not put it in our own line.</p>
          </div>
          <div className="sg-buy-col">
            <span className="sg-buy-num">04</span>
            <h3>We ship compliant</h3>
            <p>IFRA certification, allergen declarations, safety data sheets and market-ready label copy come with the goods, not after them.</p>
          </div>
        </div>

        <div className="sg-buying-strip" data-aos="fade-up">
          <span>&diams; IFRA-compliant formulation</span>
          <span>&diams; Batch-to-batch consistency held on file</span>
          <span>&diams; Retained samples for every production run</span>
          <span>&diams; Your formula stays yours — under NDA</span>
        </div>
      </section>

      {/* 6. OUR OWN LINE (DARK) */}
      <section className="sg-dark-section">
        <div className="sg-dark-content" data-aos="fade-up">
          <span className="sg-eyebrow" style={{ color: '#c4aa84' }}>05 — OUR OWN LINE</span>
          <h2 className="sg-dark-title">Twelve extraits,<br/><i>as our reference</i></h2>
          <p className="sg-dark-desc">
            We formulate for others, but we bottle for ourselves. The twelve LOPAZ extraits demonstrate exactly what the facility can output. Any of these accords can be licensed for your label.
          </p>
        </div>

        <div className="sg-dark-stats" data-aos="fade-up" data-aos-delay="100">
          <div className="sg-stat">
            <h4>20–30%</h4>
            <p>EXTRAIT CONCENTRATION</p>
          </div>
          <div className="sg-stat">
            <h4>8 Weeks</h4>
            <p>MACERATION MINIMUM</p>
          </div>
          <div className="sg-stat">
            <h4>Dubai</h4>
            <p>COMPOUNDED & BOTTLED</p>
          </div>
          <div className="sg-stat-btn">
            <button className="sg-btn-outline-gold">Browse collections</button>
          </div>
        </div>
      </section>

    </div>
  );
}
