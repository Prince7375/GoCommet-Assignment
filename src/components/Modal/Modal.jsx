import React from 'react';
import './Modal.css';

const Modal = ({ children, onClose }) => (
  <div className="modal-backdrop">
    <div className="modal-content">
      <button className="close-button" onClick={onClose}>
        ✕
      </button>
      {children}
    </div>
  </div>
);

export default Modal;
