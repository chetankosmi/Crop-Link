import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, Sparkles, Sprout } from 'lucide-react';
import { SCHEMES } from '../../data/schemesData';
import './Modals.css';

const EligibilityCheckerModal = ({ isOpen, onClose, onSelectScheme }) => {
  const [step, setStep] = useState(1);
  const [landType, setLandType] = useState('small'); // 'small', 'medium', 'large'
  const [irrigationSource, setIrrigationSource] = useState('rainfed'); // 'rainfed', 'borewell', 'canal'
  const [interestedIn, setInterestedIn] = useState('all'); // 'income', 'solar', 'drip', 'insurance'

  if (!isOpen) return null;

  const handleFinish = () => {
    setStep(2);
  };

  // Matched schemes based on answers
  const matched = SCHEMES.filter((s) => {
    if (interestedIn === 'solar' && s.id === 'pm-kusum') return true;
    if (interestedIn === 'drip' && s.id === 'micro-irrigation') return true;
    if (interestedIn === 'insurance' && s.id === 'pmfby') return true;
    if (interestedIn === 'income' && s.id === 'pm-kisan') return true;
    return true;
  });

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="modal-inner">
          <div className="modal-header">
            <div className="modal-badge">
              <Sparkles size={16} />
              <span>Smart Eligibility Engine</span>
            </div>
            <h2 className="modal-title">Scheme Eligibility Quiz</h2>
            <p className="modal-desc">
              Answer 3 simple questions to instantly uncover every government scheme you can claim.
            </p>
          </div>

          {step === 1 ? (
            <div className="quiz-flow">
              <div className="form-group">
                <label className="form-label">1. What is your total cultivated landholding?</label>
                <div className="quiz-options-group">
                  <button
                    type="button"
                    className={`quiz-option-btn ${landType === 'small' ? 'selected' : ''}`}
                    onClick={() => setLandType('small')}
                  >
                    <span>Under 2 Acres (Small / Marginal)</span>
                    {landType === 'small' && <CheckCircle2 size={18} />}
                  </button>
                  <button
                    type="button"
                    className={`quiz-option-btn ${landType === 'medium' ? 'selected' : ''}`}
                    onClick={() => setLandType('medium')}
                  >
                    <span>2 to 5 Acres</span>
                    {landType === 'medium' && <CheckCircle2 size={18} />}
                  </button>
                  <button
                    type="button"
                    className={`quiz-option-btn ${landType === 'large' ? 'selected' : ''}`}
                    onClick={() => setLandType('large')}
                  >
                    <span>More than 5 Acres</span>
                    {landType === 'large' && <CheckCircle2 size={18} />}
                  </button>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">2. What is your primary water / irrigation source?</label>
                <div className="quiz-options-group">
                  <button
                    type="button"
                    className={`quiz-option-btn ${irrigationSource === 'borewell' ? 'selected' : ''}`}
                    onClick={() => setIrrigationSource('borewell')}
                  >
                    <span>Tubewell / Borewell (Need Solar / Power)</span>
                    {irrigationSource === 'borewell' && <CheckCircle2 size={18} />}
                  </button>
                  <button
                    type="button"
                    className={`quiz-option-btn ${irrigationSource === 'canal' ? 'selected' : ''}`}
                    onClick={() => setIrrigationSource('canal')}
                  >
                    <span>Canal / River Water</span>
                    {irrigationSource === 'canal' && <CheckCircle2 size={18} />}
                  </button>
                  <button
                    type="button"
                    className={`quiz-option-btn ${irrigationSource === 'rainfed' ? 'selected' : ''}`}
                    onClick={() => setIrrigationSource('rainfed')}
                  >
                    <span>Rainfed (Monsoon Dependent)</span>
                    {irrigationSource === 'rainfed' && <CheckCircle2 size={18} />}
                  </button>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">3. What is your primary priority?</label>
                <div className="quiz-options-group">
                  <button
                    type="button"
                    className={`quiz-option-btn ${interestedIn === 'income' ? 'selected' : ''}`}
                    onClick={() => setInterestedIn('income')}
                  >
                    <span>Direct Cash Subsidies (PM-KISAN)</span>
                    {interestedIn === 'income' && <CheckCircle2 size={18} />}
                  </button>
                  <button
                    type="button"
                    className={`quiz-option-btn ${interestedIn === 'solar' ? 'selected' : ''}`}
                    onClick={() => setInterestedIn('solar')}
                  >
                    <span>Solar Water Pump (60% Subsidy)</span>
                    {interestedIn === 'solar' && <CheckCircle2 size={18} />}
                  </button>
                  <button
                    type="button"
                    className={`quiz-option-btn ${interestedIn === 'drip' ? 'selected' : ''}`}
                    onClick={() => setInterestedIn('drip')}
                  >
                    <span>Drip Irrigation Pipes (55% Grant)</span>
                    {interestedIn === 'drip' && <CheckCircle2 size={18} />}
                  </button>
                </div>
              </div>

              <button
                type="button"
                className="btn btn-primary"
                style={{ width: '100%', marginTop: '1rem' }}
                onClick={handleFinish}
              >
                <span>Calculate My Eligible Schemes</span>
                <ArrowRight size={18} />
              </button>
            </div>
          ) : (
            <div className="quiz-results">
              <div className="matched-banner">
                <CheckCircle2 size={24} className="matched-icon" />
                <div>
                  <h4>You are eligible for {matched.length} Schemes!</h4>
                  <p>Based on your landholding and irrigation details.</p>
                </div>
              </div>

              <div className="matched-list">
                {matched.slice(0, 3).map((item) => (
                  <div key={item.id} className="matched-item-card">
                    <div>
                      <h5>{item.title}</h5>
                      <span className="matched-benefit">{item.benefit}</span>
                    </div>
                    <button
                      type="button"
                      className="btn-apply-small"
                      onClick={() => {
                        onClose();
                        onSelectScheme(item);
                      }}
                    >
                      Apply Now
                    </button>
                  </div>
                ))}
              </div>

              <button
                type="button"
                className="btn btn-outline"
                style={{ width: '100%', marginTop: '1rem' }}
                onClick={() => setStep(1)}
              >
                Retake Quiz
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EligibilityCheckerModal;
