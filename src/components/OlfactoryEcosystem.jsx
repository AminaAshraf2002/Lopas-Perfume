import React from 'react';
import './OlfactoryEcosystem.css';

import img1 from '../assets/Citrus.png';
import img2 from '../assets/Heart.png';
import img3 from '../assets/Base0.png';
import img4 from '../assets/Solvents.png';
import img5 from '../assets/musk.png';

export default function OlfactoryEcosystem() {
  const ingredients = [
    {
      id: 1,
      image: img1,
      title: "TOP NOTES",
      desc: "Citrus and herbaceous molecules that define the first 15 minutes of experience.",
      label: "Volatile Impact"
    },
    {
      id: 2,
      image: img2,
      title: "HEART NOTES",
      desc: "Floral and spicy compounds forming the soul of the fragrance for 4-6 hours.",
      label: "Core Identity"
    },
    {
      id: 3,
      image: img3,
      title: "BASE NOTES",
      desc: "Heavy molecules like Musks and Resins providing longevity and sillage.",
      label: "Structural Foundation"
    },
    {
      id: 4,
      image: img4,
      title: "SOLVENTS",
      desc: "Denatured ethanol of 99.9% purity for optimal evaporation curves.",
      label: "Carrier Purity"
    }
  ];

  return (
    <section className="ingredients-section sg-page py-24">
      <div className="container max-w-7xl mx-auto px-6 text-center">
        
        <span className="ingredients-eyebrow">ARCHITECTURAL MAPPING OF SCENT LAYERS</span>
        <h2 className="ingredients-heading">The Olfactory Ecosystem</h2>
        <p className="ingredients-subtitle">Understanding the structure of a fragrance.</p>

        <div className="ingredients-grid mt-16">
          {ingredients.map((item) => (
            <div key={item.id} className="ingredient-card">
              <div className="ingredient-image-wrapper">
                <img src={item.image} alt={item.title} className="ingredient-image" />
              </div>
              <span className="fs-xs mb-1 text-secondary" style={{letterSpacing: '0.1em'}}>{item.label}</span>
              <h4 className="ingredient-title">{item.title}</h4>
              <p className="ingredient-desc">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
