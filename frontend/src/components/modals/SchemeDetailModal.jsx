import React, { useState } from 'react';
import { X, CheckCircle2, FileText, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import './Modals.css';

const SchemeDetailModal = ({ scheme, isOpen, onClose }) => {
  const [applied, setApplied] = useState(false);
  const [applicantName, setApplicantName] = useState('');
  const [applicantAadhaar, setApplicantAadhaar] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');

  if (!isOpen || !scheme) return null;

  const handleApply = (e) => {
    e.preventDefault();
    setApplied(true);
    setTimeout(() => {
      setApplied(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content wide" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {applied ? (
          <div className="modal-success-state">
            <div className="modal-success-icon">
              <CheckCircle2 size={52} />
            </div>
            <h3>Application Submitted!</h3>
            <p>
              Your initial application for <strong>{scheme.title}</strong> has been received with Application Reference ID <strong>#CL-{Math.floor(100000 + Math.random() * 900000)}</strong>.
            </p>
            <p className="sub-note">You will receive an SMS confirmation with next verification steps shortly.</p>
          </div>
        ) : (
          <div className="modal-inner">
            <div className="modal-header">
              <div className="modal-badge">
                <span>{scheme.category}</span>
              </div>
              <h2 className="modal-title">{scheme.title}</h2>
              <span className="modal-dept-label">{scheme.department}</span>
            </div>

            {/* Benefit Highlights */}
            <div className="scheme-modal-benefit-banner">
              <div>
                <span className="banner-label">Scheme Benefit</span>
                <div className="banner-amount">{scheme.benefit}</div>
              </div>
              <div className="banner-payout-info">
                <span>Disbursement Method:</span>
                <strong>{scheme.benefitPeriod}</strong>
              </div>
            </div>

            <p className="modal-scheme-desc">{scheme.description}</p>

            {/* 2-Column Info: Eligibility & Documents */}
            <div className="scheme-modal-details-grid">
              <div className="detail-box">
                <h4 className="detail-heading">Eligibility Criteria</h4>
                <ul className="detail-list">
                  {scheme.eligibility.map((el, i) => (
                    <li key={i}>
                      <CheckCircle2 size={16} className="detail-check" />
                      <span>{el}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="detail-box">
                <h4 className="detail-heading">Required Documents</h4>
                <ul className="detail-list">
                  {scheme.documents.map((doc, i) => (
                    <li key={i}>
                      <FileText size={16} className="detail-file-icon" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Quick Online Pre-Application Form */}
            <form onSubmit={handleApply} className="scheme-quick-apply-form">
              <h4 className="apply-heading">Apply for this Scheme Online</h4>
              <div className="form-row-2">
                <div className="form-group">
                  <label className="form-label">Farmer Name *</label>
                  <input
                    type="text"
                    required
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    placeholder="Full name as per Aadhaar"
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">12-Digit Aadhaar Number *</label>
                  <input
                    type="text"
                    required
                    maxLength="12"
                    value={applicantAadhaar}
                    onChange={(e) => setApplicantAadhaar(e.target.value)}
                    placeholder="XXXX-XXXX-XXXX"
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Contact Mobile Number *</label>
                <input
                  type="tel"
                  required
                  value={applicantPhone}
                  onChange={(e) => setApplicantPhone(e.target.value)}
                  placeholder="Mobile for DBT alerts"
                  className="form-input"
                />
              </div>

              <div className="form-actions-row">
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  <span>Submit Pre-Application</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default SchemeDetailModal;
