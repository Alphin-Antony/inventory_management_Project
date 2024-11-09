// import React, { useState, useEffect } from 'react';
// import Navbar from './Navbar'

// const Cart = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   // const fetchProducts = async (event) => {
//   //   const custid=localStorage.getItem('custid');
    
//   // const apiurl='http://localhost:5204/api/Employees/GetItemsbyid/96757';
//   // fetch(apiurl)
//   // .then((response)=>{
//   //   if (response.ok) {
//   //     alert('ok');
//   //     alert(response);
//   //     return response.json();
      
      
     
     
//   //   } 
//   //  else{
//   //   console.log('Registration failed:'); 
//   //   throw new Error('Registration failed');
//   //  }
//   // })
     
       
   
//   // };
//   const fetchProducts = async (event) => {
//     const custid = localStorage.getItem('custid');
   
//     const apiurl = `http://localhost:5204/api/Employees/GetItemsbyid/96757`;  // Using custid from localStorage
//     try {
//         const response = await fetch(apiurl);  // Await fetch request

//         if (!response.ok) {  // Check if response is OK
//             throw new Error('Error fetching items');
//         }

//         const data = await response.json();  // Convert response to JSON
//         alert('Fetch successful');  // Alert success
//         alert(data);
//         console.log('Fetched Items:', data);  // Log the actual data

//         // You can use the data here, e.g., updating the state or rendering it
//     } catch (error) {
//         console.error('Error:', error.message);  // Handle errors
//     }
// };
//   const handleAddToCart = (product) => {
//     alert(product);
//     // Implement add to cart functionality here
//     console.log('Added to cart:', product);
//   };

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;
//   return (
//     <div>
//       <Navbar />
//       <div className="container mx-auto p-4">
//         <h1 className="text-2xl font-bold mb-4">CART DETAILS</h1>
//         <ul className="space-y-4">
//           {products.map((product) => (
//             <li key={product.id} className="border p-4 rounded">
//               <h2 className="text-lg font-semibold">{product.title}</h2>
//               <p className="text-gray-600">${product.price}</p>
//               <button 
//                 className='btn btn-outline-dark '
//                 onClick={() => handleAddToCart(product.id)}
//               >
//                 BUY NOW
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   )
// }

// export default Cart



// import React, { useState, useEffect } from 'react';
// import Navbar from './Navbar';

// const Cart = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     const custid = localStorage.getItem('custid');
//     const apiurl = `http://localhost:5204/api/Employees/GetItemsbyid/96757`;  // Using custid from localStorage
//     try {
//       const response = await fetch(apiurl);  // Await fetch request

//       if (!response.ok) {  // Check if response is OK
//         throw new Error('Error fetching items');
//       }

//       const data = await response.json();  // Convert response to JSON
//       console.log('Fetched Items:', data);  // Log the actual data

//       setProducts(data);  // Set the data to state
//       setLoading(false);  // Stop the loading state
//     } catch (error) {
//       console.error('Error:', error.message);  // Handle errors
//       setError(error.message);  // Set the error state
//       setLoading(false);  // Stop the loading state
//     }
//   };

//   const handleAddToCart = (product) => {
//     alert(product);
//     // Implement add to cart functionality here
//     console.log('Added to cart:', product);
//   };

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <div>
//       <Navbar />
//       <div className="container mx-auto p-4">
//         <h1 className="text-2xl font-bold mb-4">CART DETAILS</h1>
//         <ul className="space-y-4">
//           {products.map((product) => (
//             <li key={product.ItemId} className="border p-4 rounded">
//               <h2 className="text-lg font-semibold">{product.ItemName}</h2>
//               <p className="text-gray-600">${product.Price}</p>
//               <button
//                 className='btn btn-outline-dark '
//                 onClick={() => handleAddToCart(product.ItemId)}
//               >
//                 BUY NOW
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Cart;


// import React, { useState, useEffect } from 'react';
// import Navbar from './Navbar';

// const Cart = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     const custid = localStorage.getItem('custid');
//     const apiurl = `http://localhost:5204/api/Employees/GetItemsbyid/96757`;  // Using custid from localStorage
//     try {
//       const response = await fetch(apiurl);  // Await fetch request

//       if (!response.ok) {  // Check if response is OK
//         throw new Error('Error fetching items');
//       }

//       const data = await response.json();  // Convert response to JSON
//       console.log('Fetched Items:', data);  // Log the actual data

//       setProducts(data);  // Set the data to state
//       setLoading(false);  // Stop the loading state
//     } catch (error) {
//       console.error('Error:', error.message);  // Handle errors
//       setError(error.message);  // Set the error state
//       setLoading(false);  // Stop the loading state
//     }
//   };

//   const handleAddToCart = (product) => {
//     alert(product);
//     // Implement add to cart functionality here
//     console.log('Added to cart:', product);
//   };

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <div>
//       <Navbar />
//       <div className="container mx-auto p-4">
//         <h1 className="text-2xl font-bold mb-4">CART DETAILS</h1>
//         <ul className="space-y-4">
//           {products.map((product) => (
//             <li key={product.ItemId} className="border p-4 rounded">
//               <h2 className="text-lg font-semibold">{product.ItemName}</h2>
//               <p className="text-gray-600">${product.Price}</p>
//               <button
//                 className='btn btn-outline-dark '
//                 onClick={() => handleAddToCart(product.ItemId)}
//               >
//                 BUY NOW
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Cart;


// import React, { useState, useEffect } from 'react';

// const Cart = () => {
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     // Replace this with your actual API call
//     fetch('http://localhost:5204/api/Employees/GetItemsbyid/96757')
//       .then(response => response.json())
//       .then(data => {
//         console.log('Data fetched:', data); // Check if data is being fetched correctly
//         setCartItems(data);
//       })
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);

//   return (
//     <div>
//       {cartItems.length > 0 ? (
//         cartItems.map((item, index) => (
//           <div key={index}>
//             <h2>{item.productName}</h2>
//             <p>Price: {item.price}</p>
//             <p>Quantity: {item.quantity}</p>
//             <p>Order No: {item.orderNo}</p>
//           </div>
//         ))
//       ) : (
//         <p>No items in cart</p>
//       )}
//     </div>
//   );
// };

// export default Cart;




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




const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const custid=localStorage.getItem('custid');

  const navigate = useNavigate();
  
  const handleAddToCart = async (product)  => {

   
   
    try {
   
      const response = await fetch('https://localhost:44350/api/Employees/UpdateCart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({OrderNo:product.orderNo,cartStatus:1}),
      });
  
      if (!response.ok) {
        throw new Error('order failed');
      } 
      const data = await response.json();
      if(data.stat=1){
        alert(data.message);
      }
      else{
        alert("Something went wrong");
      }
      console.log('order successful:', data);    
    } catch (error) {
      console.error('order error:', error);     
    }
   
    // navigate('/Buynow');
   
   
  }

  useEffect(() => {
    // Replace this with your actual API call
    fetch( `https://localhost:44350/api/Employees/GetItemsbyid/${custid}`)
    
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
      <Navbar />
      
      <div className="bg-gradient-to-r from-purple-200 via-purple-300 to-purple-400">
        <div className='container my-4 py-4' style={{ marginLeft: "439px" }}>
          <div className='row'>
            <h1 className='display-5 fw-bolder text-center text-purple-900'>YOUR CART</h1>
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
                <CardFooter className="bg-purple-500 text-blue" >
                  <button
                    onClick={() => removeItem(index)}
                    className="btn btn-outline-danger"
                   
                  >
                    <Trash2 size={20} className="text-red-600" />
                  </button>
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="btn btn-primary"
                  >
                    Buy Now
                  </button>
                </CardFooter>
              </Card>
            ))}
          </div>

        ) : (
          <Card className="text-center py-8 bg-white border border-purple-200">
            <CardContent>
              <p className="text-xl text-gray-500">Your cart is empty</p>
            </CardContent>
          </Card>
        )}
      </div>
      
      <Footer/>
    </div>
    </div>
    
   
  );
};

export default Cart;