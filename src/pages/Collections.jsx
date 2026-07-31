import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { families, getFamilyCount } from '../data/products';
import ritualVideo from '../assets/ritual.mp4';
import atelierImg from '../assets/banner1.png';
import processImg from '../assets/banner2.png';
import bottleImg from '../assets/bottle.png';
import collectImg from '../assets/collect.png';
import aboImg from '../assets/abo.png';
import './Collections.css';
import './Contact.css';

gsap.registerPlugin(ScrollTrigger);

export default function Collections() {
  const containerRef = useRef(null);
  const heroBgRef = useRef(null);
  const scentTrailRef = useRef(null);
  const duoCardRefs = useRef([]);

  // NEW REFS for hero
  const heroEyebrowRef = useRef(null);
  const heroWordRefs = useRef([]);
  const heroRuleRef = useRef(null);
  const collHeroWords = ['Collections'];

  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: 'ease-out-cubic', offset: 60 });
  }, []);

  useGSAP(
    () => {
      // 1. Hero Reveal (Contact style)
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
      tl.set(heroWordRefs.current, { yPercent: 110 });
      tl.to(heroEyebrowRef.current, { opacity: 1, x: 0, duration: 0.7 })
        .to(heroWordRefs.current, { yPercent: 0, duration: 1.1, stagger: 0.12 }, '-=0.3')
        .fromTo(heroRuleRef.current, { scaleX: 0 }, { scaleX: 1, duration: 1, ease: 'power2.inOut' }, '-=0.5');

      gsap.from('.hero-blob', {
        scale: 0.9,
        opacity: 0,
        duration: 1.5,
        ease: 'power2.out',
        delay: 0.6
      });

      // Gentle floating idle motion on the hero blob
      gsap.to('.hero-blob', {
        y: -14,
        duration: 3.4,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        delay: 2
      });

      // Subtle parallax drift on the main hero banner image
      if (heroBgRef.current) {
        gsap.to(heroBgRef.current, {
          yPercent: 16,
          ease: 'none',
          scrollTrigger: {
            trigger: '.collections-main-hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true
          }
        });
      }

      // 2. Olfactive Families Reveal
      const familySections = gsap.utils.toArray('.family-section');
      familySections.forEach((section, i) => {
        const textElements = section.querySelectorAll('.family-text > *');
        const imageElement = section.querySelector('.family-image');
        const isEven = i % 2 === 0;

        gsap.from(imageElement, {
          scrollTrigger: { trigger: section, start: 'top 80%' },
          x: isEven ? -50 : 50,
          opacity: 0,
          duration: 1.2,
          ease: 'power3.out'
        });

        gsap.from(textElements, {
          scrollTrigger: { trigger: section, start: 'top 75%' },
          y: 30,
          opacity: 0,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out'
        });

        // Slow parallax float on the image as it's scrolled past
        gsap.to(imageElement, {
          yPercent: -8,
          ease: 'none',
          scrollTrigger: { trigger: section, start: 'top bottom', end: 'bottom top', scrub: true }
        });
      });

      // The "scent trail" — a thread that fills as it runs past each family
      if (scentTrailRef.current) {
        gsap.fromTo(
          scentTrailRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: '.families-container',
              start: 'top 60%',
              end: 'bottom 60%',
              scrub: 0.4
            }
          }
        );
      }

      // 3. Quote Reveal
      gsap.from('.quote-container > *', {
        scrollTrigger: { trigger: '.quote-section', start: 'top 80%' },
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.3,
        ease: 'power3.out'
      });

      // Magnetic hover on every outline button
      const buttons = gsap.utils.toArray('.btn-outline');
      buttons.forEach((btn) => {
        const moveX = gsap.quickTo(btn, 'x', { duration: 0.5, ease: 'power3' });
        const moveY = gsap.quickTo(btn, 'y', { duration: 0.5, ease: 'power3' });
        const onMove = (e) => {
          const rect = btn.getBoundingClientRect();
          moveX((e.clientX - rect.left - rect.width / 2) * 0.35);
          moveY((e.clientY - rect.top - rect.height / 2) * 0.5);
        };
        const onLeave = () => {
          moveX(0);
          moveY(0);
        };
        btn.addEventListener('mousemove', onMove);
        btn.addEventListener('mouseleave', onLeave);
      });

      // Tilt-on-hover for the video/image collage cards
      duoCardRefs.current.forEach((card) => {
        if (!card) return;
        const media = card.querySelector('.duo-media');
        const tiltX = gsap.quickTo(card, 'rotateX', { duration: 0.6, ease: 'power3' });
        const tiltY = gsap.quickTo(card, 'rotateY', { duration: 0.6, ease: 'power3' });
        const zoom = gsap.quickTo(media, 'scale', { duration: 0.6, ease: 'power3' });

        const onMove = (e) => {
          const rect = card.getBoundingClientRect();
          const x = (e.clientX - rect.left) / rect.width - 0.5;
          const y = (e.clientY - rect.top) / rect.height - 0.5;
          tiltX(-y * 6);
          tiltY(x * 8);
          zoom(1.06);
        };
        const onLeave = () => {
          tiltX(0);
          tiltY(0);
          zoom(1);
        };

        card.addEventListener('mousemove', onMove);
        card.addEventListener('mouseleave', onLeave);
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="collections-page">
      {/* SECTION 0: MAIN HERO */}
      <section className="contact-hero">
        <div className="contact-hero-bg">
          <div
            className="contact-hero-overlay"
            style={{
              backgroundImage:
                `linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.35) 100%), url(${aboImg})`
            }}
          ></div>
        </div>

        <div className="contact-hero-content">
          <div className="contact-hero-bottom-left">
            <span className="contact-eyebrow" ref={heroEyebrowRef}>
              THE HOUSE LINE
            </span>
            <h1 className="contact-hero-title">
              {collHeroWords.map((word, i) => (
                <span className="mask" key={word}>
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

      {/* SECTION 1: INTRO */}
      <section className="hero-section">
        <div className="hero-content">
          <span className="fs-xs text-secondary spacing-text mb-6 inline-block uppercase gold-text">
            01 — Olfactive Families
          </span>
          <h2 className="serif fs-xxl">
            Five worlds, <br />
            <span className="italic">twelve bottles</span>
          </h2>
          <p className="fs-sm text-secondary mt-6">
            The house line, built at extrait strength. Every accord here can also be licensed for
            your own label — or reworked into something only yours.
          </p>
        </div>

        <div
          className="hero-blob mask-blob"
          style={{ 
            backgroundImage: `url(${collectImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
      </section>

      {/* SECTION 2: OLFACTIVE FAMILIES LIST */}
      <div className="families-container py-24">
        <div className="scent-trail" aria-hidden="true">
          <div className="scent-trail-fill" ref={scentTrailRef}></div>
        </div>

        {families.map((family, index) => {
          const isEven = index % 2 === 0;
          return (
            <section key={family.id} className="family-section py-20">
              <div
                className="container family-grid"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '4rem',
                  alignItems: 'center'
                }}
              >
                <div
                  className={`family-image mask-blob bg-gray-100 ${!isEven ? 'order-last' : ''}`}
                  style={{
                    height: '400px',
                    width: '100%',
                    maxWidth: '450px',
                    margin: '0 auto',
                    backgroundImage: `url(${family.img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                ></div>

                <div className="family-text">
                  <span className="fs-xs text-secondary spacing-text mb-4 inline-block uppercase">
                    {family.number} · {getFamilyCount(family.name)} fragrances
                  </span>
                  <h2 className="serif fs-xl mb-2">{family.name}</h2>
                  <h3 className="serif fs-lg mb-6 italic family-subtitle">{family.subtitle}</h3>
                  <p className="fs-sm text-secondary mb-8 family-desc">{family.description}</p>
                  <p className="fs-xs text-secondary mb-10 uppercase spacing-text">{family.notes}</p>
                  <button className="btn-outline">{family.name} Explore →</button>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* SECTION 3: QUOTE */}
      <section className="quote-section">
        <div className="quote-container">
          <div className="quote-mark">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          <h2 className="serif fs-xxl mb-8 quote-text">
            "Fragrance is the most intense form of <span className="italic">memory</span>, a light
            that shines even in the dark."
          </h2>
          <span className="fs-xs text-secondary spacing-text uppercase inline-block">
            — THE ART OF SCENT, 2024
          </span>
        </div>
      </section>

      {/* SECTION 4: BEHIND THE BOTTLE — 3-card collage with video */}
      <section className="duo-section">
        <div className="duo-header" data-aos="fade-up">
          <span className="fs-xs spacing-text uppercase inline-block mb-4 gold-text">
            04 — Behind The Bottle
          </span>
          <h2 className="serif fs-xl">Watch it come together</h2>
        </div>

        <div className="duo-grid">
          <div className="duo-left" ref={(el) => (duoCardRefs.current[0] = el)} data-aos="fade-right">
            <img className="duo-media" src={atelierImg} alt="Woman holding perfume" />
          </div>

          <div className="duo-right">
            <div
              className="duo-right-top"
              ref={(el) => (duoCardRefs.current[1] = el)}
              data-aos="fade-left"
            >
              <img className="duo-media" src={processImg} alt="Spraying perfume" />
              <a href="#collection" className="duo-pill">Discover more</a>
            </div>
            <div
              className="duo-right-bottom"
              ref={(el) => (duoCardRefs.current[2] = el)}
              data-aos="fade-left"
              data-aos-delay="150"
            >
              <video className="duo-media" src={ritualVideo} autoPlay muted loop playsInline />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CTA BAND */}
      <section className="collections-cta" data-aos="fade-up">
        <span className="fs-xs text-secondary spacing-text uppercase inline-block mb-4 gold-text">
          Ready when you are
        </span>
        <h2 className="serif fs-xl mb-6">Bring one of these into your own label</h2>
        <button className="btn-outline">Start a brief →</button>
      </section>
    </div>
  );
}