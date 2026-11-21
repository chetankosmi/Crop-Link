import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, ShieldCheck, Sprout, TrendingUp, Users, Cpu } from 'lucide-react';
import { MEDIA } from '../../data/media';
import './Hero.css';

const Hero = ({ onExploreSchemes, onGetStarted }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageErrorMap, setImageErrorMap] = useState({});
  const timerRef = useRef(null);

  const slides = MEDIA.hero;

  // Auto-advance slideshow every 5 seconds
  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [currentSlide]);

  const startAutoSlide = () => {
    stopAutoSlide();
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  const stopAutoSlide = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  const handlePrev = () => {
    stopAutoSlide();
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    startAutoSlide();
  };

  const handleNext = () => {
    stopAutoSlide();
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    startAutoSlide();
  };

  const handleDotClick = (index) => {
    stopAutoSlide();
    setCurrentSlide(index);
    startAutoSlide();
  };

  // Image error handling to fallback to local high-res SVG
  const handleImageError = (index) => {
    setImageErrorMap((prev) => ({ ...prev, [index]: true }));
  };

  const activeSlideData = slides[currentSlide];

  return (
    <section id="hero" className="hero-section">
      {/* Background Slideshow with Slow Zoom & Fade Transition */}
      <div className="hero-slideshow-container">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="hero-slide-bg"
            initial={{ opacity: 0, scale: 1.0 }}
            animate={{ opacity: 1, scale: 1.08 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{
              opacity: { duration: 0.9, ease: "easeInOut" },
              scale: { duration: 6, ease: "linear" }
            }}
          >
            <img
              src={
                imageErrorMap[currentSlide]
                  ? activeSlideData.fallback
                  : activeSlideData.image
              }
              alt={activeSlideData.title}
              onError={() => handleImageError(currentSlide)}
              className="hero-image"
            />
          </motion.div>
        </AnimatePresence>

        {/* High-Contrast Dark Transparent Overlay */}
        <div className="hero-overlay" />
        <div className="hero-vignette" />
      </div>

      {/* Hero Content Container */}
      <div className="container hero-content-wrapper">
        <div className="hero-grid">
          {/* Main Hero Text (Animated on slide change) */}
          <div className="hero-text-content">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className="hero-slide-info"
              >
                {/* Category Pill Tag */}
                <div className="hero-tag-badge">
                  <Sprout size={16} className="tag-icon" />
                  <span>{activeSlideData.tag}</span>
                </div>

                {/* Main Heading */}
                <h1 className="hero-title">
                  {activeSlideData.title}
                </h1>

                {/* Subtitle */}
                <h2 className="hero-subtitle">
                  {activeSlideData.subtitle}
                </h2>

                {/* Description in simple English */}
                <p className="hero-description">
                  {activeSlideData.description}
                </p>

                {/* Action Buttons */}
                <div className="hero-buttons">
                  <button
                    type="button"
                    className="btn btn-primary hero-btn"
                    onClick={onExploreSchemes}
                  >
                    <span>Explore Schemes</span>
                    <ArrowRight size={18} />
                  </button>

                  <button
                    type="button"
                    className="btn btn-secondary hero-btn"
                    onClick={onGetStarted}
                  >
                    <span>Get Started</span>
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Quick Agriculture Highlights Side Card */}
          <motion.div 
            className="hero-feature-card glass-panel-dark"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="feature-card-header">
              <div className="header-badge">
                <ShieldCheck size={16} />
                <span>Verified Agri-Portal</span>
              </div>
              <span className="live-pulse-badge">
                <span className="live-dot" /> Live Services
              </span>
            </div>

            <div className="feature-items-list">
              <div className="feature-item">
                <div className="feature-icon-box">
                  <TrendingUp size={20} />
                </div>
                <div>
                  <h4>100% DBT Subsidy Assistance</h4>
                  <p>Direct government payments without intermediaries</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon-box">
                  <Cpu size={20} />
                </div>
                <div>
                  <h4>Precision Agri-Tech & Drones</h4>
                  <p>Automated drone spraying and IoT soil telemetry</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon-box">
                  <Users size={20} />
                </div>
                <div>
                  <h4>120,000+ Verified Farmers</h4>
                  <p>Active community across all major agricultural states</p>
                </div>
              </div>
            </div>

            <div className="feature-card-footer">
              <span className="kisan-note">24/7 Farmer Support in Multiple Languages</span>
            </div>
          </motion.div>
        </div>

        {/* Slideshow Navigation Controls (Prev/Next & Indicator Dots) */}
        <div className="hero-controls-bar">
          <div className="hero-arrows">
            <button
              type="button"
              className="arrow-btn"
              onClick={handlePrev}
              aria-label="Previous Slide"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              type="button"
              className="arrow-btn"
              onClick={handleNext}
              aria-label="Next Slide"
            >
              <ChevronRight size={22} />
            </button>
          </div>

          {/* Slide Indicator Dots with Progress */}
          <div className="hero-dots">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                className={`dot-btn ${currentSlide === index ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to slide ${index + 1}`}
              >
                {currentSlide === index && (
                  <motion.div
                    className="dot-progress-bar"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 5, ease: "linear" }}
                  />
                )}
              </button>
            ))}
          </div>

          <div className="slide-counter">
            <span className="current-num">0{currentSlide + 1}</span>
            <span className="divider">/</span>
            <span className="total-num">0{slides.length}</span>
          </div>
        </div>
      </div>

      {/* Floating Bottom Stats Bar */}
      <div className="hero-stats-bar">
        <div className="container stats-container">
          <div className="stat-card">
            <span className="stat-number">120K+</span>
            <span className="stat-label">Farmers Registered</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-card">
            <span className="stat-number">₹450 Cr+</span>
            <span className="stat-label">Subsidies Facilitated</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-card">
            <span className="stat-number">1,200+</span>
            <span className="stat-label">Machinery Hubs</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-card">
            <span className="stat-number">99.2%</span>
            <span className="stat-label">Satisfaction Rate</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
