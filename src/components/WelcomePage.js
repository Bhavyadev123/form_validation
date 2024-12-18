import React from 'react';
import { Button } from '@mui/material';
import './WelcomePage.css';

const WelcomePage = ({ onStart }) => {
  return (
    <>
    <div className="welcome-page">
      <h1>Welcome Folks !!</h1>
</div>

<div className="btn">
      <Button 
        variant="contained" 
        color="primary" 
        onClick={onStart} 
  
      >
        SIGN UP
      </Button>
      </div>
    </>
  );
};

export default WelcomePage;
