import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf, User, ArrowRight, ShieldCheck, PhoneCall } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ onOpenLogin, onOpenRegister }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Change navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Track active section for highlight
      const sections = ['hero', 'about', 'services', 'schemes', 'smart-farming', 'videos', 'contact'];
      const scrollPosition = window.scrollY + 120;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Schemes', href: '#schemes', id: 'schemes' },
    { name: 'Smart Farming', href: '#smart-farming', id: 'smart-farming' },
    { name: 'Videos', href: '#videos', id: 'videos' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const navOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      {/* Top Banner for Farmer Helpline */}
      <div className={`top-banner ${scrolled ? 'hidden' : ''}`}>
        <div className="container top-banner-content">
          <div className="banner-item">
            <ShieldCheck size={14} className="banner-icon" />
            <span>National Agriculture Portal & Farmer Scheme Linkage</span>
          </div>
          <div className="banner-item helpline">
            <PhoneCall size={14} className="banner-icon" />
            <span>Kisan Helpline (Toll-Free): <strong>1800-180-1551</strong></span>
          </div>
        </div>
      </div>

      <nav className="navbar-container container">
        {/* Brand Logo */}
        <a 
          href="#hero" 
          className="brand-logo"
          onClick={(e) => handleNavClick(e, '#hero')}
        >
          <div className="logo-icon-wrapper">
            <Leaf className="logo-icon" size={24} />
          </div>
          <div className="logo-text">
            <span className="logo-main">CropLink</span>
            <span className="logo-badge">ULTRA PRO</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="nav-menu desktop-menu">
          {navLinks.map((link) => (
            <li key={link.name} className="nav-item">
              <a
                href={link.href}
                className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
                {activeSection === link.id && <span className="active-dot" />}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Action Buttons */}
        <div className="nav-actions desktop-actions">
          <button 
            type="button" 
            className="btn-login"
            onClick={onOpenLogin}
          >
            <User size={16} />
            <span>Login</span>
          </button>
          <button 
            type="button" 
            className="btn-register"
            onClick={onOpenRegister}
          >
            <span>Register</span>
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          className="mobile-toggle"
          aria-label="Toggle navigation menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Drawer Navigation */}
      <div className={`mobile-menu-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-backdrop" onClick={() => setMobileMenuOpen(false)} />
        <div className="mobile-menu-content">
          <div className="mobile-menu-header">
            <div className="brand-logo">
              <div className="logo-icon-wrapper">
                <Leaf className="logo-icon" size={20} />
              </div>
              <span className="logo-main">CropLink</span>
            </div>
            <button 
              type="button" 
              className="mobile-close"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={22} />
            </button>
          </div>

          <ul className="mobile-nav-list">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="mobile-actions">
            <button 
              type="button" 
              className="btn btn-outline"
              style={{ width: '100%' }}
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLogin();
              }}
            >
              <User size={16} />
              <span>Login</span>
            </button>
            <button 
              type="button" 
              className="btn btn-primary"
              style={{ width: '100%' }}
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRegister();
              }}
            >
              <span>Register as Farmer</span>
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="mobile-helpline">
            <PhoneCall size={14} />
            <span>Kisan Call Center: 1800-180-1551</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
