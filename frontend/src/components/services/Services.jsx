import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BadgePercent, 
  UserCheck, 
  MapPin, 
  Sprout, 
  Tractor, 
  Cpu, 
  ArrowRight, 
  Check, 
  Sparkles 
} from 'lucide-react';
import { SERVICES } from '../../data/servicesData';
import { MEDIA } from '../../data/media';
import './Services.css';

const Services = ({ onSelectService }) => {
  const [imageErrorMap, setImageErrorMap] = useState({});

  const iconMap = {
    BadgePercent: <BadgePercent size={28} />,
    UserCheck: <UserCheck size={28} />,
    MapPin: <MapPin size={28} />,
    Sprout: <Sprout size={28} />,
    Tractor: <Tractor size={28} />,
    Cpu: <Cpu size={28} />
  };

  const serviceMediaMap = {
    subsidies: MEDIA.services.subsidies,
    registration: MEDIA.services.registration,
    land: MEDIA.services.land,
    'crop-info': MEDIA.services.cropInfo,
    equipment: MEDIA.services.equipment,
    'smart-agri': MEDIA.services.smartAgri
  };

  const handleImageError = (id) => {
    setImageErrorMap((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="services" className="section section-bg-muted services-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={16} />
            <span>Comprehensive Solutions</span>
          </div>
          <h2 className="section-title">
            Our Agriculture Services
          </h2>
          <p className="section-subtitle">
            From financial subsidies and digital land records to precision machinery rentals, explore everything you need to prosper.
          </p>
        </div>

        {/* 6 Services Cards Grid */}
        <div className="services-grid">
          {SERVICES.map((service, index) => {
            const mediaObj = serviceMediaMap[service.id] || MEDIA.services.subsidies;
            const imgSrc = imageErrorMap[service.id] ? mediaObj.fallback : mediaObj.image;

            return (
              <motion.div
                key={service.id}
                className="service-card"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
              >
                {/* Top Image Banner */}
                <div className="service-card-image-wrap">
                  <img
                    src={imgSrc}
                    alt={service.title}
                    onError={() => handleImageError(service.id)}
                    className="service-img"
                  />
                  <div className="service-img-overlay" />
                  
                  {/* Floating Stat Badge */}
                  <div className="service-stat-badge">
                    <span>{service.stats}</span>
                  </div>

                  {/* Icon Circle */}
                  <div className="service-icon-circle">
                    {iconMap[service.icon]}
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="service-card-body">
                  <span className="service-tagline">{service.tagline}</span>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-desc">{service.description}</p>

                  {/* Feature Checkpoints */}
                  <ul className="service-features-list">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx} className="service-feature-item">
                        <Check size={16} className="feature-check" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Action Link / Button */}
                  <div className="service-card-footer">
                    <button
                      type="button"
                      className="service-action-btn"
                      onClick={() => onSelectService(service)}
                    >
                      <span>Explore {service.title}</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
