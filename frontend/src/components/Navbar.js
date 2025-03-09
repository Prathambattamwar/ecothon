import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Local Harvest
        </Typography>
        <Box>
          <Button color="inherit" component={RouterLink} to="/">
            Home
          </Button>
          <Button color="inherit" component={RouterLink} to="/inventory">
            Inventory
          </Button>
          <Button color="inherit" component={RouterLink} to="/about">
            About
          </Button>
          {user && (
            <Button color="inherit" component={RouterLink} to="/dashboard">
              Dashboard
            </Button>
          )}
          {!user ? (
            <Button color="inherit" component={RouterLink} to="/login">
              Login
            </Button>
          ) : (
            <Button color="inherit" onClick={logout}>
              Logout
            </Button>
          )}
          {user && (
  <Button color="inherit" component={RouterLink} to="/wallet">
    Wallet
  </Button>
)}

        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
