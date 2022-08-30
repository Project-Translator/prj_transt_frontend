import './navbar.css';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TranslateIcon from '@mui/icons-material/Translate';


export const Navbar =() => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className='nav'>
        <TranslateIcon className='icon'></TranslateIcon>
          <Typography className='text' variant="h6" component="div" sx={{ flexGrow: 1 }}>
             TRANSLATOR
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
