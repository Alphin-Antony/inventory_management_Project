import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Adminnavbar from './Adminnavbar';
import './DeliveryAssignment.css'; // Import CSS file for styling

const DeliveryAssignment = () => {
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
            setMessage('Error loading orders');
        }
    };

    const fetchDeliveryBoys = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/deliveryboys');
            setDeliveryBoys(response.data);
        } catch (error) {
            console.error("Error fetching delivery boys:", error);
            setMessage('Error loading delivery boys');
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
            <Adminnavbar />
            <div className="container">
                <h3 style={{ textAlign:'center',backgroundColor:'#c2f0ab', borderRadius: '8px'}}>Assign Delivery</h3>
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
                                <option value="">Select Order</option>
                                {orders.map(order => (
                                    <option key={order.id} value={order.id}>{order.description}</option>
                                ))}
                            </select>
                        </div>
                        <div className="select-container">
                            <label htmlFor="deliveryBoySelect">Select Delivery Boy</label>
                            <select 
                                id="deliveryBoySelect" 
                                value={selectedDeliveryBoyId} 
                                onChange={e => setSelectedDeliveryBoyId(e.target.value)} 
                                required>
                                <option value="">Select Delivery Boy</option>
                                {deliveryBoys.map(boy => (
                                    <option key={boy.id} value={boy.id}>{boy.name}</option>
                                ))}
                            </select>
                        </div>
                        <button type="submit" className="assign-button" >
                            Assign Delivery
                        </button>
                    </form>
                )}
                {message && <div className="message">{message}</div>}
            </div>
        </div>
    );
};

export default DeliveryAssignment;