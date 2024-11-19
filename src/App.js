import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';  // Import your Home page
import Product_page from './pages/Product_page';  // Import Product page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home page */}
        <Route path="/product_page" element={<Product_page />} /> {/* Product page */}
      </Routes>
    </Router>
  );
}

export default App;
