import React, { useState, useEffect } from 'react'
import './Testimonial.scss'
import { BiSolidQuoteLeft } from "react-icons/bi";
import { BiSolidStar, BiSolidStarHalf } from "react-icons/bi";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {

    import('./Testimonial.json').then(data => setTestimonials(data.testimonials));

  }, []);

  return (
    <>

      <div className="grid">


        {testimonials.map(testimonial => (

          <div key={testimonial.id} className="testimonial">
            <BiSolidQuoteLeft className='icon' />

            <p className='msg'>
              {testimonial.message}
            </p>
            <div className="testimonial_bottom">
              <img src="https://th.bing.com/th/id/R.7f47805d324c345cf89b3d2745bacfea?rik=RiIsb%2fnrXTpT%2fQ&riu=http%3a%2f%2fwww.clker.com%2fcliparts%2fx%2fO%2fe%2fe%2f3%2fF%2fmale-avatar-hi.png&ehk=NJYA3pwSgfUF9UpFISoKfXehabi064Bix6aOtMuXKzo%3d&risl=&pid=ImgRaw&r=0" alt="user" />
              <div className="author">
                <em>- By {testimonial.name}</em>
                <StarRating rating={testimonial.rating} />
              </div>
            </div>
          </div>


        ))}
      </div>
    </>
  )
}



export const StarRating = ({ rating }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
        >
          {i <= rating ? <BiSolidStar /> : <BiSolidStarHalf />}
        </span>
      );
    }
    return stars;
  };

  return <div className="star-rating">{renderStars()}</div>;
};




export default Testimonial
