import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Sprout, Cpu, HeartHandshake, CheckCircle2, ArrowRight } from 'lucide-react';
import './About.css';

const About = ({ onExploreServices, onOpenRegister }) => {
  const pillars = [
    {
      icon: <ShieldCheck className="pillar-icon" size={24} />,
      title: "Verified Government Schemes",
      desc: "Every subsidy, grant, and insurance scheme is verified directly with central and state agriculture departments."
    },
    {
      icon: <Sprout className="pillar-icon" size={24} />,
      title: "Crop-Specific Guidance",
      desc: "Scientific advisory covering soil testing, optimal sowing dates, pest diagnostics, and live mandi APMC prices."
    },
    {
      icon: <Cpu className="pillar-icon" size={24} />,
      title: "Modern Farming Technology",
      desc: "Affordable access to drone spraying, laser leveling, IoT soil sensors, and solar irrigation systems."
    },
    {
      icon: <HeartHandshake className="pillar-icon" size={24} />,
      title: "Dedicated Farmer Assistance",
      desc: "Toll-free telephone guidance and local Krishi Mitra support to resolve application hurdles in simple regional languages."
    }
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sprout size={16} />
            <span>About CropLink</span>
          </div>
          <h2 className="section-title">
            Empowering India's Agricultural Future
          </h2>
          <p className="section-subtitle">
            CropLink helps farmers find useful agriculture services, government schemes and modern farming information in one place.
          </p>
        </div>

        {/* Main Grid: Left Story & Right Visual Feature Card */}
        <div className="about-main-grid">
          {/* Left Column: Narrative & Values */}
          <motion.div 
            className="about-narrative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="about-quote-box">
              <p className="about-quote-text">
                "Our mission is simple: Ensure no farmer in India misses out on rightful subsidies, advanced agronomy knowledge, or modern machinery due to complex bureaucracy or lack of information."
              </p>
            </div>

            <p className="about-body-text">
              Agriculture is the backbone of our nation. Yet, millions of smallholder farmers face challenges accessing scheme benefits, fair market prices, and modern mechanization.
            </p>
            <p className="about-body-text">
              CropLink bridges this gap by unifying national databases, local agricultural extension centers, and smart technology onto an easy-to-use digital platform designed specifically for farmers.
            </p>

            <div className="about-checklist">
              <div className="check-item">
                <CheckCircle2 size={20} className="check-icon" />
                <span>Zero service fees for farmers to check eligibility and register</span>
              </div>
              <div className="check-item">
                <CheckCircle2 size={20} className="check-icon" />
                <span>Direct integration with Aadhaar and Digital Land Records</span>
              </div>
              <div className="check-item">
                <CheckCircle2 size={20} className="check-icon" />
                <span>Transparent tracking of subsidy approvals and bank disbursements</span>
              </div>
            </div>

            <div className="about-cta-row">
              <button 
                type="button" 
                className="btn btn-primary"
                onClick={onOpenRegister}
              >
                <span>Join CropLink Free</span>
                <ArrowRight size={18} />
              </button>
              <button 
                type="button" 
                className="btn btn-outline"
                onClick={onExploreServices}
              >
                <span>Browse Services</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Key Pillars Cards */}
          <div className="about-pillars-grid">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={pillar.title}
                className="pillar-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
              >
                <div className="pillar-icon-box">
                  {pillar.icon}
                </div>
                <h3 className="pillar-title">{pillar.title}</h3>
                <p className="pillar-desc">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
