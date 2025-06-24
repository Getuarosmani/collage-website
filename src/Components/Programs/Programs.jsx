import React from 'react';
import '../Programs/Programs.css';
import program_img_1 from '../../assets/program-1.png';
import program_img_2 from '../../assets/program-2.png';
import program_img_3 from '../../assets/program-3.png';
import program_icon_1 from '../../assets/program-icon-1.png';
import program_icon_2 from '../../assets/program-icon-2.png';
import program_icon_3 from '../../assets/program-icon-3.png';

export const Programs = () => {
  return (
    <div className='programs container'>
        <div className='program'>
            <img src={program_img_1} alt="" />
            <span className='program-overlay'>
            <img src={program_icon_1} alt="" />
            <p>Graduation Degree</p>
            </span>
        </div>
        <div className='program'>
            <img src={program_img_2} alt="" />
            <span className='program-overlay'>
            <img src={program_icon_2} alt="" />
            <p>Master Degree</p>
            </span>
        </div>
        <div className='program'>
            <img src={program_img_3} alt="" />
            <span className='program-overlay'>
            <img src={program_icon_3} alt="" />
            <p>Post Graduation</p>
            </span>
        </div>
    </div>
  )
}
