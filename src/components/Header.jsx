import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import './Header.css';
import logoImg from '../assets/logg.png';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const controlHeader = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > 50) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }

        if (window.scrollY > lastScrollY && window.scrollY > 100) { 
          setIsHeaderVisible(false);
        } else { 
          setIsHeaderVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', controlHeader);
    return () => window.removeEventListener('scroll', controlHeader);
  }, [lastScrollY]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header className={`app-header ${isHeaderVisible ? '' : 'header-hidden'} ${!isScrolled ? 'header-transparent' : ''}`}>
      {/* Mobile Hamburger Button */}
      <button 
        className="mobile-menu-btn" 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {isMobileMenuOpen ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </>
          ) : (
            <>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </>
          )}
        </svg>
      </button>

      <div className="header-left">
        <nav className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <NavLink to="/" className={({isActive}) => isActive ? "header-link active" : "header-link"} end>Home</NavLink>
          <NavLink to="/collections" className={({isActive}) => isActive ? "header-link active" : "header-link"}>Collections</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? "header-link active" : "header-link"}>About</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? "header-link active" : "header-link"}>Contact</NavLink>
        </nav>
      </div>
      
      <div className="logo-container">
        <Link to="/" className="logo-link">
          <img src={logoImg} alt="LOPAZ" className="header-logo-image" style={{ height: '80px', filter: 'invert(1)' }} />
        </Link>
      </div>

      <div className="nav-actions">
        <div className="search-bar-container">
          <input type="text" placeholder="Search" className="search-input" />
          <button className="search-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </button>
        </div>
      </div>
    </header>
  );
}
