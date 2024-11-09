import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import img11 from '../images/all.jpg'
import img1 from '../images/rty.avif'
import img2 from '../images/123333333.jpg'
import img3 from '../images/women.jpg'
import { textFieldClasses } from '@mui/material'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate=useNavigate();

  const handleAddToCart = async (event) => {
    
    navigate('/Products');
    
  };
 return (
  <div className='app-background'>
      <div className='flex'>
           <Carousel data-bs-theme="dark" position="fixed" sx={{ md:'flex' }}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          position="fixed"
          src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/a417fdf5a82818c4.jpg?q=20"
          
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/61775218f4487fe8.jpg?q=20"
          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/d9290fb51138d286.png?q=20"
          alt="Third slide"
        />
       
      </Carousel.Item>
    </Carousel>
    <CardGroup>
      <Card >
        <Card.Img variant="top"  src={img2} />
        <Card.Body style={{marginLeft:"172px"}}>
          <Card.Title>Men's Clothing</Card.Title>
          <button className='btn btn-success ' onClick={() => handleAddToCart()}>
SHOW
          </button>
        </Card.Body>
       
      </Card>
      <Card>
        <Card.Img variant="top" src={img3} />
        <Card.Body style={{marginLeft:"172px"}}>
          <Card.Title>Womens's Clothing</Card.Title>
          <button className='btn btn-success ' onClick={() => handleAddToCart()}>
SHOW
          </button>
        </Card.Body>
       
      </Card>
      <Card>
        <Card.Img variant="top" src={img11} />
        <Card.Body style={{marginLeft:"172px"}}>
          <Card.Title>All Products</Card.Title>
          <button className='btn btn-success ' onClick={() => handleAddToCart()}>
SHOW
          </button>
        </Card.Body>
       
      </Card>
   
    
    </CardGroup>
    <Carousel data-bs-theme="dark" position="fixed" sx={{ md:'flex' }}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          position="fixed"
          src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/80dac993fb693e3a.jpeg?q=20"
          
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/126619f56d1f3607.jpg?q=20"
          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/126619f56d1f3607.jpg?q=20"
          alt="Third slide"
        />
       
      </Carousel.Item>
    </Carousel>
      </div>
      </div>
  )
}

export default Dashboard
