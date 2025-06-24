import React from 'react'


export const CarouselSlide = ({profile, name, university, text}) => {

    return (
    <div className='slide'>
        <div className="slide-heding">
            <div className="profile-picture">
                <img src={profile} alt="" />
            </div>
            <div className="name-holder">
                <div className="name">
                    <h3>{name}</h3>
                </div>
                <div className="university">
                    <p>{university}</p>
                </div>
            </div>
        </div>
        <div className="slide-text">
            <p>{text}</p>
        </div>
        
    </div>
  )
}
