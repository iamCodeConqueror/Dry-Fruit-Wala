import React from 'react';
import ReactDOM from 'react-dom';

import Layout from './Layout.jsx'
import './index.css'

// import pages
import Home_Page from './pages/Home/Home_Page.jsx'
import About_page from './pages/About/About_Page.jsx'
import Contact_Page from './pages/Contact/Contact_Page.jsx'
import Product_page from './pages/Product/Product_Page.jsx'
import Wishlist from './pages/Wishlist/Wishlist.jsx'
import Cart from './pages/Cart/Cart.jsx'
import Login from './pages/Auth/Login.jsx'
import Register from './pages/Auth/Register.jsx'

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Home_Page />} />
        <Route path='about' element={<About_page />} />
        <Route path='contact' element={<Contact_Page />} />
        <Route path='product/:product_id' element={<Product_page />} />
        <Route path='wishlist' element={<Wishlist />} />
        <Route path='cart' element={<Cart />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Route>
    )
  )


ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);
