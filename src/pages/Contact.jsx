import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TrustStrip from '../components/TrustStrip';
import contactImg from '../assets/contact.png';
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

    return () => {
      tl.kill();
      signalTween.kill();
      ScrollTrigger.getAll().forEach((t) => t.revert());
    };
  }, []);

  const heroWords = ['Start', 'a', 'brief'];

  return (
    <div className="sg-page contact-page-wrapper">
      <div className="signal-track" aria-hidden="true">
        <div className="signal-fill" ref={signalRef}></div>
      </div>

      {/* 1. HERO SECTION (RESTORED) */}
      <section className="contact-hero" ref={heroRef}>
        <div className="contact-hero-bg">
          <div
            className="contact-hero-overlay"
            style={{
              backgroundImage:
                `linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.1) 100%), url(${contactImg})`
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

      {/* 2. FORM SECTION WITH WATERMARK (NEW SAGE DESIGN) */}
      <section className="sg-contact-form-wrapper">
        <div className="sg-watermark-bg">inquire</div>
        
        <div className="sg-contact-container">
          <div className="sg-contact-left" data-aos="fade-right">
            <span className="sg-eyebrow" style={{color: 'var(--sg-text)'}}>DUBAI, UNITED ARAB EMIRATES</span>
            <h2 className="sg-section-title">Start Your Private Label<br/>Journey.</h2>
            <p className="sg-section-desc" style={{ maxWidth: '400px', marginLeft: 0 }}>
              Whether you need to replicate a discontinued classic or build an entirely new fragrance line from scratch, our laboratory is ready. Drop your details below and we will get back to you with timelines and process overviews.
            </p>
          </div>
          
          <div className="sg-contact-right" data-aos="fade-left">
            <form onSubmit={handleSubmit} className="sg-form">
              <div className="sg-form-group">
                <input type="text" name="name" placeholder="Full Name*" required onChange={handleChange} />
              </div>
              <div className="sg-form-group">
                <input type="text" name="company" placeholder="Company / Brand Name*" required onChange={handleChange} />
              </div>
              <div className="sg-form-row">
                <div className="sg-form-group half">
                  <input type="email" name="email" placeholder="Email Address*" required onChange={handleChange} />
                </div>
                <div className="sg-form-group half">
                  <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} />
                </div>
              </div>
              <div className="sg-form-group">
                <select name="service" required onChange={handleChange} defaultValue="">
                  <option value="" disabled>Select Service Needed*</option>
                  <option value="duplication">Fragrance Duplication</option>
                  <option value="new_creation">New Creation</option>
                  <option value="bulk_oil">Bulk Oil Supply</option>
                  <option value="full_turnkey">Full Turnkey Manufacturing</option>
                </select>
              </div>
              <div className="sg-form-group">
                <textarea name="brief" placeholder="Tell us about your project...*" rows="4" required onChange={handleChange}></textarea>
              </div>
              <button type="submit" className="sg-btn" style={{ marginTop: '1rem' }}>SUBMIT INQUIRY</button>
            </form>
          </div>
        </div>
      </section>

      {/* 3. WHAT HAPPENS NEXT SECTION (RESTORED) */}
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