import React, { useState, useEffect, useContext } from 'react'
import { BiSolidHeart } from "react-icons/bi";
import './Product.scss'
import { StarRating } from './../Testimonial/Testimonial.jsx';

import { ProductContext } from './../../context/ProductContext';
import { CartContext } from './../../context/CartContext';

const Product = ({ total_card }) => {

  const { products, toggleLike } = useContext(ProductContext);
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);


  const handleLikeToggle = (productId) => {
    toggleLike(productId);
  };



  return (
    <>
      {products.slice(0, total_card).map(product => (


        <div key={product.id} className="product-card" style={{ background: `${product.color}` }}>
          <div className={`wishlist-icon ${product.liked ? 'active' : ''}`}
            onClick={() => handleLikeToggle(product.id)}
          >
            <BiSolidHeart />
          </div>
          <div className="product-content">
            <img src={product.image} alt={product.name} className="product-image" loading="lazy"/>
            <div className="product-details">
              <p className="price">Rs {product.price} <sub>/kg</sub></p>
              <div>
                <p className="product-name">{product.name}</p>
                <p className="product-rating">
                  <StarRating rating={product.rating} />
                </p>
              </div>
            </div>
            <button onClick={() => addToCart(product.id)} className="add-to-cart-btn">Add To Cart</button>
          </div>
        </div>

      ))}
    </>
  )
}

export default Product
