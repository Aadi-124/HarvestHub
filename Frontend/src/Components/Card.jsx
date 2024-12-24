import React from 'react';
import './Components.css';

const Card = () => {
  return (


    <div className="card">
     <img 
       src="\src\assets\images\card1.png" // Replace with your image URL
        alt="Dairy Milk Oreo" 
        className="product-image"
      />
      <h3 className="product-title">Dairy Milk Oreo</h3>
      <div className="discount-badge">15% <span style={{fontSize:"18px"}}>Off</span></div>
    </div>

  );
};

export default Card;