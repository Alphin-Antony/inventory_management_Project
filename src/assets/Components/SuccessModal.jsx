// SuccessModal.js
import React from 'react';
import './SuccessModal.css'; // Make sure to include your CSS file

const SuccessModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
alert("helo");
    return (
        
        <div className="modal-overlay">
           
            <div className="modal">
                <h2>Payment Successful!</h2>
                <h1></h1>
                <span className="tick-mark">✔️</span>
                <p>Your payment was successful! order has been confirmed.</p>
                <button onClick={onClose}>Close</button>
            </div>
           
        </div>
    );

};
alert("dsf");
export default SuccessModal;