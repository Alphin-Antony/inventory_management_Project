import { Box, Button, Chip, createTheme, FormControl, InputLabel, MenuItem, NativeSelect, OutlinedInput, Select, TextField, useTheme } from '@mui/material'
import React, { useRef, useState } from 'react'
import shopimg from '../images/1234.jpg'

const theme = createTheme({
    palette: {
      background: {
        default: 'white', 
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundImage: `url(${shopimg})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
          },
        },
      },
    },
  });

const Admindashboard = () => {
    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const theme = useTheme();
    function getStyles(name, personName, theme) {
        return {
          fontWeight: personName.includes(name)
            ? theme.typography.fontWeightMedium
            : theme.typography.fontWeightRegular,
        };
      }
    const names = [
        'Mobile Phone',
        'Laptop',
        'Snacks',
        'Home Applaince',
        'Furnitures',
        'Clothes',
        
      ];
      
      
    const [personName, setPersonName] = React.useState([]);
    const MenuProps = {
        PaperProps: {
          style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
          },
        },
      };
    const handleChange = (event) => {
      const {
        target: { value },
      } = event;
      setPersonName(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    };
 
    const fileInputField = useRef(null);
  const [files, setFiles] = useState({});

 return (
      <div className="wrap">
        <Box sx={{ minWidth: 500 }}>
        <FormControl sx={{ minWidth: 400 }} >
        
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Category
        </InputLabel>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
          }}
        >
          <option value={10}>Mobile Phone</option>
          <option value={20}>Laptop</option>
          <option value={30}>Snacks</option>
          <option value={30}>Home Applaince</option>
          <option value={30}>Furnitures</option>
          <option value={30}>Clothes</option>
        </NativeSelect>
       
       
        <TextField variant="standard" htmlFor="uncontrolled-native" label={'Product Name'} id="margin-none" />
      
<TextField variant="standard" htmlFor="uncontrolled-native" label={'Price Per Unit'} id="margin-none1" />
<div  className='panel-style'>
<input type="file" ref={fileInputField} />
</div>
<Button variant="contained" color="secondary">Add Product</Button>

      </FormControl>
      </Box>
      
           
      </div>
      
  )
}

export default Admindashboard
