import React from 'react';
import './PerfumeInProduction.css';
import './PerfumeExperience.css'; // For shared heading styles
import workImg from '../assets/aboutsection.png';

export default function PerfumeInProduction() {
  return (
    <section className="production-section py-24">
      <div className="container production-container">
        {/* Left Image Side */}
        <div className="production-image-side">
          <img src={workImg} alt="Perfume in Production" className="production-image" />
        </div>

        {/* Right Text Side */}
        <div className="production-text-side">
          <h2 className="about-heading">
            Why We Do,<br/>What We Do.
          </h2>
          <p className="fs-sm text-secondary mb-8 about-desc">
            LOPAZ is a perfume house first and a manufacturer above all. Brands come to us with a brief, a reference, or nothing but a mood — and leave with a finished, filled, labelled bottle ready for their shelf. Our perfumes, formulated with <span className="text-orange">20-30% fragrance oil concentration</span>, are built for exceptional longevity and projection. Our experts can guide you to not just select the right notes, but provide you with a <span className="text-orange">fully personalised olfactory experience.</span>
          </p>
          
          <div>
            <a href="/about" className="btn-about">
              ABOUT US &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
