import React from 'react';
import './Modal.css'; // Make sure to create this CSS file for styling

const Modal = ({ show, onClose, imageSrc,title,secondary, text }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="image-container">
          <img src={imageSrc} alt="Modal" style={{ width: '100%' }} />
          <span className="close" onClick={onClose}>&times;</span>
        </div>
        <p className='timeline-title'>{title}</p>
        <p className='timeline-secondary'>{secondary}</p>
        <p className='timeline-yap'>{text}</p>
      </div>
    </div>
  );
};

export default Modal;
