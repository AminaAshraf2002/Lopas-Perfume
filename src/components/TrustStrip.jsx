import React from 'react';
import './TrustStrip.css';

const trustItems = [
  'EXTRAIT DE PARFUM · 20–30%',
  'FREE DELIVERY OVER AED 300',
  '2 ML SAMPLE WITH EVERY ORDER',
  'SHIPS FROM DUBAI IN 48H'
];

export default function TrustStrip() {
  return (
    <div className="trust-strip-container marquee-container">
      <div className="marquee-content gap-16">
        {trustItems.map((item, i) => (
          <React.Fragment key={`trust-1-${i}`}>
            <span className="trust-item">{item}</span>
            <span className="trust-bullet">•</span>
          </React.Fragment>
        ))}
        {trustItems.map((item, i) => (
          <React.Fragment key={`trust-2-${i}`}>
            <span className="trust-item">{item}</span>
            <span className="trust-bullet">•</span>
          </React.Fragment>
        ))}
        {trustItems.map((item, i) => (
          <React.Fragment key={`trust-3-${i}`}>
            <span className="trust-item">{item}</span>
            <span className="trust-bullet">•</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
