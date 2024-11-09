// src/components/ConfirmationPopup.jsx
import React from 'react';

const ConfirmationPopup = ({ onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <h3>Payment Received!</h3>
        <p>Your order has been placed successfully.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ConfirmationPopup;