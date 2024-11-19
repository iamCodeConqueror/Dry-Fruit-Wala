import React from 'react'
import './About.scss'
import { MdHealthAndSafety } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { TbYoga } from "react-icons/tb";
import { LuActivity } from "react-icons/lu";

const About = () => {
  return (
    <>
      <div className='banner_section light'>
        <div className="section_heading">

          <h1 className='title'><span className='primary'>A</span>bout</h1>
          <p>Discover a world of freshness and flavor at DryFruitwala. Committed to quality and wholesome living, we bring nature's best to your doorstep, ensuring each bite is a delightful celebration.</p>
        </div>
      </div>

      <div className="our_story">
        <div className="img">
          <img src="https://i.ibb.co/Cw2ndVz/Sampath.jpg" alt="ceo" />
        </div>
        <div className="content">
          <h1 className='title'><span className='primary'></span>About Website</h1>
          <p>
          At DryFruitwala, we bring you the finest selection of dry fruits, seeds, and spices, handpicked to elevate both flavor and health in your everyday meals. From crunchy almonds and sweet dates to nutritious chia seeds and aromatic spices like cinnamon and cardamom, every product is chosen for its quality and freshness. Our mission is to make healthy living delicious and easy, with ingredients that are as wholesome as they are flavorful. With DryFruitwala, enjoy a convenient, nutritious, and flavorful way to enrich your culinary journey every day.  
          </p>
          <div className="features">

            <div>
              <MdHealthAndSafety />
              <p>Health Focus</p>
            </div>

            <div>
              <LuActivity />
              <p> Wellness Priority</p>
            </div>

            <div>
              <FaUsers />
              <p>Customer Delight</p>
            </div>

            <div>
              <TbYoga />
              <p>Nutritional Wellness</p>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default About
