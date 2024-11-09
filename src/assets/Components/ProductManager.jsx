import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NativeSelect, Button, TextField, FormControl, InputLabel, Typography, Container } from '@mui/material';
import Adminnavbar from './Adminnavbar';
 
const ProductManager = () => {
    const [products, setProducts] = useState([]);
    const [name, setName] = useState('');
    const cat = ['Mobile Phone', 'Grocery', 'Home Appliance', 'Decors', 'Furnitures', 'Clothing'];
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    const fetchProducts = async () => {
        const response = await axios.get('http://localhost:5000/api/products');
        setProducts(response.data);
    };

    const addProduct = async (e) => {
        alert("hiii");
        e.preventDefault();
        const newProduct = { name, price: parseFloat(price), stock: parseInt(stock), category: selectedCategory };
        // await axios.post('http://localhost:5000/api/products', newProduct);
        // setName('');
        // setPrice('');
        // setStock('');
        // setSelectedCategory('');
        // fetchProducts();
        try {
   
            const response = await fetch('https://localhost:44350/api/Employees/Addtocart', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ItemName:name,Price:price, ItemCount:stock,category:category}),
            });
        
            if (!response.ok) {
              throw new Error(' failed');
            } 
            const data = await response.json();
            if(data.stat=1){
              alert(data.message);
            }
            else{
              alert("Something went wrong");
            }
            console.log('successful:', data);    
          } catch (error) {
            console.error(' error:', error);     
          }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className='app-background'>
        <Container maxWidth="sm" style={{ padding: '1.5rem',marginLeft:'10%', backgroundColor: '#f9f9f9', borderRadius: '8px',marginTop:'8%',paddingTop:'20px' }}>
            <Adminnavbar />
            <Typography variant="h5" gutterBottom style={{ textAlign:'center',backgroundColor:'#c2f0ab', borderRadius: '8px'}}>Add Products</Typography>
            <form onSubmit={addProduct}>
                <FormControl fullWidth variant="outlined" margin="normal">
                    <InputLabel htmlFor="category-select">Select Category</InputLabel>
                    <NativeSelect
                        value={selectedCategory}
                        onChange={e => setSelectedCategory(e.target.value)}
                        inputProps={{ id: 'category-select', required: true }}
                    >
                        <option value="">Select Category</option>
                        {cat.map((option, index) => (
                            <option key={index} value={option}>
                                {option}
                            </option>
                        ))}
                    </NativeSelect>
                </FormControl>
                <TextField
                    label="Product Name"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                />
                <TextField
                    label="Price"
                    variant="outlined"
                    type="number"
                    fullWidth
                    margin="normal"
                    value={price}
                    onChange={e => setPrice(e.target.value)}
                    required
                />
                <TextField
                    label="Stock"
                    variant="outlined"
                    type="number"
                    fullWidth
                    margin="normal"
                    value={stock}
                    onChange={e => setStock(e.target.value)}
                    required
                />
                <Button type="submit" variant="contained"  onClick={addProduct}  halfwidth style={{ marginLeft:'37%',backgroundColor:'aquamarine',color:'#000000'}}>
                    Add Product
                </Button>
            </form>

            <Typography variant="h5" gutterBottom style={{ textAlign:'center',backgroundColor:'#c2f0ab', borderRadius: '8px',marginTop: '2rem'}}>
                Available Products
            </Typography>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.name} - ${product.price.toFixed(2)} (Stock: {product.stock})
                    </li>
                ))}
            </ul>
        </Container>
        </div>
    );
}

export default ProductManager;