import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  HelpCircle, 
  ShieldCheck, 
  Clock 
} from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: 'Scheme Application Assistance',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Mail size={16} />
            <span>Farmer Help Desk</span>
          </div>
          <h2 className="section-title">
            Get in Touch with CropLink
          </h2>
          <p className="section-subtitle">
            Have questions about scheme eligibility, equipment bookings, or farm registration? Our agricultural support team is ready to assist you.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="contact-grid">
          {/* Left Column: Direct Info Cards */}
          <div className="contact-info-cards">
            <div className="info-card-item helpline-highlight">
              <div className="info-icon-box">
                <Phone size={24} />
              </div>
              <div className="info-content">
                <span className="info-tag">Toll-Free Helpline</span>
                <h3 className="info-title">1800-180-1551</h3>
                <p className="info-desc">Dedicated Kisan Call Center support available in 22 regional languages.</p>
                <div className="info-timing">
                  <Clock size={14} />
                  <span>Available 6:00 AM – 10:00 PM (Daily)</span>
                </div>
              </div>
            </div>

            <div className="info-card-item">
              <div className="info-icon-box">
                <Mail size={24} />
              </div>
              <div className="info-content">
                <span className="info-tag">Email Support</span>
                <h3 className="info-title">support@croplink.in</h3>
                <p className="info-desc">Send us your application queries or documentation verification requests.</p>
              </div>
            </div>

            <div className="info-card-item">
              <div className="info-icon-box">
                <MapPin size={24} />
              </div>
              <div className="info-content">
                <span className="info-tag">National Headquarters</span>
                <h3 className="info-title">Krishi Anusandhan Bhavan</h3>
                <p className="info-desc">Pusa Complex, New Delhi 110012, India.</p>
              </div>
            </div>

            <div className="security-assurance-box">
              <ShieldCheck size={20} className="shield-icon" />
              <span>All farmer information is encrypted and securely linked to official government portals.</span>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-wrapper">
            {submitted ? (
              <motion.div 
                className="contact-success-state"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="success-icon-circle">
                  <CheckCircle2 size={48} />
                </div>
                <h3>Message Sent Successfully!</h3>
                <p>
                  Thank you, <strong>{formData.name}</strong>. A CropLink agricultural advisor will contact you on <strong>{formData.phone || formData.email}</strong> shortly.
                </p>
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      topic: 'Scheme Application Assistance',
                      message: ''
                    });
                  }}
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <h3 className="form-heading">Send Us a Message</h3>
                <p className="form-subtext">Fill out this quick form and our field coordinator will get back to you.</p>

                <div className="form-group">
                  <label htmlFor="contact-name" className="form-label">Farmer / Full Name *</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="form-input"
                  />
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label htmlFor="contact-email" className="form-label">Email Address *</label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. farmer@example.com"
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-phone" className="form-label">Mobile Number *</label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="10-digit mobile number"
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-topic" className="form-label">Topic / Service *</label>
                  <select
                    id="contact-topic"
                    name="topic"
                    value={formData.topic}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="Scheme Application Assistance">Scheme Application Assistance (PM-KISAN / PMFBY)</option>
                    <option value="Solar Pump & Drip Subsidy">Solar Pump & Drip Irrigation Subsidy</option>
                    <option value="Drone Spraying Rental">Drone Spraying & Machinery Booking</option>
                    <option value="Soil Health Testing">Soil Health Testing Advisory</option>
                    <option value="General Grievance">General Feedback or Grievance</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message" className="form-label">Your Message *</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please describe your question or scheme assistance required in simple words..."
                    className="form-textarea"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-primary submit-btn"
                  style={{ width: '100%' }}
                >
                  {loading ? (
                    <span>Submitting Message...</span>
                  ) : (
                    <>
                      <span>Submit Inquiry</span>
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
