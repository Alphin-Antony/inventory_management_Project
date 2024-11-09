import React, { useState, useEffect } from 'react';
import { ShoppingCart, Trash2 } from 'lucide-react';
import CardContent from '@mui/material/CardContent';
import CardHeader from 'react-bootstrap/CardHeader';
import CardTitle from 'react-bootstrap/CardTitle';
import CardFooter from 'react-bootstrap/CardFooter';
import Card from 'react-bootstrap/Card';
import Navbar from './Navbar';
import CardGroup from 'react-bootstrap/CardGroup';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

export const Orders = () => {

  const [cartItems, setCartItems] = useState([]);
  const custid=localStorage.getItem('custid');
  useEffect(() => {
    // Replace this with your actual API call
    fetch(`https://localhost:44350/api/Employees/Getorders?email=${custid}&status=${1}`)
    
      .then(response => response.json())
      .then(data => {
        console.log('Data fetched:', data);
        
        setCartItems(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  
  return (
    <div className='app-background'>
    <div>
      <Navbar/>
    <div>
    <div className='container my-4 py-4' style={{ marginLeft: "439px" }}>
          <div className='row'>
            <h1 className='display-5 fw-bolder text-center text-purple-900'>ORDERS</h1>
          </div>
        </div>

    </div>
   
    {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cartItems.map((item, index) => (
              <Card key={index} sx={{ backgroundColor: '#f9f9ff', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}>
                <CardHeader className="bg-purple-500 text-blue">
                  <CardTitle className="text-2xl font-semibold">{item.productName}</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-gray-700">Item Name: <span className="font-semibold text-purple-600">{item.productName}</span></p>
                  <p className="text-gray-700">Price: <span className="font-semibold text-green-600">₹{item.price.toFixed(2)}</span></p>
                  <p className="text-gray-700">Quanity: <span className="font-semibold text-purple-600">{item.quantity}</span></p>
                  <p className="text-gray-700">OrderID: <span className="font-semibold text-purple-600">{item.orderNo}</span></p>

                </CardContent>
                <CardFooter className="bg-purple-500 text-blue">
                 
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="btn btn-primary"
                  >
                    DELIVERY PENDING
                  </button>
                </CardFooter>
              </Card>
            ))}
          </div>

        ) : (
          <Card className="text-center py-8 bg-white border border-purple-200">
            <CardContent>
              <p className="text-xl text-gray-500">NO ORDERS</p>
            </CardContent>
          </Card>
        )}
    </div>
    <Footer/>
    </div>
  )
}
