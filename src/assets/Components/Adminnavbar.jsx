import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';




const pages = ['ADMIN-DASHBOARD','ADD-PRODUCTS','DELIVERY-ASSIGNMENT','PROFILE'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];




const Adminnavbar = () => {
     const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handlePageNavigation = (page) => {
    //alert(page);
     handleCloseNavMenu();

    
 if (page === 'ADD-PRODUCTS') {
    navigate('/ProductManager');
  } else if (page === 'PROFILE') {
    navigate('/AdminProfile');
  } else if (page === 'DELIVERY-ASSIGNMENT') {
      navigate('/DeliveryAssignment');
  } else if (page === 'ADMIN-DASHBOARD') {
      navigate('/Adminhome');
  }   
};

const handleSettingNavigation = (setting) =>     {
    handleCloseUserMenu();
    switch (setting) {
        case 'DELIVERY-ASSIGNMENT':
            navigate('/DeliveryAssignment');
            break;
        case 'Dashboard':
            navigate('/dashboard');
            break;
        case 'Logout':
            // Implement logout logic here
            navigate('/Logout');
            break;
        default:
            break;
    }
};

  return (

    
    <AppBar position="fixed" sx={{ backgroundColor: ' #c792ee   ', color: 'black', boxShadow: 1 }}>
    <Container maxWidth={false}>
        <Toolbar disableGutters>
       
    
<Typography
variant="h6"
noWrap
component="a"
href="#app-bar-with-responsive-menu"
sx={{
  mr: 2,
  display: { xs: 'none', md: 'flex' },
  fontFamily: 'monospace',
  fontWeight: 700,
  letterSpacing: '.3rem',
  color: 'inherit',
  textDecoration: 'none',
}}
>
SHOPPING</Typography>
            {/* ... (rest of the AppBar content remains the same) ... */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                    <Button
                        key={page}
                        onClick={() => handlePageNavigation(page)}
                        sx={{ my: 2, color: 'black', display: 'block' }}
                    >
                        {page}
                    </Button>
                ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                    </IconButton>
                </Tooltip>
                <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                >
                    {settings.map((setting) => (
                        <MenuItem key={setting} onClick={() => handleSettingNavigation(setting)}>
                            <Typography textAlign="center">{setting}</Typography>
                        </MenuItem>
                    ))}
                </Menu>
            </Box>
        </Toolbar>
    </Container>
</AppBar>


  )
}

export default Adminnavbar
