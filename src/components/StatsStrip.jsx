import React from 'react';
import './StatsStrip.css';

const statsData = [
  { value: '500 bottles', label: 'Minimum order, per SKU' },
  { value: '20–30%', label: 'Extrait concentration available' },
  { value: '8 weeks', label: 'Standard maceration before fill' },
  { value: '4–6 weeks', label: 'Brief to first delivery' }
];

export default function StatsStrip() {
  return (
    <div className="stats-strip-container">
      <div className="container stats-strip-grid">
        {statsData.map((stat, index) => (
          <div key={index} className="stat-item">
            <span className="stat-value">{stat.value}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
