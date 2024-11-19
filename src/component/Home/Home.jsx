import React from 'react'
import { useNavigate } from 'react-router-dom';  // Import useNavigate hook for navigation
import './Home.scss'

const Home = () => {
  const navigate = useNavigate(); // Initialize navigate function

  // Function to handle button click
  const handleGetStarted = () => {
    navigate('/product/123'); 
  }

  return (
    <>
      <div className="hero">
        <div className="content">
          <div className="text_content">
            <h2>Sri <span>Surya</span> Traders<span>  </span>  </h2>
            <p>FoodsofBharat is your online destination for a vibrant assortment of fresh fruits, crisp vegetables, and premium dry fruits. Our commitment is to deliver quality and freshness to your doorstep, ensuring a wholesome and delightful shopping experience.</p><br></br>
            <button onClick={handleGetStarted}>Explore Now</button> {/* Button with onClick handler */}
          </div>
          <div className="img_area">
            <img className='img1' src="" alt="" />
            <img className='img2' src="https://th.bing.com/th/id/R.e6abeb7fc3d710b3f3f1d0fe91fad43f?rik=mPOhnMZYGKyt5A&riu=http%3a%2f%2fclipart-library.com%2fnew_gallery%2f315-3154437_dried-fruit-transparent-background.png&ehk=%2fJ4trYplQ0YwXvHzppcBN46bnSOpFqObaSeBo4oa944%3d&risl=&pid=ImgRaw&r=0" alt="" />
            <img className='img3' src="https://i.ibb.co/j3hnwPw/png-clipart-dried-fruits-dry-fruits-food-removebg-preview.png" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
