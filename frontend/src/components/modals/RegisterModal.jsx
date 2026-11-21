import React, { useState } from 'react';
import { X, UserPlus, ArrowRight, CheckCircle2, ShieldCheck, MapPin, Sprout } from 'lucide-react';
import './Modals.css';

const RegisterModal = ({ isOpen, onClose, onSwitchToLogin }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    state: 'Punjab',
    district: '',
    landSize: '2-5 Acres',
    primaryCrop: 'Wheat & Rice'
  });
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {isSuccess ? (
          <div className="modal-success-state">
            <div className="modal-success-icon">
              <CheckCircle2 size={52} />
            </div>
            <h3>Registration Complete!</h3>
            <p>
              Welcome to CropLink, <strong>{formData.fullName}</strong>. Your Farmer ID has been generated and sent via SMS to <strong>+91 {formData.mobile}</strong>.
            </p>
          </div>
        ) : (
          <div className="modal-inner">
            <div className="modal-header">
              <div className="modal-badge">
                <UserPlus size={16} />
                <span>Free Farmer Registration</span>
              </div>
              <h2 className="modal-title">Join CropLink Today</h2>
              <p className="modal-desc">
                Link your farm details to automatically discover eligible government subsidies and agronomy alerts.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-group">
                <label className="form-label">Farmer Full Name *</label>
                <input
                  type="text"
                  required
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. Gurpreet Singh"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Aadhaar Linked Mobile Number *</label>
                <input
                  type="tel"
                  required
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="10-digit mobile number"
                  className="form-input"
                />
              </div>

              <div className="form-row-2">
                <div className="form-group">
                  <label className="form-label">State *</label>
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="Punjab">Punjab</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Bihar">Bihar</option>
                    <option value="West Bengal">West Bengal</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Other">Other State</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">District / Village *</label>
                  <input
                    type="text"
                    required
                    name="district"
                    value={formData.district}
                    onChange={handleChange}
                    placeholder="Enter district or village"
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-row-2">
                <div className="form-group">
                  <label className="form-label">Farm Land Size *</label>
                  <select
                    name="landSize"
                    value={formData.landSize}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="Under 2 Acres (Small)">Under 2 Acres (Small / Marginal)</option>
                    <option value="2-5 Acres">2 to 5 Acres</option>
                    <option value="5-10 Acres">5 to 10 Acres</option>
                    <option value="10+ Acres">More than 10 Acres</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Primary Crop *</label>
                  <select
                    name="primaryCrop"
                    value={formData.primaryCrop}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="Wheat & Rice">Wheat & Rice</option>
                    <option value="Cotton">Cotton</option>
                    <option value="Sugarcane">Sugarcane</option>
                    <option value="Pulses & Oilseeds">Pulses & Oilseeds</option>
                    <option value="Vegetables & Fruits">Vegetables & Fruits</option>
                    <option value="Spices & Plantation">Spices & Plantation</option>
                  </select>
                </div>
              </div>

              <div className="security-note">
                <ShieldCheck size={16} />
                <span>Zero charge. Governed by Ministry of Agriculture guidelines.</span>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.75rem' }}>
                <span>Complete Registration</span>
                <ArrowRight size={18} />
              </button>
            </form>

            <div className="modal-footer-switch">
              <span>Already registered?</span>{' '}
              <button
                type="button"
                className="link-btn"
                onClick={() => {
                  onClose();
                  onSwitchToLogin();
                }}
              >
                Log In to Your Account
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegisterModal;
