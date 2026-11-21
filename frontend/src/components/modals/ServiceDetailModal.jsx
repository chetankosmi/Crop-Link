import React, { useState } from 'react';
import { X, Check, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import './Modals.css';

const ServiceDetailModal = ({ service, isOpen, onClose }) => {
  const [requested, setRequested] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  if (!isOpen || !service) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setRequested(true);
    setTimeout(() => {
      setRequested(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {requested ? (
          <div className="modal-success-state">
            <div className="modal-success-icon">
              <CheckCircle2 size={52} />
            </div>
            <h3>Service Request Initiated!</h3>
            <p>
              Thank you, <strong>{name}</strong>. Our local agricultural specialist for <strong>{service.title}</strong> will call you at <strong>{phone}</strong> within 24 hours.
            </p>
          </div>
        ) : (
          <div className="modal-inner">
            <div className="modal-header">
              <div className="modal-badge">
                <span>{service.stats}</span>
              </div>
              <h2 className="modal-title">{service.title}</h2>
              <p className="modal-desc">{service.tagline}</p>
            </div>

            <p className="modal-scheme-desc">{service.description}</p>

            <div className="service-features-box">
              <h4 className="detail-heading">Included Features</h4>
              <ul className="service-features-list">
                {service.features.map((f, i) => (
                  <li key={i} className="service-feature-item">
                    <Check size={16} className="feature-check" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <form onSubmit={handleSubmit} className="service-callback-form">
              <h4 className="apply-heading">Request Free Assistance / Call Back</h4>
              <div className="form-group">
                <label className="form-label">Your Name *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Mobile Number *</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="10-digit mobile number"
                  className="form-input"
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                <span>Connect with Field Officer</span>
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceDetailModal;
