import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-grid">
          
          {/* Brand & Socials */}
          <div className="footer-brand">
            <h2 className="footer-logo">LOPAZ</h2>
            <p className="footer-desc">
              Experience the art of fine fragrance. Hand-bottled in Paris, crafted with the world's most exquisite ingredients.
            </p>
            <div className="footer-socials">
              <a href="#instagram" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#tiktok" aria-label="TikTok">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
              </a>
              <a href="#twitter" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
            </div>
          </div>

          {/* Links 1 */}
          <div className="footer-links">
            <h4 className="footer-heading">Collections</h4>
            <ul>
              <li><a href="#all">All Fragrances</a></li>
              <li><a href="#bestsellers">Bestsellers</a></li>
              <li><a href="#discovery">Discovery Sets</a></li>
              <li><a href="#gift">Gift Cards</a></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div className="footer-links">
            <h4 className="footer-heading">Client Care</h4>
            <ul>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#shipping">Shipping & Returns</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#track">Track Order</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-subscribe">
            <h4 className="footer-heading">Join The List</h4>
            <p className="subscribe-desc">
              Subscribe for exclusive releases and private collection invites.
            </p>
            <form className="subscribe-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Email Address" required />
              <button type="submit" aria-label="Subscribe">→</button>
            </form>
          </div>
          
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} LOPAZ PERFUMES. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
