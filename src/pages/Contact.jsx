import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TrustStrip from '../components/TrustStrip';
import './Contact.css';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const [formData, setFormData] = React.useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    volume: '',
    market: '',
    brief: ''
  });

  const heroRef = useRef(null);
  const eyebrowRef = useRef(null);
  const wordRefs = useRef([]);
  const ruleRef = useRef(null);
  const signalRef = useRef(null);
  const btnRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert("Thank you! We've received your brief.");
  };

  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: 'ease-out-cubic', offset: 60 });

    // Hero entrance sequence
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
    tl.set(wordRefs.current, { yPercent: 110 });
    tl.to(eyebrowRef.current, { opacity: 1, x: 0, duration: 0.7 })
      .to(wordRefs.current, { yPercent: 0, duration: 1.1, stagger: 0.12 }, '-=0.3')
      .fromTo(ruleRef.current, { scaleX: 0 }, { scaleX: 1, duration: 1, ease: 'power2.inOut' }, '-=0.5');

    // Signal line: fills as the page is read, top to bottom
    const signalTween = gsap.fromTo(
      signalRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          endTrigger: '.contact-next-section',
          end: 'bottom bottom',
          scrub: 0.4
        }
      }
    );

    // Magnetic submit button
    const btn = btnRef.current;
    let quickX, quickY;
    if (btn) {
      quickX = gsap.quickTo(btn, 'x', { duration: 0.5, ease: 'power3' });
      quickY = gsap.quickTo(btn, 'y', { duration: 0.5, ease: 'power3' });
    }
    const handleMove = (e) => {
      if (!btn) return;
      const rect = btn.getBoundingClientRect();
      const relX = e.clientX - rect.left - rect.width / 2;
      const relY = e.clientY - rect.top - rect.height / 2;
      quickX(relX * 0.3);
      quickY(relY * 0.4);
    };
    const handleLeave = () => {
      quickX(0);
      quickY(0);
    };
    btn?.addEventListener('mousemove', handleMove);
    btn?.addEventListener('mouseleave', handleLeave);

    return () => {
      tl.kill();
      signalTween.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
      btn?.removeEventListener('mousemove', handleMove);
      btn?.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  const heroWords = ['Start', 'a', 'brief'];

  return (
    <div className="contact-page">
      {/* signature scroll motif: a line that fills as the page is read */}
      <div className="signal-track" aria-hidden="true">
        <div className="signal-fill" ref={signalRef}></div>
      </div>

      {/* 1. HERO SECTION */}
      <section className="contact-hero" ref={heroRef}>
        <div className="contact-hero-bg">
          <div
            className="contact-hero-overlay"
            style={{
              backgroundImage:
                'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.35) 100%), url("/src/assets/contact.png")'
            }}
          ></div>
        </div>

        <div className="contact-hero-content">
          <div className="contact-hero-bottom-left">
            <span className="contact-eyebrow" ref={eyebrowRef}>
              DUBAI, UNITED ARAB EMIRATES
            </span>
            <h1 className="contact-hero-title">
              {heroWords.map((word, i) => (
                <span className="mask" key={word}>
                  <span
                    className="word"
                    ref={(el) => (wordRefs.current[i] = el)}
                  >
                    {word}
                  </span>
                </span>
              ))}
            </h1>
            <div className="hero-rule" ref={ruleRef}></div>
          </div>
        </div>
      </section>

      {/* 2. THE FORM CARD */}
      <section className="contact-form-section">
        <div className="contact-form-container">
          <div className="contact-form-left" data-aos="fade-right">
            <h2 className="contact-form-title">
              Start Your Private Label
              <br />
              Journey.
            </h2>
            <p className="contact-form-subtitle">
              Partner with the industrial leader in luxury perfumery. Let's engineer your legacy.
            </p>

            <form onSubmit={handleSubmit} className="contact-form-grid">
              <div className="form-group-row">
                <div className="form-input-container">
                  <label>COMPANY NAME</label>
                  <input type="text" name="company" value={formData.company} onChange={handleChange} required />
                </div>
                <div className="form-input-container">
                  <label>WORK EMAIL</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
              </div>

              <div className="form-group-row">
                <div className="form-input-container">
                  <label>YOUR NAME</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="form-input-container">
                  <label>PHONE NO.</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
                </div>
              </div>

              <div className="form-group-row">
                <div className="form-input-container">
                  <label>SERVICE</label>
                  <select name="service" value={formData.service} onChange={handleChange} required>
                    <option value="" disabled></option>
                    <option value="Private label">Private label</option>
                    <option value="Contract manufacturing">Contract manufacturing</option>
                    <option value="Bespoke formulation">Bespoke formulation</option>
                    <option value="Bulk fragrance oil">Bulk fragrance oil</option>
                  </select>
                </div>
                <div className="form-input-container">
                  <label>VOLUME</label>
                  <select name="volume" value={formData.volume} onChange={handleChange} required>
                    <option value="" disabled></option>
                    <option value="Under 1,000 units">Under 1,000 units</option>
                    <option value="1,000 - 5,000 units">1,000 - 5,000 units</option>
                    <option value="5,000 - 10,000 units">5,000 - 10,000 units</option>
                    <option value="10,000+ units">10,000+ units</option>
                  </select>
                </div>
              </div>

              <div className="form-input-container">
                <label>PROJECT BRIEF</label>
                <textarea name="brief" value={formData.brief} onChange={handleChange} rows="4" required></textarea>
              </div>

              <button type="submit" className="contact-submit-btn" ref={btnRef}>
                <span>INITIATE COLLABORATION</span>
              </button>
            </form>
          </div>

          <div className="contact-form-right" data-aos="fade-left">
            <div className="contact-image-wrapper">
              <img src="/src/assets/banner.png" alt="LOPAZ Perfume" className="contact-feature-img" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT HAPPENS NEXT SECTION */}
      <section className="contact-next-section">
        <div className="container" style={{ maxWidth: '1000px' }}>
          <div className="contact-centered-header" data-aos="fade-up">
            <span className="contact-eyebrow-dark">02 — WHAT HAPPENS NEXT</span>
            <h2 className="contact-section-title">After you press send</h2>
          </div>

          <div className="contact-next-grid">
            <div className="next-item" data-index="01" data-aos="fade-up" data-aos-delay="0">
              <h3 className="next-title">We read it properly</h3>
              <p className="next-desc">A perfumer and a production lead look at every brief, not a sales inbox.</p>
            </div>
            <div className="next-item" data-index="02" data-aos="fade-up" data-aos-delay="120">
              <h3 className="next-title">We come back in 48h</h3>
              <p className="next-desc">With a direction, an indicative price per unit and a realistic lead time.</p>
            </div>
            <div className="next-item" data-index="03" data-aos="fade-up" data-aos-delay="240">
              <h3 className="next-title">We send submissions</h3>
              <p className="next-desc">Once the direction is agreed, numbered trials on blotter and on skin.</p>
            </div>
          </div>
        </div>
      </section>

      <TrustStrip />
    </div>
  );
}