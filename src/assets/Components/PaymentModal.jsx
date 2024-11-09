// PaymentModal.js
import React, { useState } from 'react';
import SuccessModal from './SuccessModal';

const PaymentModal = ({ onClose, onPaymentSuccess }) => {
    const [loading, setLoading] = useState(false);

    const handlePayment = () => {
        setLoading(true);
        console.log("Payment process started...");
        // Simulate a successful payment process with a delay
        <SuccessModal/>
        setTimeout(() => {
            setLoading(false); // Stop loading
            console.log("Payment process completed.");
            
            if (typeof onPaymentSuccess === 'function') { // Check if it's a function
                onPaymentSuccess(); // Notify parent about payment success
            }
            onClose(); // Close the modal after 'payment' is done
        }, 2000); // Simulating a 2-second loading time
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white rounded-lg p-5 shadow-md w-96">
                <h2 className="text-xl font-semibold mb-4">UPI Payment</h2>
                
                {loading ? (
                    <div className="flex justify-center items-center">
                        <div className="loader"></div>
                        <span className="ml-2">Processing...</span>
                    </div>
                ) : (
                    <>
                        <p>Please confirm your payment to continue.</p>
                        <div className="mt-4 mb-4">
                            <p><strong>Amount:</strong> ₹500.00</p>
                            <p><strong>Payee:</strong> Dummy Merchant</p>
                        </div>
                        <button onClick={handlePayment} className="bg-blue-500 text-white py-2 px-4 rounded">
                            Pay Now
                        </button>
                        <button onClick={onClose} className="bg-red-500 text-white py-2 px-4 rounded ml-2">
                            Cancel
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default PaymentModal