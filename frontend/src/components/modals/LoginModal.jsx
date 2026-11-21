import React, { useState } from 'react';
import { X, Smartphone, Lock, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import './Modals.css';

const LoginModal = ({ isOpen, onClose, onSwitchToRegister }) => {
  const [mobile, setMobile] = useState('');
  const [loginMethod, setLoginMethod] = useState('otp'); // 'otp' or 'password'
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSendOtp = (e) => {
    e.preventDefault();
    if (mobile.length >= 10) {
      setOtpSent(true);
    }
  };

  const handleVerify = (e) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setOtpSent(false);
      onClose();
    }, 1500);
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
            <h3>Login Successful!</h3>
            <p>Welcome back to your CropLink Farmer Dashboard.</p>
          </div>
        ) : (
          <div className="modal-inner">
            <div className="modal-header">
              <div className="modal-badge">
                <ShieldCheck size={16} />
                <span>Farmer Portal Login</span>
              </div>
              <h2 className="modal-title">Access Your Account</h2>
              <p className="modal-desc">
                Log in to check your subsidy status, scheme applications, and farm advisories.
              </p>
            </div>

            {/* Login Method Switcher */}
            <div className="modal-tab-switch">
              <button
                type="button"
                className={`tab-btn ${loginMethod === 'otp' ? 'active' : ''}`}
                onClick={() => { setLoginMethod('otp'); setOtpSent(false); }}
              >
                Mobile OTP (Quick)
              </button>
              <button
                type="button"
                className={`tab-btn ${loginMethod === 'password' ? 'active' : ''}`}
                onClick={() => setLoginMethod('password')}
              >
                Password Login
              </button>
            </div>

            {loginMethod === 'otp' ? (
              !otpSent ? (
                <form onSubmit={handleSendOtp} className="modal-form">
                  <div className="form-group">
                    <label className="form-label">Registered Mobile Number *</label>
                    <div className="input-with-icon">
                      <Smartphone size={18} className="field-icon" />
                      <input
                        type="tel"
                        required
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        placeholder="Enter 10-digit mobile number"
                        className="form-input with-icon"
                      />
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                    <span>Send Login OTP</span>
                    <ArrowRight size={18} />
                  </button>
                </form>
              ) : (
                <form onSubmit={handleVerify} className="modal-form">
                  <div className="otp-sent-notice">
                    <span>OTP sent to <strong>+91 {mobile}</strong></span>
                    <button type="button" onClick={() => setOtpSent(false)} className="edit-num-btn">Change</button>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Enter 6-digit OTP *</label>
                    <input
                      type="text"
                      required
                      maxLength="6"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      placeholder="e.g. 524189"
                      className="form-input text-center otp-field"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                    <span>Verify & Login</span>
                    <ArrowRight size={18} />
                  </button>
                </form>
              )
            ) : (
              <form onSubmit={handleVerify} className="modal-form">
                <div className="form-group">
                  <label className="form-label">Mobile Number / Farmer ID *</label>
                  <div className="input-with-icon">
                    <Smartphone size={18} className="field-icon" />
                    <input
                      type="text"
                      required
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      placeholder="Mobile or Farmer ID"
                      className="form-input with-icon"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Password *</label>
                  <div className="input-with-icon">
                    <Lock size={18} className="field-icon" />
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter password"
                      className="form-input with-icon"
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  <span>Secure Login</span>
                  <ArrowRight size={18} />
                </button>
              </form>
            )}

            <div className="modal-footer-switch">
              <span>New to CropLink?</span>{' '}
              <button
                type="button"
                className="link-btn"
                onClick={() => {
                  onClose();
                  onSwitchToRegister();
                }}
              >
                Register as a New Farmer
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginModal;
