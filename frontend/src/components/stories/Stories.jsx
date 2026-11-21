import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Quote, CheckCircle2, TrendingUp, MapPin } from 'lucide-react';
import { MEDIA } from '../../data/media';
import './Stories.css';

const Stories = () => {
  const [imgErrorMap, setImgErrorMap] = useState({});

  const handleImgError = (id) => {
    setImgErrorMap((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="stories" className="section stories-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Users size={16} />
            <span>Real Results, Real Impact</span>
          </div>
          <h2 className="section-title">
            Farmer Success Stories
          </h2>
          <p className="section-subtitle">
            See how farmers across India have increased yields, reduced input costs, and secured government subsidies through CropLink.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="stories-grid">
          {MEDIA.farmers.map((farmer, idx) => (
            <motion.div
              key={farmer.id}
              className="story-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              {/* Quote Icon Background */}
              <div className="quote-mark-icon">
                <Quote size={40} />
              </div>

              {/* Farmer Profile Header */}
              <div className="story-farmer-header">
                <div className="farmer-avatar-wrap">
                  <img
                    src={imgErrorMap[farmer.id] ? farmer.fallback : farmer.image}
                    alt={farmer.name}
                    onError={() => handleImgError(farmer.id)}
                    className="farmer-avatar-img"
                  />
                  <div className="verified-badge-icon" title="Verified CropLink Beneficiary">
                    <CheckCircle2 size={16} />
                  </div>
                </div>

                <div className="farmer-info">
                  <h3 className="farmer-name">{farmer.name}</h3>
                  <div className="farmer-loc">
                    <MapPin size={14} className="loc-icon" />
                    <span>{farmer.location}</span>
                  </div>
                  <span className="farmer-crop">{farmer.crop}</span>
                </div>
              </div>

              {/* Story Quote Body */}
              <p className="story-text">
                "{farmer.story}"
              </p>

              {/* Story Footer with Metric Pill */}
              <div className="story-footer">
                <div className="story-metric-pill">
                  <TrendingUp size={16} className="metric-icon" />
                  <span>{farmer.metric}</span>
                </div>
                <span className="story-scheme-tag">{farmer.scheme}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stories;
