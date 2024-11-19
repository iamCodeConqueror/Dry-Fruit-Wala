import React from 'react'
import { useParams } from 'react-router-dom'
import Product from '../../component/Product/Product'
import { BiSearch } from "react-icons/bi";

const Product_page = () => {
  // Extract product_id if needed for a specific product view (you can use this for a single product detail page)
  const { product_id } = useParams()

  return (
    <>
      <div className="banner_section product">
        <div className="section_heading">
          <h2 className="title">Our <span className="primary">P</span>roduct</h2>
          <p>Explore a vibrant array of farm-fresh delights in our Products section. From succulent fruits to premium dry fruits, discover nature's finest offerings curated just for you.</p>
        </div>
      </div>

      <div className="row_col-3 product_banner">
        <Product total_card={40} /> {/* Display 40 product cards or any other data */}
      </div>
    </>
  )
}

export default Product_page
