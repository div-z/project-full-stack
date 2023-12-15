import React from 'react'
import './Offers.css'
import exclusice_image from '../Assets/exclusive_image.png'
export const Offer = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers for You</h1>
        <p>ONLY ON BEST SELLERS PRODUCT</p>
        <button>Check now</button>
      </div>
      <div className="offers-right">
        <img src={exclusice_image} alt="" />
      </div>
    </div>
  )
}
