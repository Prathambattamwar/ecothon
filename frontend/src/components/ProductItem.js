// components/ProductItem.js
import React from 'react';

const ProductItem = ({ product }) => {
  return (
    <div className="product-item">
      <div className="product-img">
        <img src={product.image} alt={product.name} />
        <div className="cart-btn">
          <button>Add to Cart</button>
        </div>
      </div>
      <div className="product-detail">
        <div className="star-img">
          <img src="/assets/images/star-icon.png" alt="rating" />
        </div>
        <h3>{product.name}</h3>
        <div className="product-price">
          ${product.price} <span>${product.originalPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;