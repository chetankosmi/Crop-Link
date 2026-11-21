import React, { useState } from 'react';
import { 
  Leaf, 
  PhoneCall, 
  Mail, 
  MapPin, 
  ArrowRight, 
  Check, 
  ShieldCheck, 
  Heart, 
  Share2 
} from 'lucide-react';
import './Footer.css';

const Footer = ({ onOpenRegister }) => {
  const [newsEmail, setNewsEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsEmail) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setNewsEmail('');
      }, 4000);
    }
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About CropLink', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Agriculture Schemes', href: '#schemes' },
    { name: 'Smart Farming', href: '#smart-farming' },
    { name: 'Video Tutorials', href: '#videos' },
    { name: 'Contact Help Desk', href: '#contact' },
  ];

  const servicesLinks = [
    { name: 'PM-KISAN DBT Assistance', href: '#schemes' },
    { name: 'PMFBY Crop Insurance', href: '#schemes' },
    { name: 'Solar Water Pump Subsidy', href: '#schemes' },
    { name: 'Free Soil Health Diagnostic', href: '#schemes' },
    { name: 'Agri Drone Spraying Hub', href: '#smart-farming' },
    { name: 'Custom Tractor Hiring Center', href: '#services' },
  ];

  return (
    <footer className="footer-container">
      {/* Top Pre-Footer Bar with Newsletter */}
      <div className="footer-newsletter-bar">
        <div className="container newsletter-grid">
          <div className="newsletter-info">
            <h3 className="newsletter-title">Subscribe for Mandi Alerts & Scheme Updates</h3>
            <p className="newsletter-subtitle">Get SMS & email updates on new subsidy deadlines and daily crop price movements.</p>
          </div>

          <div className="newsletter-form-col">
            {subscribed ? (
              <div className="subscribed-pill">
                <Check size={18} />
                <span>Thank you for subscribing to CropLink Agri Advisories!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="newsletter-input-group">
                <input
                  type="email"
                  required
                  placeholder="Enter your email or phone..."
                  value={newsEmail}
                  onChange={(e) => setNewsEmail(e.target.value)}
                  className="newsletter-field"
                />
                <button type="submit" className="btn btn-primary newsletter-btn">
                  <span>Subscribe</span>
                  <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="container footer-main-content">
        <div className="footer-grid">
          {/* Brand Info Column */}
          <div className="footer-col brand-col">
            <a href="#hero" className="footer-brand-logo">
              <div className="footer-logo-icon">
                <Leaf size={22} />
              </div>
              <div className="footer-logo-text">
                <span className="brand-name">CropLink</span>
                <span className="brand-tag">ULTRA PRO</span>
              </div>
            </a>

            <p className="footer-brand-desc">
              CropLink helps farmers find useful agriculture services, government schemes and modern farming information in one place.
            </p>

            <div className="footer-kisan-banner">
              <PhoneCall size={18} className="kisan-phone-icon" />
              <div>
                <span className="kisan-label">National Kisan Helpline (24/7)</span>
                <strong className="kisan-number">1800-180-1551</strong>
              </div>
            </div>

            {/* Social Links */}
            <div className="footer-social-links">
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="YouTube">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="WhatsApp">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="X Twitter">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Quick Navigation</h4>
            <ul className="footer-links-list">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="footer-link">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services & Schemes */}
          <div className="footer-col">
            <h4 className="footer-col-title">Schemes & Services</h4>
            <ul className="footer-links-list">
              {servicesLinks.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="footer-link">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Office */}
          <div className="footer-col">
            <h4 className="footer-col-title">Contact & Help Desk</h4>
            <div className="footer-contact-items">
              <div className="f-contact-item">
                <MapPin size={18} className="f-icon" />
                <span>Krishi Anusandhan Bhavan, Pusa, New Delhi, India</span>
              </div>
              <div className="f-contact-item">
                <Mail size={18} className="f-icon" />
                <span>support@croplink.in</span>
              </div>
              <div className="f-contact-item">
                <PhoneCall size={18} className="f-icon" />
                <span>Toll-Free: 1800-180-1551</span>
              </div>
            </div>

            <div className="footer-cert-badge">
              <ShieldCheck size={18} className="cert-icon" />
              <span>Government Scheme Integration Partner</span>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legal */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            © {new Date().getFullYear()} CropLink Ultra Pro. Built with pride for Indian Farmers. All rights reserved.
          </p>
          <div className="legal-links">
            <a href="#hero">Privacy Policy</a>
            <span className="dot-sep">•</span>
            <a href="#hero">Terms of Service</a>
            <span className="dot-sep">•</span>
            <a href="#hero">Grievance Cell</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
