// import { useState } from 'react'
// import './App.css'
// import Login from './assets/Components/Login'
// import Navbar from './assets/Components/Navbar'
// import Products from './assets/Components/Products'
// import { BrowserRouter, Navigate } from 'react-router-dom'
// import { Routes } from 'react-router-dom'
// import { Route } from 'react-router-dom'
// import Dashboard from './assets/Components/Dashboard'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import  Profile  from './assets/Components/Profile'
// import Home from './assets/Components/Home'
// import Product1 from './assets/Components/Product1'
// import Cart from './assets/Components/Cart'
// import Adminhome from './assets/Components/Adminhome'
// import { Orders } from './assets/Components/Orders'
// import Buynow from './assets/Components/Buynow'
// import { ToastContainer } from 'react-bootstrap'
// import Payment from './assets/Components/Payment'







// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//      <BrowserRouter>
 

   
// <Routes>
// <Route path="/" index element={<Login/>}/>
// <Route path="/Home"  element={<Home/>}/>
//   <Route path="/Products"  element={<Products/>}/>
//   <Route path="/Profile"  element={<Profile/>}/>
//   <Route path="/Product1"  element={<Product1/>}/> 
//   <Route path="/Cart"  element={<Cart/>}/> 
//   <Route path="/Orders"  element={<Orders/>}/> 
//   <Route path="/Adminhome"  element={<Adminhome/>}/> 
//   <Route path="/Login"  element={<Login/>}/> 
//   <Route path="/Payment" element={<Payment onPaymentSuccess={handlePaymentSucess}/>}/>
//   <Route path="/Buynow"  element={<Navigate to="/Payment"/>}/>
  
// </Routes>
// {isPopupVisible && (
// <ConfirmationPopup onClose={() => setPopupVisible(false)} />
// )}
// </BrowserRouter>
// <ToastContainer/>
//     </>
//   )
// }

// export default App



import { useState } from 'react';
import './App.css';
import Login from './assets/Components/Login';
import Navbar from './assets/Components/Navbar';
import Products from './assets/Components/Products';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './assets/Components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './assets/Components/Profile';
import Home from './assets/Components/Home';
import Product1 from './assets/Components/Product1';
import Cart from './assets/Components/Cart';
import Adminhome from './assets/Components/Adminhome';
import { Orders } from './assets/Components/Orders';
import Payment from './assets/Components/Payment'; // Import Payment component
import ConfirmationPopup from './assets/Components/ConfirmationPopup'; // Import Popup component
import { ToastContainer } from 'react-bootstrap';
import ProductManager from './assets/Components/ProductManager';
import DeliveryAssignment from './assets/Components/DeliveryAssignment ';
import DashboardLayoutNavigationDividers from './assets/Components/Agent/DashboardAd';
import OrderUpdate from './assets/Components/Agent/OrderUpdate';
import Pickorder from './assets/Components/Agent/Pickorder';




function App() {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handlePaymentSuccess = () => {
    setPopupVisible(true);
  };

  return (
    <>
      <BrowserRouter>
   
        <Routes>
          <Route path="/" index element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Product1" element={<Product1 />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Orders" element={<Orders />} />
          <Route path="/Adminhome" element={<Adminhome />} />
          <Route path="/ProductManager" element={<ProductManager />} />
          <Route path="/DeliveryAssignment" element={<DeliveryAssignment />} />
          <Route path="/DashboardAd" element={<DashboardLayoutNavigationDividers />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Payment" element={<Payment onPaymentSuccess={handlePaymentSuccess} />} />
          <Route path="/Buynow" element={<Navigate to="/Payment" />} /> {/* Redirect to Payment on Buy Now */}
          <Route path="/OrderUpdate" element={<OrderUpdate />} />
          <Route path="/Pickorder" element={<Pickorder />} />
        </Routes>

        {/* {isPopupVisible && (
          <ConfirmationPopup onClose={() => setPopupVisible(false)} />
        )} */}

      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;