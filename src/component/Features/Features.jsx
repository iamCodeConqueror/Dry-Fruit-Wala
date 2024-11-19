import React from 'react';
import './Features.scss'
import fresh from './../../assets/img/fresh.png'
import earth from './../../assets/img/earth.png'
import restaurants from './../../assets/img/restaurants.png'
import heart_rate from './../../assets/img/heart-rate.png'
const Features = () => {
  return (
    <div className="feature_section">
      <FeatureCard
        img={fresh}
        title="Fresh Selection"
        description="Explore a curated selection of the spices and premium dry fruits, handpicked to elevate your culinary experience."
      />
      <FeatureCard
        img={heart_rate}
        title="Health & Wellness"
        description="Prioritize your well-being with our nutritious offerings. We're dedicated to promoting a healthier lifestyle through quality produce."
      />
      <FeatureCard
        img={earth}
        title="Sustainable Sourcing"
        description="Embrace sustainability. FoodsofBharat is committed to environmentally friendly practices, ensuring a positive impact on both health and the planet."
      />
      <FeatureCard
        img={restaurants}
        title="Customer Satisfaction"
        description="Your satisfaction is our priority. Enjoy a seamless shopping experience with prompt deliveries, responsive customer support, and a commitment to excellence."
      />
    </div>
  );
};

const FeatureCard = ({ title, description, img = fresh }) => {
  return (
    <div className="feature-card">
      <img src={img} alt="" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Features;
