import React from 'react'
import './Services.scss'

const Services = ({ image, title, subtitle }) => {
  return (
    <>
      <div className="service_card">
        <img src={image} alt={title} />
        <img src={image} alt={title} className='to_bottom' />
        <h3 className="title">{title}</h3>
        <p className="subtitle">{subtitle}</p>
      </div>
    </>
  )
}

export default Services
