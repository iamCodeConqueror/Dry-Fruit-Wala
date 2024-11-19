import React from 'react'
import Header from './component/Header/Header'
import Footer from './component/Footer/Footer'

import {ProductProvider} from './context/ProductContext'

import { CartProvider } from './context/CartContext';

import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <>
        <ProductProvider>
        <CartProvider>
            <Header/>
            <Outlet />
            <Footer />
           </CartProvider>
        </ProductProvider>
        </>
    )
}

export default Layout
