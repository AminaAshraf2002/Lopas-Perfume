import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import aboutHeroImg from '../assets/about_hero.png';
import collImg from '../assets/coll.png';
import stage1Img from '../assets/stage_1_compounding.png';
import stage2Img from '../assets/stage_2_maceration.png';
import stage3Img from '../assets/stage_3_filtration.png';
import stage4Img from '../assets/stage_4_filling.png';
import mat1Img from '../assets/material_1.png';
import mat2Img from '../assets/material_2.png';
import mat3Img from '../assets/material_3.png';
import './About.css';
import './Contact.css';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const ownLineRef = useRef(null);
  const heroRef = useRef(null);

  // NEW REFS for hero
  const heroEyebrowRef = useRef(null);
  const heroWordRefs = useRef([]);
  const heroRuleRef = useRef(null);
  const aboutHeroWords = ['We', 'are', 'the', 'house', 'behind', 'the', 'label'];

  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: 'ease-out-cubic', offset: 60 });
    
    // GSAP Animation for Hero (Contact style)
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
    tl.set(heroWordRefs.current, { yPercent: 110 });
    tl.to(heroEyebrowRef.current, { opacity: 1, x: 0, duration: 0.7, delay: 0.2 })
      .to(heroWordRefs.current, { yPercent: 0, duration: 1.1, stagger: 0.12 }, '-=0.3')
      .fromTo(heroRuleRef.current, { scaleX: 0 }, { scaleX: 1, duration: 1, ease: 'power2.inOut' }, '-=0.5');

    // GSAP ScrollTrigger for 'Our Own Line'
    if (ownLineRef.current) {
      gsap.fromTo(ownLineRef.current.querySelectorAll('.gsap-slide-up'), 
        { y: 50, opacity: 0 }, 
        { 
          y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out',
          scrollTrigger: {
            trigger: ownLineRef.current,
            start: 'top 70%'
          }
        }
      );
    }
  }, []);

  return (
    <div className="lumiere-page">
      
      {/* 0. DARK HERO SECTION */}
      <section className="contact-hero">
        <div className="contact-hero-bg">
          <div
            className="contact-hero-overlay"
            style={{
              backgroundImage:
                `linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.35) 100%), url(${aboutHeroImg})`,
              filter: 'none'
            }}
          ></div>
        </div>

        <div className="contact-hero-content">
          <div className="contact-hero-bottom-left">
            <span className="contact-eyebrow" ref={heroEyebrowRef} style={{ textTransform: 'none', letterSpacing: '0.15em' }}>
              UAE's Most Trusted & Advanced Perfume Manufacturing Partner
            </span>
            <h1 className="contact-hero-title">
              {aboutHeroWords.map((word, i) => (
                <span className="mask" key={i}>
                  <span
                    className="word"
                    ref={(el) => (heroWordRefs.current[i] = el)}
                  >
                    {word}
                  </span>
                </span>
              ))}
            </h1>
            <div className="hero-rule" ref={heroRuleRef}></div>
          </div>
        </div>
      </section>

      {/* 1. 01 — THE HOUSE (CREAM SPLIT LAYOUT) */}
      <section className="about-cream-section" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(${collImg})`, backgroundSize: 'cover', backgroundPosition: 'center', padding: '8rem 4rem', color: '#fff' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', gap: '4rem', alignItems: 'flex-start' }} data-aos="fade-up">
          {/* Left Side */}
          <div style={{ flex: '1' }}>
            <span style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#292929ff', display: 'block', marginBottom: '2rem' }}>A manufacturer<br/>with a nose</span>
            <h2 className="serif" style={{ fontSize: '3.5rem', fontWeight: 400, lineHeight: 1.1 }}></h2>
          </div>
          
          {/* Right Side */}
          <div style={{ flex: '1.2', paddingTop: '2rem' }}>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#1c1c1cff', marginBottom: '2rem' }}>
              Most contract fillers buy finished bases from a supplier and put them in your bottle. We compose from raw materials — oud, amber, iris, saffron, musks, gourmands — which is why a brief can be matched precisely instead of approximately, and why we can hold that match across every batch that follows.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#151515ff', marginBottom: '4rem' }}>
              The house standard is extrait: 20–30% perfume oil against the 5–15% of an eau de toilette. You can order any concentration you need, but that is the one we are known for, and the one our own line is built at.
            </p>
            
            {/* Stats Row */}
            <div style={{ display: 'flex', borderTop: '1px solid rgba(124, 124, 124, 0.2)', paddingTop: '2rem' }} data-aos="fade-up" data-aos-delay="200">
              <div style={{ flex: 1, paddingRight: '1rem', borderRight: '1px solid rgba(147, 146, 146, 0.2)' }}>
                <div className="serif" style={{ fontSize: '2rem', marginBottom: '0.5rem', color: '#595959ff' }}>500 <span style={{ fontSize: '1rem', fontStyle: 'italic', color: '#bbb' }}>bottles</span></div>
                <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#444444ff', lineHeight: 1.6 }}>Minimum<br/>order, per<br/>sku</div>
              </div>
              <div style={{ flex: 1, padding: '0 1rem', borderRight: '1px solid rgba(95, 94, 94, 0.2)' }}>
                <div className="serif" style={{ fontSize: '2rem', marginBottom: '0.5rem', color: '#555555ff' }}>20–30%</div>
                <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#474747ff', lineHeight: 1.6 }}>Extrait<br/>concentration<br/>available</div>
              </div>
              <div style={{ flex: 1, padding: '0 1rem', borderRight: '1px solid rgba(255,255,255,0.2)' }}>
                <div className="serif" style={{ fontSize: '2rem', marginBottom: '0.5rem', color: '#555555ff' }}>8 weeks</div>
                <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#474747ff', lineHeight: 1.6 }}>Standard<br/>maceration<br/>before fill</div>
              </div>
              <div style={{ flex: 1, paddingLeft: '1rem' }}>
                <div className="serif" style={{ fontSize: '2rem', marginBottom: '0.5rem', color: '#555555ff' }}>4–6 weeks</div>
                <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#474747ff', lineHeight: 1.6 }}>Brief to<br/>first<br/>delivery</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 02 — ON THE FLOOR (BEST SELLERS GRID) */}
      <section className="lumiere-section">
        <div className="lumiere-section-header" data-aos="fade-up">
          <div>
            <span className="lumiere-eyebrow-dark">02 — On the floor</span>
            <h2 className="lumiere-section-title">Four stages,<br/>no shortcuts</h2>
          </div>
          <a href="/contact" className="lumiere-link-bold" style={{ alignSelf: 'flex-end' }}>SEE OUR SERVICES <span className="arrow-circle">→</span></a>
        </div>

        <div className="lumiere-bestsellers-grid">
          {/* Tall Card Left - Compounding */}
          <div className="lumiere-card tall-card" data-aos="fade-right" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.8)), url(${stage1Img})`, backgroundSize: 'cover', backgroundPosition: 'center', color: '#fff' }}>
            <div className="card-top">
              <h3 style={{ color: '#bda27e' }}>01</h3>
              <p style={{ color: '#fff' }}>Stage 1</p>
            </div>
            <div className="card-bottom">
              <div>
                <h4 style={{ color: '#fff' }}>Compounding</h4>
                <p style={{ color: '#e0e0e0' }}>The formula is weighed to the gram against the signed-off standard and blended in stainless.</p>
              </div>
              <button className="card-btn" style={{ borderColor: '#fff', color: '#fff' }}>➔</button>
            </div>
          </div>

          <div className="lumiere-grid-right">
            {/* Top Text Area - General On The Floor Text */}
            <div className="lumiere-right-header" style={{ paddingBottom: '2rem' }}>
              <div className="lumiere-new-text">
                <span className="orange-text">THE PROCESS</span>
                <p>The same sequence runs whether the formula is ours or yours, and whether the order is five hundred bottles or fifty thousand.</p>
              </div>
            </div>

            {/* Middle Card - Maceration */}
            <div className="lumiere-card wide-card" data-aos="fade-left" style={{ marginBottom: '2rem', height: '300px', backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.8)), url(${stage2Img})`, backgroundSize: 'cover', backgroundPosition: 'center', color: '#fff' }}>
              <div className="card-top">
                <h3 style={{ color: '#bda27e' }}>02</h3>
              </div>
              <div className="card-bottom">
                <div>
                  <h4 style={{ color: '#fff' }}>Maceration</h4>
                  <p style={{ color: '#e0e0e0' }}>Eight weeks minimum before anything is touched. It is the step most contract fillers skip.</p>
                </div>
                <button className="card-btn" style={{ borderColor: '#fff', color: '#fff' }}>➔</button>
              </div>
            </div>

            {/* Two Cards Bottom Right - Filtration & Filling */}
            <div className="lumiere-cards-row">
              <div className="lumiere-card small-card" data-aos="fade-up" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.8)), url(${stage3Img})`, backgroundSize: 'cover', backgroundPosition: 'center', color: '#fff' }}>
                <div className="card-top"><h3 style={{ color: '#bda27e' }}>03</h3></div>
                <div className="card-bottom">
                  <div>
                    <h4 style={{ color: '#fff' }}>Filtration</h4>
                    <p style={{ color: '#e0e0e0' }}>Chilled and filtered twice, so the extrait stays clear.</p>
                  </div>
                  <button className="card-btn" style={{ borderColor: '#fff', color: '#fff' }}>➔</button>
                </div>
              </div>

              <div className="lumiere-card small-card" data-aos="fade-up" data-aos-delay="100" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.8)), url(${stage4Img})`, backgroundSize: 'cover', backgroundPosition: 'center', color: '#fff' }}>
                <div className="card-top"><h3 style={{ color: '#bda27e' }}>04</h3></div>
                <div className="card-bottom">
                  <div>
                    <h4 style={{ color: '#fff' }}>Filling</h4>
                    <p style={{ color: '#e0e0e0' }}>Filled, crimped, capped, labelled, coded and cartoned.</p>
                  </div>
                  <button className="card-btn" style={{ borderColor: '#fff', color: '#fff' }}>➔</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 03 — MATERIALS (STAGGERED EDITORIAL LAYOUT) */}
      <section className="about-materials-editorial" style={{ backgroundColor: '#e6e4dc', padding: '8rem 2rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '2rem' }} data-aos="fade-up">
            <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#666', marginBottom: '1rem', display: 'block' }}>03 — Materials</span>
            <h2 className="serif" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 400, color: '#1a1a1a', maxWidth: '800px', margin: '0 auto' }}>
              What goes in the bottle
            </h2>
            <p style={{ marginTop: '2rem', fontSize: '1rem', color: '#555', maxWidth: '600px', margin: '2rem auto 0', lineHeight: 1.8 }}>
              We source raw ingredients globally, verifying every extract for purity and olfactory stability. From rare woods to delicate florals, the raw materials dictate the quality of the final extrait.
            </p>
          </div>

          <div className="editorial-grid-layout" style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '2rem', alignItems: 'center' }}>
            <div style={{ gridColumn: '1 / 7' }} data-aos="fade-right">
              <img src={mat1Img} alt="Raw Ingredients" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
            </div>
            <div style={{ gridColumn: '8 / 13', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
              <div data-aos="fade-up" data-aos-delay="100" style={{ alignSelf: 'flex-end', width: '80%' }}>
                <img src={mat2Img} alt="Saffron and Iris" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
              </div>
              <div data-aos="fade-up" data-aos-delay="200" style={{ alignSelf: 'flex-start', width: '70%', marginLeft: '-20%' }}>
                <img src={mat3Img} alt="Amber Pump Bottle" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 04 — WHAT YOU'RE BUYING (CUSTOM TEXT GRID) */}
      <section className="lumiere-section lumiere-buying-section" style={{ background: '#fbfbfb', marginTop: '4rem', borderRadius: '40px', padding: '6rem' }}>
        <div data-aos="fade-up">
          <span className="lumiere-eyebrow-dark">04 — What you're buying</span>
          <h2 className="lumiere-section-title" style={{ marginBottom: '4rem' }}>Choosing a<br/>manufacturer</h2>
        </div>

        <div className="lumiere-four-grid">
          <div className="grid-text-item" data-aos="fade-up" data-aos-delay="0">
            <span className="grid-number">01</span>
            <h3 className="grid-title">We hold the standard</h3>
            <p>Every signed-off formula is retained, along with a sample of every production run. Batch three smells like batch one because we can prove what batch one was.</p>
          </div>
          <div className="grid-text-item" data-aos="fade-up" data-aos-delay="100">
            <span className="grid-number">02</span>
            <h3 className="grid-title">We own the whole chain</h3>
            <p>Compounding, maceration, filtration, filling, assembly and cartoning all happen in our facility. Nothing goes out to a third party where we cannot see it.</p>
          </div>
          <div className="grid-text-item" data-aos="fade-up" data-aos-delay="200">
            <span className="grid-number">03</span>
            <h3 className="grid-title">Your formula stays yours</h3>
            <p>Bespoke work is done under NDA. We do not resell a composition we built for you, and we do not put it in our own line.</p>
          </div>
          <div className="grid-text-item" data-aos="fade-up" data-aos-delay="300">
            <span className="grid-number">04</span>
            <h3 className="grid-title">We ship compliant</h3>
            <p>IFRA certification, allergen declarations, safety data sheets and market-ready label copy come with the goods, not after them.</p>
          </div>
        </div>

        <div className="lumiere-diamonds-list" data-aos="fade-up">
          <span>◆ IFRA-compliant formulation</span>
          <span>◆ Batch-to-batch consistency held on file</span>
          <span>◆ Retained samples for every production run</span>
          <span>◆ Your formula stays yours — under NDA</span>
        </div>
      </section>

      {/* 5. 05 — OUR OWN LINE (DARK EYE-CATCHING GSAP LAYOUT) */}
      <section className="about-own-line-dark" ref={ownLineRef} style={{ backgroundColor: '#0a0a0a', color: '#fff', padding: '10rem 2rem', overflow: 'hidden', position: 'relative' }}>
        
        {/* Ambient glow */}
        <div style={{ position: 'absolute', top: '-10%', right: '-20%', width: '60vw', height: '60vw', background: 'radial-gradient(circle, rgba(189,162,126,0.12) 0%, rgba(0,0,0,0) 70%)', zIndex: 0 }}></div>

        <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <span className="gsap-slide-up" style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.25em', color: '#bda27e', marginBottom: '2rem', display: 'block' }}>05 — Our own line</span>
            <h2 className="serif gsap-slide-up" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', fontWeight: 400, lineHeight: 1.1, margin: 0 }}>
              Twelve extraits,<br/>
              <span style={{ fontStyle: 'italic', color: '#bda27e' }}>as our reference</span>
            </h2>
            <p className="gsap-slide-up" style={{ marginTop: '2.5rem', fontSize: '1.2rem', color: '#e0e0e0', maxWidth: '650px', margin: '2.5rem auto 0', lineHeight: 1.8 }}>
              We formulate for others, but we bottle for ourselves. The twelve LOPAZ extraits demonstrate exactly what the facility can output. Any of these accords can be licensed for your label.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '4rem', textAlign: 'center' }}>
            <div className="gsap-slide-up">
              <h4 style={{ fontSize: '3rem', fontFamily: 'var(--font-serif)', marginBottom: '0.5rem', color: '#fff', fontWeight: 400 }}>20–30%</h4>
              <p style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#888' }}>Extrait concentration</p>
            </div>
            <div className="gsap-slide-up">
              <h4 style={{ fontSize: '3rem', fontFamily: 'var(--font-serif)', marginBottom: '0.5rem', color: '#fff', fontWeight: 400 }}>8 Weeks</h4>
              <p style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#888' }}>Maceration minimum</p>
            </div>
            <div className="gsap-slide-up">
              <h4 style={{ fontSize: '3rem', fontFamily: 'var(--font-serif)', marginBottom: '0.5rem', color: '#fff', fontWeight: 400 }}>Dubai</h4>
              <p style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#888' }}>Compounded & Bottled</p>
            </div>
            <div className="gsap-slide-up" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <a href="/collections" className="lumiere-btn-dark" style={{ border: '1px solid #fff', color: '#fff', backgroundColor: 'transparent', padding: '1.2rem 3rem' }}>Browse collections</a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
