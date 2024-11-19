import React from 'react'
import './Contact.scss'
import { Link } from 'react-router-dom'
import { BiCheckCircle } from "react-icons/bi";

const Contact_card = () => {
  return (
    <>
      <div className="contact_card">
        <div className="content">
          <h2>Connect & Communicate with Us</h2>
          <p>Connect with us effortlessly through our Contact section. Whether you have questions, feedback, or just want to say hello, we're here to assist. Reach out and let's chat!

          </p>
          <ul>
            <li>
              <span className='icon'><BiCheckCircle />
              </span> Instant Messaging
            </li>
            <li>
              <span className='icon'><BiCheckCircle />
              </span> Live Chat Support
            </li>
            <li>
              <span className='icon'><BiCheckCircle />
              </span> Contact Form Submission
            </li>
          </ul>
        </div>
        <div className="button">
          <Link to="/contact" className='contact_btn'>Contact Us</Link>
        </div>
      </div>
    </>
  )
}

export default Contact_card
