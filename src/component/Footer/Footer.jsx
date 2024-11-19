import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.scss'
import logo from './../../assets/img/logo.png'

const Footer = () => {
  return (
    <>
      <footer className='footer'>
        <div className="footer_top">
          <div className="footer_content">
            <div className="overview_content">
              <div className="logo">
                <Link className='logo_text'>
                  <img src={logo} className='logo_icon' />
                  DryFruit<span>Wala</span>
                </Link>
              </div>
              <p>Harvesting Happiness: DryFruitwala – Where Freshness Meets Flavor in Every Bite. Your Daily Dose of Nature's Best Delivered!</p>
              <a href="mailto:sampathmay10@gmail.com">Email: sampathmay10@gmail.com</a>
            </div>
            <ul className="sub_menu">
              <h3>Home</h3>
              <li><Link>Home</Link></li>
              <li><Link>About</Link></li>
              <li><Link>Product</Link></li>
              <li><Link>Contact</Link></li>
            </ul>
            <ul className="sub_menu">
              <h3>About</h3>
              <li><Link>Services</Link></li>
              <li><Link>Features</Link></li>
              <li><Link>Timeline</Link></li>
              <li><Link>Sign Up</Link></li>
            </ul>
            <ul className="sub_menu">
              <h3>Product</h3>
              <li><Link>Grocery</Link></li>
              <li><Link>Spices</Link></li>
              <li><Link>Dry Fruits</Link></li>
              <li><Link>Contact us</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer_bottom">
          <p>Made by Sai Sampath Kumar</p>
         
        </div>
      </footer>

    </>
  )
}

export default Footer
