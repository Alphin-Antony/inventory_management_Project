import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Skeleton from 'react-loading-skeleton';
import Navbar  from './Navbar';
import { NavLink } from 'react-router-dom';
import { useCartActions } from "../../store/Store";
import '../Components/product.css'
import Footer from './Footer';

const handleAddToCart = async (product)  => {
 const custid=localStorage.getItem('custid');
  
  const orderId = generateGUID();
  debugger;
  try {
   
    const response = await fetch('https://localhost:44350/api/Employees/Addtocart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({OrderNo:orderId,custId:custid, productID:product.id,productName:product.title,quantity:1,price:product.price,cartStatus:0}),
    });

    if (!response.ok) {
      throw new Error('Registration failed');
    } 
    const data = await response.json();
    if(data.stat=1){
      alert(data.message);
    }
    else{
      alert("Something went wrong");
    }
    console.log('Registration successful:', data);    
  } catch (error) {
    console.error('Registration error:', error);     
  }
  
}
const generateGUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

const Products = (product) => {

  let { addToCart } = useCartActions();

 
  const [data,setData]=useState([]);
  const [filter,setFilter]=useState(data);
  const [loading,setLoading]=useState(false);
  let componentMounted=true;

  
  useEffect(()=>{
   const getProducts=async()=>{
    setLoading(true);
    const response=await fetch("https://fakestoreapi.com/products")

   if(componentMounted){

    setData(await response.clone().json());
    setFilter(await response.json());
    setLoading(false);
     console.log(filter);
   }
  
   return ()=>{

    componentMounted=false
   }
  
  }
   getProducts();
    

  },[]);

  const Loading =()=>{

    return(<>
    
    <div className='col-md-3'>
      <Skeleton height={350}/>
      <Skeleton height={350}/>
      <Skeleton height={350}/>
    </div>
    </>)
  }

  const filterProduct =(cat)=>{

    const updatedList =data.filter((x)=>x.category===cat);
    setFilter(updatedList);
  }

  const ShoowProducts=()=>{
    return(
      <>
 <div className='buttons d-flex justify-content-center mb-5 pb-5'>
   <button className='btn btn-outline-dark me-2' onClick={()=>setFilter(data)}>ALL</button>
   <button className='btn btn-outline-dark me-2'onClick={()=>filterProduct("men's clothing")}>Men's Clothing</button>
   <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct("women's clothing")}>Womens's Clothing</button>


    </div>
{filter.map((product)=>{

  return(

    <>
   
   <div className="product-card_wrapper">
   <div class='card h-100 text-center p-4' key={product.id}>
    
<img src={product.image} className='card-img-top' alt={product.title} height='250px'/>
<div class='car-body'>
  <h5 class='card-title mb-0'>{product.title.substring(0,12)}</h5>
  <p class='card-text lead fw-bold'>

    ${product.price}
  </p>
  <button className='btn btn-outline-dark ' onClick={() => handleAddToCart(product)}>
 Add Cart
          </button>
 
</div>
</div> 
</div>

  
    </>
  )

  
})



}
      </>
    )

   
  }

  return (
   <div>
    <div>
       <Navbar/>
      <div className='container my-4 py-4' style={{ marginLeft: "335px" }}>
        <div className='row'>
          <h1 className='dsiplay-4 fw-bolder'>LATEST PRODUCTS</h1>
        </div>
      </div>
      <div className='row justify-content-center'></div>
   {loading?<Loading/>:<ShoowProducts/>}

    </div>
    <Footer/>
    </div>

  )
}

export default Products
