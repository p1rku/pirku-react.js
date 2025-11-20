import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './swiper.css';
export default function Swiper2() {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation={true}
      pagination={{ clickable: true }}
      spaceBetween={30}
      slidesPerView={1}
    >
      <SwiperSlide><img src="photo1.jpg" /></SwiperSlide>
      <SwiperSlide><img src="photo2.jpeg" /></SwiperSlide>
      <SwiperSlide><img src="photo3.avif" /></SwiperSlide>
      <SwiperSlide><img src="photo4.jpg" /></SwiperSlide>
      <SwiperSlide><img src="photo5.webp" /></SwiperSlide>
      <SwiperSlide><img src="photo6.jpeg" /></SwiperSlide>
      <SwiperSlide><img src="photo7.jpeg" /></SwiperSlide>
      <SwiperSlide><img src="photo8.jpg" /></SwiperSlide>
      <SwiperSlide><img src="photo9.jpg" /></SwiperSlide>
    </Swiper>
  );
}

