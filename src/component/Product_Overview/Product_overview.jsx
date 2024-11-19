import React from 'react'
import './Product_overview.scss'

const Product_overview = ({ title, subtitle, image }) => {
  const product_overview = {
    background: `linear-gradient(0deg, #212121, rgba(238, 238, 238, 0.1294117647)),url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }
  return (
    <>
      <div className="product_overview" style={product_overview}>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </>
  )
}

export default Product_overview
