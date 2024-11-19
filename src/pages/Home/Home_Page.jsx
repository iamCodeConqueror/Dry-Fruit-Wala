import React from 'react'
import './Home_Page.scss'

import Home from './../../component/Home/Home.jsx'

import Product_overview_img1 from './../../assets/images/pile-various-dried-fruits-raisins-transparent-background_84443-20224-removebg-preview.png'
import Product_overview_img2 from './../../assets/images/Spices.png'
import Product_overview_img3 from './../../assets/images/Grocery.png'
import Product_overview from '../../component/Product_Overview/Product_overview.jsx'


import Services_img_fresh from './../../assets/img/fresh.png'
import Services_img_quick from './../../assets/img/quick.png'
import Services_img_24_hour from './../../assets/img/24-hour-service.png'
import Services from '../../component/Services/Services.jsx'
import Testimonial from '../../component/Testimonial/Testimonial.jsx'


import Contact_card from '../../component/Contact/Contact_card.jsx'
import Newsletter from '../../component/Newsletter/Newsletter.jsx'
import Product from '../../component/Product/Product.jsx'

const Home_Page = () => {
  return (
    <>

      <Home />

      <section className='section'>
        <div className="section_heading">
          <h2><span>P</span>roducts</h2>
          <p>Explore a vibrant array of farm-fresh delights in our Products section. From succulent fruits to premium dry fruits, discover nature's finest offerings curated just for you</p>
        </div>
        <div className="row_col-3">
          <Product_overview
            title="Buy Fresh DryFruits"
            subtitle="we provide best quality of fruits        "
            image={Product_overview_img1}
          />
          <Product_overview
            title="Buy Fresh Spices"
            subtitle="we provide best quality of Spices  "
            image={Product_overview_img2}
          />
          <Product_overview
            title="Buy Grocery"
            subtitle="we provide best quality of Grocery"
            image={Product_overview_img3}
          />
        </div>
        <div className="row_col-3">
          <Product total_card={15} />
        </div>
      </section>

      <section className='section testimonial_bg'>
        <div className="section_heading center">
          <h2> <span>W</span>hy you choose us</h2>
          <p>Choose us for unparalleled quality, farm-to-table freshness, and a commitment to your well-being. Experience the difference with our diverse selection and dedicated service, making us your top choice.</p>
        </div>
        {/* Services */}
        <div className="row_col-3">
          <Services
            title="Fast Devlivery"
            subtitle="Swift delivery brings farm-fresh goodness to your doorstep, ensuring crisp, flavorful fruits and wholesome dry fruits promptly."
            image={Services_img_quick}
          />
          <Services
            title="Fresh Product"
            subtitle="Experience nature's bounty with our fresh, handpicked fruits and vegetables—delivered straight from farm to table perfection."
            image={Services_img_fresh}
          />
          <Services
            title="24 X 7 Support"
            subtitle="Reliable 24/7 support ensures you have a helping hand anytime you need assistance on your fresh journey"
            image={Services_img_24_hour}
          />
        </div>


        {/* Testimonial */}
        {/* <div className="section_heading center text_light">
          <h2><span>T</span>estimonial</h2>
        </div>
        <Testimonial /> */}

      </section>


      {/* <section className="section">
        <Contact_card />
      </section> */}


      {/* <section className="section">
        <Newsletter />
      </section> */}
    </>
  )
}

export default Home_Page
