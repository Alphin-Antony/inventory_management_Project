import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './orderupdate.css'; 
import DashboardAd from './DashboardAd';
import Footer from '../Footer';

const OrderUpdate = () => {
    const [orders, setOrders] = useState([]); 
    const [deliveryBoys, setDeliveryBoys] = useState([]);
    const [selectedOrderId, setSelectedOrderId] = useState('');
    const [selectedDeliveryBoyId, setSelectedDeliveryBoyId] = useState('');
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState('');

    const fetchOrders = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/orders');
            setOrders(response.data);
        } catch (error) {
            console.error("Error fetching orders:", error);
           
        }
    };

    const fetchDeliveryBoys = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/deliveryboys');
            setDeliveryBoys(response.data);
        } catch (error) {
            console.error("Error fetching delivery boys:", error);
           
        }
    };

    const assignDelivery = async (e) => {
        e.preventDefault();
        const assignment = {
            OrderId: selectedOrderId,
            DeliveryBoyId: selectedDeliveryBoyId,
            AssignmentDate: new Date()
        };
        try {
            await axios.post('http://localhost:5000/api/deliveryassignments', assignment);
            setMessage('Delivery successfully assigned!');
            // Reset selections after assignment
            setSelectedOrderId('');
            setSelectedDeliveryBoyId('');
        } catch (error) {
            console.error("Error assigning delivery:", error);
            setMessage('Error assigning delivery');
        }
    };
  
    useEffect(() => {
        const loadData = async () => {
            await Promise.all([fetchOrders(), fetchDeliveryBoys()]);
            setLoading(false);
        };
        loadData();
    }, []);

    return (
        <div className='app-background'>
            <DashboardAd />
            <div className="container">
                <h3 style={{ textAlign:'center',backgroundColor:'#c2f0ab', borderRadius: '8px'}}>UPDATE ORDERS</h3>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <form onSubmit={assignDelivery} className="form">
                        <div className="select-container">
                            <label htmlFor="orderSelect">Select Order</label>
                            <select 
                                id="orderSelect" 
                                value={selectedOrderId} 
                                onChange={e => setSelectedOrderId(e.target.value)} 
                                required>
    <option value="">Select Status</option>
    <option value="delivered">SHIRTS</option>
    <option value="cancelled">PANTS</option>
    <option value="cancelled">T-SHIRTS</option>
                               
                            </select>
                        </div>
                        <div className="select-container">
                            <label htmlFor="deliveryBoySelect">Select status</label>
                            <select
    id="deliveryBoySelect"
    value={selectedDeliveryBoyId}
    onChange={e => setSelectedDeliveryBoyId(e.target.value)}
    required>
    <option value="">Select Status</option>
    <option value="delivered">Delivered</option>
    <option value="cancelled">Cancel</option>
</select>
                        </div>
                        <button type="submit" className="assign-button" >
                            UPDATE
                        </button>
                    </form>
                )}
                {message && <div className="message">{message}</div>}
            </div>
            <Footer/>
        </div>
    );
}

export default OrderUpdate
