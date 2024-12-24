import React from 'react';
import './Card.css'; // Optional: Create this CSS file for styling

const ProductCard = () => {
  return (
    <div className="card">

    <div className="card1">
      <div className="discount-badge">15% Off</div>
      <img 
       src="\src\images\card1.png" // Replace with your image URL
        alt="Dairy Milk Oreo" 
        className="product-image"
      />
      <h3 className="product-title">Dairy Milk Oreo</h3>
      <p className="product-weight">60 g</p>
      <div className="price-container">
        <span className="current-price">₹83.3</span>
        <span className="original-price">₹98</span>
      </div>
      <button className="add-to-cart-btn">Add to Cart</button>
    </div>

    <div className="card2">
      <div className="discount-badge">5% Off</div>
      <img 
       src="\src\images\card2.png" // Replace with your image URL
        alt="Dairy Milk Silk" 
        className="product-image"
      />
      <h3 className="product-title">Dairy Milk Silk</h3>
      <p className="product-weight">64 g</p>
      <div className="price-container">
        <span className="current-price">₹95</span>
        <span className="original-price">₹100</span>
      </div>
      <button className="add-to-cart-btn">Add to Cart</button>
    </div>

    <div className="card3">
      <div className="discount-badge">7% Off</div>
      <img 
       src="\src\images\card3.png" // Replace with your image URL
        alt="Dairy Milk Silk Desserts" 
        className="product-image"
      />
      <h3 className="product-title">Dairy Milk Silk Desserts</h3>
      <p className="product-weight">70 g</p>
      <div className="price-container">
        <span className="current-price">₹129</span>
        <span className="original-price">₹140</span>
      </div>
      <button className="add-to-cart-btn">Add to Cart</button>
    </div>

    <div className="card4">
      <div className="discount-badge">4% Off</div>
      <img 
       src="\src\images\card4.png" // Replace with your image URL
        alt="Dairy Milk Silk Ganache" 
        className="product-image"
      />
      <h3 className="product-title">Dairy Milk Silk Ganache</h3>
      <p className="product-weight">146 g</p>
      <div className="price-container">
        <span className="current-price">₹186</span>
        <span className="original-price">₹195</span>
      </div>
      <button className="add-to-cart-btn">Add to Cart</button>
    </div>

    <div className="card5">
      <div className="discount-badge">24% Off</div>
      <img 
       src="\src\images\card5.png" // Replace with your image URL
        alt="Dairy Milk Silk Pralines" 
        className="product-image"
      />
      <h3 className="product-title">Dairy Milk Silk Paralines</h3>
      <p className="product-weight">264 g</p>
      <div className="price-container">
        <span className="current-price">₹488</span>
        <span className="original-price">₹650</span>
      </div>
      <button className="add-to-cart-btn">Add to Cart</button>
    </div>


    </div>
  );
};

export default ProductCard;
