import React from 'react';
import './Components.css';

const Card = (props) => {
  return (
    <div className="card">
     <img 
       src="\src\assets\images\card1.png" // Replace with your image URL
        alt={props.name}
        className="product-image"
      />
      <h3 className="product-title">{props.name}</h3>
      <div className="discount-badge">{props.offer}% <span style={{fontSize:"18px"}}>Off</span></div>
    </div>

  );
};

export default Card;