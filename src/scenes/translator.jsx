import * as React from 'react';
import TextField from '@mui/material/TextField';
import './translator.css';
import Button from '@mui/material/Button';



import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';






export const  Translator =() => {
  const [language, setLanguage] = React.useState('');
  const handleChange = (event) => {
    setLanguage(event.target.value);
  };
  const [Tlanguage, setTLanguage] = React.useState('');
  const handleChange2 = (event) => {
    setTLanguage(event.target.value);
  };
  return (
    <>
      
      <div className="txt">
        <TextField
          id="outlined-multiline-static"
          label="first language"
           multiline
           rows={4}
          
        />
        </div>
       
        
        <div className="txt2">
        <TextField
          id="outlined-multiline-static"
          label="translated language"
           multiline
          rows={4}
          
        />
        </div>
        
        
      <div className='list'>
      <Box sx={{ Width: 60}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Language</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={language}
          label="select Language"
          onChange={handleChange}
          MenuProps={{
            PaperProps: {
              sx: {
                bgcolor: 'blue',
            
              },
            },
          }}
        >
         <MenuItem value={'English'}> English</MenuItem>
         <MenuItem value={'Hindi'}> Hindi</MenuItem>
         <MenuItem value={'Marathi'}> Marathi</MenuItem> 

        </Select>
      </FormControl>
    </Box>
    </div>
    <div className='list2'>
    <Box sx={{ Width: 60 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Translated Language</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
    
          label="translated language"
          value={Tlanguage}
          onChange={handleChange2}
          MenuProps={{
            PaperProps: {
              sx: {
                bgcolor: 'blue',
                '& .MuiMenuItem-root': {
                  // padding: 2,
                },
              },
            },
          }}
        >
          
          <MenuItem value={'English'}> English</MenuItem>
         <MenuItem value={'Hindi'}> Hindi</MenuItem>
         <MenuItem value={'Marathi'}> Marathi</MenuItem>

        </Select>
      </FormControl>
    </Box>
    </div>
   
      
   <div className="btn">
    <Button  variant="contained" disableElevation>
      translate
    </Button>
    </div>
    </>
       
    
       );
      }
      



    
    
  

    
       
  
  