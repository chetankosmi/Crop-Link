import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Video, Play, Clock, Eye, Sparkles } from 'lucide-react';
import { MEDIA } from '../../data/media';
import './Videos.css';

const Videos = ({ onSelectVideo }) => {
  const [selectedCat, setSelectedCat] = useState('All');
  const [imgErrorMap, setImgErrorMap] = useState({});

  const categories = ['All', 'Irrigation', 'Machinery', 'Tutorials', 'Farming'];

  const filteredVideos = MEDIA.videos.filter((v) => {
    return selectedCat === 'All' || v.category === selectedCat;
  });

  const handleImgError = (id) => {
    setImgErrorMap((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="videos" className="section section-bg-muted videos-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Video size={16} />
            <span>Educational Video Hub</span>
          </div>
          <h2 className="section-title">
            Agriculture Video Gallery
          </h2>
          <p className="section-subtitle">
            Watch certified educational tutorials, machinery operation guides, and government scheme walkthroughs in simple visual formats.
          </p>
        </div>

        {/* Category Filters */}
        <div className="video-categories-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`video-cat-pill ${selectedCat === cat ? 'active' : ''}`}
              onClick={() => setSelectedCat(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Video Cards Grid */}
        <div className="videos-grid">
          <AnimatePresence>
            {filteredVideos.map((item, idx) => (
              <motion.div
                key={item.id}
                className="video-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                onClick={() => onSelectVideo(item)}
              >
                {/* Thumbnail Container */}
                <div className="video-thumb-container">
                  <img
                    src={imgErrorMap[item.id] ? item.fallback : item.thumbnail}
                    alt={item.title}
                    onError={() => handleImgError(item.id)}
                    className="video-thumb-img"
                  />
                  <div className="thumb-dark-overlay" />

                  {/* Play Button Overlay */}
                  <div className="video-play-btn">
                    <Play size={22} fill="#ffffff" color="#ffffff" className="play-icon" />
                  </div>

                  {/* Badges */}
                  <span className="video-category-badge">{item.category}</span>
                  <div className="video-duration-badge">
                    <Clock size={12} />
                    <span>{item.duration}</span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="video-card-body">
                  <div className="video-meta-row">
                    <div className="meta-views">
                      <Eye size={14} />
                      <span>{item.views}</span>
                    </div>
                    <span className="meta-tag">Certified Guide</span>
                  </div>

                  <h3 className="video-title">{item.title}</h3>
                  <p className="video-desc">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Videos;
