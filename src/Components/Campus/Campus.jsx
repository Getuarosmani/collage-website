import React from 'react'
import './Campus.css'
import campus_img_1 from '../../assets/gallery-1.png'
import campus_img_2 from '../../assets/gallery-2.png'
import campus_img_3 from '../../assets/gallery-3.png'
import campus_img_4 from '../../assets/gallery-4.png'
import arrow from '../../assets/white-arrow.png'

export const Campus = () => {
  return (
    <div className='campus container'>
        <div className="gallery">
            <img src={campus_img_1} alt="" />
            <img src={campus_img_2} alt="" />
            <img src={campus_img_3} alt="" />
            <img src={campus_img_4} alt="" />
        </div>
        <button className='btn campus-btn'>See more here <img src={arrow} alt="" /></button>
    </div>
  )
}
