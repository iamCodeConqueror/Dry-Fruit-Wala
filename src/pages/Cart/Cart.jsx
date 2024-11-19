import React, { useContext, useState } from 'react';
import { CartContext } from './../../context/CartContext';
import empty_cart from './../../assets/img/empty-cart.png';
import { BiSolidTrash } from "react-icons/bi";
import { useNavigate } from 'react-router-dom'; 
import ThankYou from '../../ThankYou';
import NotFound from '../../NotFound';



import './Cart.css';

const Cart = () => {
  const [quantity, setQuantity] = useState(0);
  const [showInvoice, setShowInvoice] = useState(false); // To toggle invoice visibility
  const [paymentStatus, setPaymentStatus] = useState(null); // To handle payment status
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate(); // Hook to redirect after payment

  const add_quantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const remove_quantity = () => {
    setQuantity((prevQuantity) => (prevQuantity <= 1 ? prevQuantity : prevQuantity - 1));
  };

  // Calculate total, taxes, and final price
  const calculateInvoice = () => {
    const totalPrice = cartItems.reduce((total, product) => total + product.price * product.quantity, 0);
    const tax = totalPrice * 0.1;  // 10% tax rate, you can adjust this
    const finalPrice = totalPrice + tax;
    return { totalPrice, tax, finalPrice };
  };

  // Handle checkout and payment
  const handleCheckout = () => {
    setShowInvoice(true);  // Show the invoice after checkout
    setPaymentStatus('Pending');  // Initially, payment is pending

    // Simulate a delay for payment processing (2 seconds in this case)
    setTimeout(() => {
      setPaymentStatus('Success'); // Payment success after 2 seconds
      setTimeout(() => {
        // navigate(/thank-you); /
      }, 1000); 
    }, 2000); // 2 seconds for payment processing
  };

  return (
    <>
      <div className="banner_section product">
        <div className="section_heading">
          <h2 className="title">
            <span className="primary">Y</span>our Cart
          </h2>
        </div>
      </div>

      <div className="row_col-3 product_banner">
        {cartItems.length === 0 ? (
          <div className="empty_wishlist">
            <img src={empty_cart} alt="" />
            <h1>Your cart is empty.</h1>
          </div>
        ) : (
          cartItems.map((product) => (
            <div key={product.id} className="product-card" style={{ background: `${product.color}` }}>
              <div
                className={`wishlist-icon delete`}
                onClick={() => removeFromCart(product.productId)}
              >
                <BiSolidTrash />
              </div>
              <div className="product-content">
                <img src={product.image} loading="lazy" alt={product.name} className="product-image" />
                <div className="product-details">
                  <p className="price">
                    ${product.price} <sub>/kg</sub>
                  </p>
                  <div>
                    <p className="product-name">{product.name}</p>
                    <p className="product-rating">
                      <p>Quantity - {product.quantity}</p>
                    </p>
                  </div>
                </div>

                <div className="product_footer">
                  <div className="cart_input">
                    <button onClick={remove_quantity}>-</button>
                    <input type="number" value={quantity} readOnly />
                    <button onClick={add_quantity}>+</button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Checkout Button */}
      {cartItems.length > 0 && !showInvoice && (
        <div className="checkout-section">
          <button onClick={handleCheckout} className="checkout-button">
            Checkout
          </button>
        </div>
      )}

      {/* Invoice Section */}
      {showInvoice && (
        <div className="invoice-section">
          <h3>Invoice</h3>
          <p>Date: {new Date().toLocaleString()}</p>
          <p>Items:</p>
          <ul>
            {cartItems.map((product) => (
              <li key={product.id}>
                {product.name} x {product.quantity} - ${product.price * product.quantity}
              </li>
            ))}
          </ul>

          <div>
            <p>Total Price: ${calculateInvoice().totalPrice.toFixed(2)}</p>
            <p>Tax (10%): ${calculateInvoice().tax.toFixed(2)}</p>
            <p>Final Price: ${calculateInvoice().finalPrice.toFixed(2)}</p>
          </div>

          <div className="payment-status">
            {paymentStatus === 'Pending' && (
              <div className="loading-spinner">
                <p>Processing Payment...</p>
                <div className="spinner"></div>
              </div>
            )}
            {paymentStatus === 'Success' && <p>Payment Successful!</p>}
            {paymentStatus === 'Failed' && <p>Payment Failed. Please try again.</p>}
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
