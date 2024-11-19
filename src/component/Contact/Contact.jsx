import React, { useState } from 'react';
import emailjs from 'emailjs-com';
// import emailjs from '@emailjs/browser';
import './Contact.scss'; // Assuming you have styles for your form

const Contact = () => {
  // State to store the form data (name, email, message, phone)
  const [formData, setFormData] = useState({  
    name: '',
    email: '',  
    phone: '',
    message: '',
  });

  // State to display success or error message after submitting the form
  const [statusMessage, setStatusMessage] = useState('');

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value, // Update the specific field in the state
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Send form data to EmailJS
    emailjs
      .send(
        'service_tauecwy',  // Your EmailJS service ID (e.g. "service_xxx")
        'template_zi1xkag', // Your EmailJS template ID (e.g. "template_xxx")
        formData,           // The form data object (contains name, email, etc.)
        'lA9H13V2I6ZfCJFP_' // Your EmailJS user ID (can be found in your EmailJS dashboard)
      )
      .then((response) => {
        console.log('Email sent successfully:', response);
        setStatusMessage('Thank you for contacting us! We will get back to you soon.');
        setFormData({ name: '', email: '', phone: '', message: '' }); // Reset form fields
      })
      .catch((error) => {
        console.error('Error sending Email:', error);
        setStatusMessage('Sorry, something went wrong. Please try again later.');
      });
  };

  return (
    <div className="contact">
      <div className="banner_section">
        <div className="section_heading">
          <h2 className="title">
            <span className="primary">C</span>ontact Us
          </h2>
          <p>
            Connect with us effortlessly through our Contact section. Whether you have questions, feedback, or just want to say hello, we're here to assist. Reach out and let's chat!
          </p>
        </div>
      </div>

      {/* Form Section */}
      <section className="section">
        <div className="contact_area">
          {/* Google Maps Section */}
          <div className="contact_iframe">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.7530628974073!2d83.2986131!3d17.7091217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a394303a70fb587%3A0x6b64638c3ef6b8b6!2sSri%20Surya%20Traders!5e0!3m2!1sen!2sin!4v1713015211586!5m2!1sen!2sin"
              width="900"
              height="500"
              title="Google Map"
            ></iframe>
          </div>

          {/* Contact Form */}
          <div className="contact_form">
            <h2 className="form-title">Contact Us</h2>
            <form onSubmit={handleSubmit} method="post">
              <div className="form_group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input_box"
                  placeholder="Enter Full Name"
                  required
                />
              </div>
              <div className="form_group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input_box"
                  placeholder="Enter Email Address"
                  required
                />
              </div>
              <div className="form_group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="phone"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="input_box"
                  placeholder="Enter Phone Number"
                />
              </div>
              <div className="form_group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="input_box"
                  placeholder="Enter your Message"
                  required
                />
              </div>

              <button type="submit" className="btn-submit">Submit Now</button>
            </form>
            {statusMessage && <p>{statusMessage}</p>} {/* Display success or error message */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
