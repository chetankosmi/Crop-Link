import React from 'react';
import { motion } from 'framer-motion';
import { 
  UserPlus, 
  MapPin, 
  Search, 
  FileCheck, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';
import './HowItWorks.css';

const HowItWorks = ({ onGetStarted }) => {
  const steps = [
    {
      step: "01",
      title: "Create your account",
      desc: "Sign up in 30 seconds with your mobile number. Simple OTP verification with zero paperwork required.",
      icon: <UserPlus size={26} />,
      tip: "Free farmer registration"
    },
    {
      step: "02",
      title: "Add your farm details",
      desc: "Input your village location, land area (acres), and current seasonal crops (wheat, rice, cotton, vegetables).",
      icon: <MapPin size={26} />,
      tip: "Instant land survey linkage"
    },
    {
      step: "03",
      title: "Find useful schemes",
      desc: "CropLink's smart matching engine recommends exact central and state subsidies with highest financial payouts.",
      icon: <Search size={26} />,
      tip: "Personalized eligibility engine"
    },
    {
      step: "04",
      title: "Apply and track application",
      desc: "Submit your pre-filled digital application and receive real-time SMS alerts at every verification milestone.",
      icon: <FileCheck size={26} />,
      tip: "Direct DBT bank updates"
    }
  ];

  return (
    <section id="how-it-works" className="section section-bg-muted how-it-works-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={16} />
            <span>Simple 4-Step Process</span>
          </div>
          <h2 className="section-title">
            How CropLink Works
          </h2>
          <p className="section-subtitle">
            Get your eligible agriculture subsidies and smart farming services up and running in just a few minutes.
          </p>
        </div>

        {/* Steps Grid with Connected Flow */}
        <div className="workflow-grid">
          {steps.map((item, idx) => (
            <motion.div
              key={item.step}
              className="workflow-step-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              {/* Step Number Watermark */}
              <div className="step-num-watermark">{item.step}</div>

              {/* Icon Container */}
              <div className="step-icon-box">
                {item.icon}
                <span className="step-number-tag">{item.step}</span>
              </div>

              {/* Title & Description */}
              <h3 className="step-title">{item.title}</h3>
              <p className="step-desc">{item.desc}</p>

              {/* Tip Badge */}
              <div className="step-tip-badge">
                <CheckCircle2 size={14} className="tip-check" />
                <span>{item.tip}</span>
              </div>

              {/* Progress connector arrow (visible on desktop except last item) */}
              {idx < steps.length - 1 && (
                <div className="step-connector-arrow">
                  <ArrowRight size={20} />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <motion.div 
          className="workflow-bottom-cta"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="cta-content">
            <h3>Ready to claim your rightful farming subsidies?</h3>
            <p>Join over 120,000 farmers nationwide using CropLink today.</p>
          </div>
          <button 
            type="button" 
            className="btn btn-primary"
            onClick={onGetStarted}
          >
            <span>Start Free Registration</span>
            <ArrowRight size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
