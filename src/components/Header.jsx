import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import './Header.css';
import logoImg from '../assets/logg.png';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isPastHero, setIsPastHero] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const controlHeader = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;
        const isHomePage = location.pathname === '/';
        
        // Pinned Hero height is ~400vh. On other pages, threshold is 50px.
        const threshold = isHomePage ? window.innerHeight * 4 : 50;

        if (currentScrollY > threshold) {
          setIsPastHero(true);

          // Hide when scrolling down, only show when scrolling up
          if (currentScrollY > lastScrollY) {
            setIsHeaderVisible(false);
          } else {
            setIsHeaderVisible(true);
          }
        } else {
          setIsPastHero(false);
          setIsHeaderVisible(true); // always show within the hero
        }
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener('scroll', controlHeader);
    return () => window.removeEventListener('scroll', controlHeader);
  }, [lastScrollY, location.pathname]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header className={`app-header ${isHeaderVisible ? '' : 'header-hidden'} ${isPastHero ? 'header-past-hero' : 'header-transparent'}`}>
      {/* Mobile Hamburger Button */}
      <button 
        className={`mobile-menu-btn ${isMobileMenuOpen ? 'open' : ''}`}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <span className="hamburger-line line-1"></span>
        <span className="hamburger-line line-2"></span>
        <span className="hamburger-line line-3"></span>
      </button>

      <div className="header-left">
        <nav className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <NavLink to="/" className={({isActive}) => isActive ? "header-link active" : "header-link"} onClick={() => setIsMobileMenuOpen(false)} end>
            <span className="nav-num">01</span>Home
          </NavLink>
          <NavLink to="/collections" className={({isActive}) => isActive ? "header-link active" : "header-link"} onClick={() => setIsMobileMenuOpen(false)}>
            <span className="nav-num">02</span>Collections
          </NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? "header-link active" : "header-link"} onClick={() => setIsMobileMenuOpen(false)}>
            <span className="nav-num">03</span>About
          </NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? "header-link active" : "header-link"} onClick={() => setIsMobileMenuOpen(false)}>
            <span className="nav-num">04</span>Contact
          </NavLink>

          <div className="sidebar-footer">
            <span className="sidebar-brand">LŌPAZ PERFUMES</span>
            <div className="sidebar-socials">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            </div>
          </div>
        </nav>
      </div>
      
      <div className="logo-container">
        <Link to="/" className="logo-link">
          <img src={logoImg} alt="LOPAZ" className="header-logo-image" />
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
