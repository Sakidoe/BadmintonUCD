import React from 'react';
import './officermodal.css'; // Make sure to create this CSS file for styling

const officerModal = ({ show, onClose, imageSrc,title,secondary, text, text2 }) => {
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
        <p className='timeline-yap'>{text2}</p>
      </div>
    </div>
  );
};

export default officerModal;