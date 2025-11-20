import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './App.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="photo1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="photo2.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="photo3.avif" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="photo4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="photo5.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="photo6.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="photo7.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="photo8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="photo9.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}