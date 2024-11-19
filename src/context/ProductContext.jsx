import React, { createContext, useState, useEffect } from 'react';

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = localStorage.getItem('likedProducts');
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    }
  }, []);

  useEffect(() => {
    if (products.length === 0) {
      import('./productx.json')
        .then((data) => {
          if (data.default && Array.isArray(data.default)) {
            setProducts(data.default);
          } else {
            console.error('Invalid data format in product.json:', data);
          }
        })
        .catch((error) => {
          console.error('Error loading product data:', error);
        });
    }
  }, [products]);

  useEffect(() => {
    const storedProducts = localStorage.getItem('likedProducts');
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('likedProducts', JSON.stringify(products));
  }, [products]);

  const toggleLike = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId ? { ...product, liked: !product.liked } : product
      )
    );
  };

  return (
    <ProductContext.Provider value={{ products, toggleLike }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
