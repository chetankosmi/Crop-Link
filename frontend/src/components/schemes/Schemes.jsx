import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Landmark, 
  Search, 
  CheckCircle, 
  ArrowRight, 
  HelpCircle, 
  SlidersHorizontal,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { SCHEMES, SCHEME_CATEGORIES } from '../../data/schemesData';
import './Schemes.css';

const Schemes = ({ onSelectScheme, onCheckEligibility }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter schemes based on category and search query
  const filteredSchemes = SCHEMES.filter((scheme) => {
    const matchesCategory =
      selectedCategory === 'All' || scheme.category === selectedCategory;
    const matchesSearch =
      scheme.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      scheme.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      scheme.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="schemes" className="section schemes-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Landmark size={16} />
            <span>Government Direct Subsidies</span>
          </div>
          <h2 className="section-title">
            Agriculture Schemes & Grants
          </h2>
          <p className="section-subtitle">
            Explore verified central and state agriculture programs offering direct income support, crop insurance, and equipment subsidies.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="schemes-controls-wrapper">
          {/* Search Box */}
          <div className="schemes-search-box">
            <Search className="search-icon" size={20} />
            <input
              type="text"
              placeholder="Search scheme name, subsidy, or equipment (e.g., KISAN, Solar, Drone)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="schemes-search-input"
            />
            {searchQuery && (
              <button 
                type="button" 
                className="clear-search" 
                onClick={() => setSearchQuery('')}
              >
                Clear
              </button>
            )}
          </div>

          {/* Quick Eligibility Checker CTA Banner */}
          <div className="eligibility-quick-cta">
            <div className="cta-left">
              <Sparkles size={18} className="cta-sparkle" />
              <span>Not sure which scheme you qualify for?</span>
            </div>
            <button 
              type="button" 
              className="btn-check-eligibility"
              onClick={onCheckEligibility}
            >
              <span>Check Eligibility</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* Category Pills */}
        <div className="schemes-category-pills">
          {SCHEME_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`cat-pill ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Scheme Cards Grid */}
        <div className="schemes-grid">
          <AnimatePresence>
            {filteredSchemes.length > 0 ? (
              filteredSchemes.map((scheme, idx) => (
                <motion.div
                  key={scheme.id}
                  className="scheme-card"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                >
                  {/* Top Header of Card */}
                  <div className="scheme-card-header">
                    <span className="scheme-category-tag">{scheme.category}</span>
                    <span className={`scheme-badge ${scheme.badge.toLowerCase().replace(/\s+/g, '-')}`}>
                      {scheme.badge}
                    </span>
                  </div>

                  {/* Title & Department */}
                  <h3 className="scheme-title">{scheme.title}</h3>
                  <span className="scheme-dept">{scheme.department}</span>

                  {/* Highlight Benefit Box */}
                  <div className="scheme-benefit-box">
                    <div className="benefit-val">{scheme.benefit}</div>
                    <div className="benefit-period">{scheme.benefitPeriod}</div>
                  </div>

                  {/* Description */}
                  <p className="scheme-desc">{scheme.description}</p>

                  {/* Eligibility list preview */}
                  <div className="scheme-eligibility-preview">
                    <span className="eligibility-title">Key Eligibility:</span>
                    <ul>
                      {scheme.eligibility.slice(0, 2).map((item, i) => (
                        <li key={i}>
                          <CheckCircle size={14} className="check-bullet" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Footer with Apply CTA */}
                  <div className="scheme-card-footer">
                    <span className="deadline-badge">
                      Deadline: <strong>{scheme.deadline}</strong>
                    </span>
                    <button
                      type="button"
                      className="btn-apply-scheme"
                      onClick={() => onSelectScheme(scheme)}
                    >
                      <span>View & Apply</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="no-schemes-found">
                <HelpCircle size={48} className="no-found-icon" />
                <h3>No Schemes Found</h3>
                <p>No agricultural schemes match your search query "{searchQuery}".</p>
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={() => {
                    setSelectedCategory('All');
                    setSearchQuery('');
                  }}
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Schemes;
