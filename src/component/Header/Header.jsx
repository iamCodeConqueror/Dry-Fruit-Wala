import React, { useState, useRef, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.scss'

import logo from './../../assets/img/logo.png'

import { BiShoppingBag, BiHeart, BiMenu, BiSolidUser } from 'react-icons/bi';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (menuRef.current) {
      menuRef.current.classList.toggle('active', isMenuOpen);
    }
  }, [isMenuOpen]);

  return (
    <>
      <header className="header">
        <nav className="navbar">
          <div className="toogle_menu" onClick={toggleMenu}>
            <BiMenu />
          </div>
          <div className="logo">
            <Link className='logo_text'>
              <img src={logo} className='logo_icon' />
              DryFruit<span>Wala</span>
            </Link>
          </div>
          <ul className="main_menu" ref={menuRef}>
            <li>
              <NavLink to="/" className="menu_link">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className="menu_link">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="menu_link">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/product/123" className="menu_link">Products</NavLink>
            </li>
          </ul>
          <div className="right_menu">
            <Link to="/wishlist" className='btn_icon_circle'><BiHeart /> </Link>
            <Link to="/cart" className='btn_icon_circle'> <BiShoppingBag /></Link>
            <Link to="/login" className='btn_get_start'>get Started</Link>
            <Link to="/login" className='nav_user_iocn btn_icon_circle'><BiSolidUser /></Link>
          </div>
        </nav>
      </header>

    </>
  )
}

export default Header
