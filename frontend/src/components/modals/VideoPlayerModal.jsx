import React from 'react';
import { X, Eye, Clock, CheckCircle2, Share2 } from 'lucide-react';
import './Modals.css';

const VideoPlayerModal = ({ video, isOpen, onClose }) => {
  if (!isOpen || !video) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content wide video-modal" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="video-player-frame-wrapper">
          <iframe
            src={`${video.embedUrl}?autoplay=1&rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="video-iframe"
          />
        </div>

        <div className="video-player-details">
          <div className="video-modal-tag-row">
            <span className="v-cat-pill">{video.category}</span>
            <div className="v-meta">
              <Clock size={14} />
              <span>{video.duration}</span>
            </div>
            <div className="v-meta">
              <Eye size={14} />
              <span>{video.views}</span>
            </div>
          </div>

          <h2 className="video-player-title">{video.title}</h2>
          <p className="video-player-desc">{video.description}</p>

          <div className="video-modal-footer">
            <div className="verified-guide-badge">
              <CheckCircle2 size={16} />
              <span>Verified Agricultural Educational Resource</span>
            </div>
            <button
              type="button"
              className="btn btn-outline"
              onClick={() => {
                if (navigator.clipboard) {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Video link copied to clipboard!');
                }
              }}
            >
              <Share2 size={16} />
              <span>Share Video</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayerModal;
