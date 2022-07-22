import React from 'react'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    id: 1,
    avatar: AVTR1,
    name: 'Marcia',
    review: 'Thiago is an amazing boy who always helps when possible.',
  },
  {
    id: 2,
    avatar: AVTR2,
    name: 'Marcos',
    review: 'A smart person who is always running after new knowledge.',
  },
  {
    id: 3,
    avatar: AVTR3,
    name: 'Arthur',
    review: 'I worked with him for a year and we exchanged a lot of information, he has a lot to add.',
  },
  
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        modules={[ Pagination ]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
          data.map(({id,avatar, name, review}) => {
             return (
              <SwiperSlide key={id} className='testimonial'>
                <div className='client__avatar'>
                  <img src={avatar}  />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
             )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials