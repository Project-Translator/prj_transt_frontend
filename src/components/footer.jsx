import './footer.css';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';


export const Footer =() => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="absolute">
        <footer className='down'>
        <p>Copyright 2022</p>
        </footer>
      </AppBar>
    </Box>
  );
}
