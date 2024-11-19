import React, { useContext } from 'react'
import './Wishlist.scss'
import { BiSolidHeart } from "react-icons/bi";
import { StarRating } from '../../component/Testimonial/Testimonial.jsx';
import { ProductContext } from './../../context/ProductContext';
import { CartContext } from './../../context/CartContext';

import empty_cart from './../../assets/img/shopping-cart.png'

const Wishlist = () => {

  const { products, toggleLike } = useContext(ProductContext);
  const likedProducts = products.filter((product) => product.liked);


  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  const handleLikeToggle = (productId) => {
    toggleLike(productId);
  };

  return (
    <>
      <div className="banner_section product ">
        <div className="section_heading">
          <h2 className='title'><span className='primary'>W</span>ishlist</h2>

        </div>
      </div>

      <div className="row_col-3 product_banner">
        {likedProducts.length === 0 ? (
          <div className='empty_wishlist'>
            <img src={empty_cart} alt="" />
            <h1>Your wishlist is empty.</h1>

          </div>
        ) : (

          likedProducts.map((product) => (

            <div key={product.id} className="product-card" style={{ background: `${product.color}` }}>
              <div className={`wishlist-icon ${product.liked ? 'active' : ''}`}
                onClick={() => handleLikeToggle(product.id)}
              >
                <BiSolidHeart />
              </div>
              <div className="product-content">
                <img src={product.image} loading="lazy" alt={product.name} className="product-image" />
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
          ))
        )}
      </div>

    </>
  )


}

export default Wishlist
