// src/components/Payment.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Payment = ({ onPaymentSuccess }) => {
  const navigate = useNavigate();

  const handlePayment = () => {
    // Simulate payment processing
    setTimeout(() => {
      // Assuming payment is successful
      onPaymentSuccess();
      navigate('/'); // Redirecting back to home after payment is successful
    }, 2000); // Simulate processing time
  };

  return (
    <div>
      <h2>Payment Page</h2>
      <button onClick={handlePayment}>Process Payment</button>
    </div>
  );
};

export default Payment;


