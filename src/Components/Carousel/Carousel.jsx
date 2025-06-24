import React from 'react'
import '../Carousel/carusel.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { CarouselSlide } from './CarouselSlide';
import './CarouselSlide.css'

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

import arrow from '../../assets/white-arrow.png'

import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'


export const Carousel = () => {
  return (
    <div className='carusel container'>
      <div className="slider-arrow-prev swiper-button-prev">
        <img src={arrow} alt="Previous" />
      </div>

      <Swiper
        slidesPerView={1}
        breakpoints={{
          1129: {
            slidesPerView: 2
          }
        }}
        spaceBetween={40}
        modules={[Navigation]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        loop={true}
        className='swiper_container'

      >
        <SwiperSlide>
          <CarouselSlide
            profile={user_1}
            name={'William Jackson'}
            university={'Edusity, USA'}
            text={`Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, knowledgeable professors, and hands-on experiences have truly exceeded my expectations`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselSlide
            profile={user_2}
            name={'William Jackson'}
            university={'Edusity, USA'}
            text={`Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, knowledgeable professors, and hands-on experiences have truly exceeded my expectations`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselSlide
            profile={user_3}
            name={'William Jackson'}
            university={'Edusity, USA'}
            text={`Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, knowledgeable professors, and hands-on experiences have truly exceeded my expectations`}
          />
        </SwiperSlide>
      </Swiper>

      <div className="slider-arrow-next swiper-button-next">
        <img src={arrow} alt="Next" />
      </div>
    </div>
  )
}
