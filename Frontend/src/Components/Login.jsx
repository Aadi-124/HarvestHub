import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import './Components.css';
export default function Login() {


  return (

    <div className='login'>
        
    <div className='login_container'>
        <h1 className='login_heading'>Login</h1>
      <TextField className='login_component' id="filled-basic" label="User Name" variant="filled" />
      <TextField className='login_component' id="filled-basic" label="Password" variant="filled" />
      <LoadingButton id='login_button1' className='login_component' variant="contained">Login</LoadingButton>
    
    </div>
    </div>
     
   
  );
}

