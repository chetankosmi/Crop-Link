import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cpu, 
  Tractor, 
  Droplet, 
  Radio, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  Gauge 
} from 'lucide-react';
import { SMART_FARMING_TECH } from '../../data/smartFarmingData';
import './SmartFarming.css';

const SmartFarming = ({ onBookDemo }) => {
  const [activeTab, setActiveTab] = useState('drones');
  const [imgError, setImgError] = useState(false);

  const tabs = [
    { id: 'drones', label: 'Agri Drones', icon: <Zap size={18} /> },
    { id: 'tractors', label: 'Smart Tractors', icon: <Tractor size={18} /> },
    { id: 'irrigation', label: 'Precision Drip', icon: <Droplet size={18} /> },
    { id: 'sensors', label: 'IoT Sensors', icon: <Radio size={18} /> },
  ];

  const currentTech = SMART_FARMING_TECH.find((t) => t.id === activeTab) || SMART_FARMING_TECH[0];

  const handleTabChange = (id) => {
    setActiveTab(id);
    setImgError(false);
  };

  return (
    <section id="smart-farming" className="section section-bg-dark smart-farming-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header dark">
          <div className="section-badge">
            <Cpu size={16} />
            <span>Next-Generation Agritech</span>
          </div>
          <h2 className="section-title">
            Smart Farming Innovations
          </h2>
          <p className="section-subtitle">
            Harness precision agriculture, automated machinery, and IoT sensor telemetry to maximize your harvest while preserving land health.
          </p>
        </div>

        {/* Interactive Tab Switcher */}
        <div className="tech-tabs-wrapper">
          <div className="tech-tabs-list">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`tech-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => handleTabChange(tab.id)}
              >
                {tab.icon}
                <span>{tab.label}</span>
                {activeTab === tab.id && (
                  <motion.div
                    className="tab-active-glow"
                    layoutId="techTabGlow"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Tech Showcase Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTech.id}
            className="tech-showcase-panel glass-panel-dark"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <div className="tech-showcase-grid">
              {/* Left Column: Details, Stats, and Highlights */}
              <div className="tech-info-column">
                <span className="tech-badge">{currentTech.badge}</span>
                <h3 className="tech-title">{currentTech.title}</h3>
                <p className="tech-description">{currentTech.description}</p>

                {/* Key Metrics / Stat Counters */}
                <div className="tech-stats-grid">
                  {currentTech.stats.map((stat, idx) => (
                    <div key={idx} className="tech-stat-card">
                      <span className="stat-val">{stat.value}</span>
                      <span className="stat-lbl">{stat.label}</span>
                    </div>
                  ))}
                </div>

                {/* Technical Highlights Checklist */}
                <div className="tech-highlights-box">
                  <h4 className="highlights-heading">Key Capabilities & Subsidies:</h4>
                  <ul className="highlights-list">
                    {currentTech.highlights.map((h, i) => (
                      <li key={i} className="highlight-item">
                        <CheckCircle2 size={16} className="highlight-check" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="tech-action-buttons">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => onBookDemo(currentTech)}
                  >
                    <span>Request Subsidy / Demo</span>
                    <ArrowRight size={18} />
                  </button>
                  <a href="#schemes" className="btn btn-outline" style={{ color: '#ffffff', borderColor: 'rgba(255,255,255,0.3)' }}>
                    <span>View Equipment Grants</span>
                  </a>
                </div>
              </div>

              {/* Right Column: High-Res Visual Display */}
              <div className="tech-media-column">
                <div className="tech-image-container">
                  <img
                    src={imgError ? currentTech.fallback : currentTech.image}
                    alt={currentTech.title}
                    onError={() => setImgError(true)}
                    className="tech-image"
                  />
                  <div className="tech-image-gradient" />
                  
                  {/* Floating Telemetry Tag */}
                  <div className="floating-telemetry-tag">
                    <Gauge size={18} className="telemetry-icon" />
                    <div>
                      <div className="telemetry-label">Telemetry Status</div>
                      <div className="telemetry-value">Live Sensor Ready</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SmartFarming;
