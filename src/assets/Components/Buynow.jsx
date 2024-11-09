// Cart.js
import React, { useState } from 'react';
import PaymentModal from './PaymentModal'; // Make sure this path is correct
 import toast from 'react-hot-toast';
//import { toast } from 'react-toastify'; // Import the toast function
import SuccessModal from './SuccessModal';// Import SuccessModal
import Navbar from './Navbar';

const Cart = () => {
    const [showPaymentModal, setShowPaymentModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false); // State for success modal
    const [totalAmount] = useState(500);
    

    const handleAddToCart = () => {
        setShowPaymentModal(true); // Show payment modal
    };

    const handlePaymentSuccess = () => {
        setShowSuccessModal(true); // Show success modal
    };

    const closeSuccessModal = () => {
        setShowSuccessModal(false); // Close success modal
        setShowPaymentModal(false); // Optionally close payment modal on success
    };

    return (
        <div>
          
            <h1>Your Cart</h1>
            <div>
                <p>Total Amount: ₹{totalAmount}</p>
                <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handleAddToCart}
                >
                    Buy Now
                </button>
            </div>

            {showPaymentModal && (
                <PaymentModal 
                    onClose={() => setShowPaymentModal(false)} 
                    onPaymentSuccess={handlePaymentSuccess} 
                />
            )}
            
           <SuccessModal isOpen={showSuccessModal} onClose={closeSuccessModal}/>{/* Show success modal */}
        </div>
    );
};

export default Cart;