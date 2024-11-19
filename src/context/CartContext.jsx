import React, { createContext, useState, useEffect, useContext } from 'react';
import { ProductContext } from './ProductContext';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const { products } = useContext(ProductContext);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (productId, quantity = 1) => {
    const existingItem = cartItems.find((item) => item.productId === productId);

    if (existingItem) {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.productId === productId ? { ...item, quantity: item.quantity + quantity } : item
        )
      );
    } else {
      const product = products.find((product) => product.id === productId);

      if (product) {
        setCartItems((prevItems) => [...prevItems, { productId, quantity, name: product.name, image: product.image, price: product.price, color: product.color }]);
      }
    }
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.productId !== productId));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };