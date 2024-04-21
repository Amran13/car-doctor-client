import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/less';
import 'swiper/less/navigation';
import 'swiper/less/pagination';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation, Pagination } from 'swiper/modules';
import banner1 from '../../../assets/images/banner/1.jpg'
import banner2 from '../../../assets/images/banner/2.jpg'
import banner3 from '../../../assets/images/banner/3.jpg'
import banner4 from '../../../assets/images/banner/4.jpg'
import banner5 from '../../../assets/images/banner/5.jpg'
import banner6 from '../../../assets/images/banner/6.jpg'



const Banner = () => {
  return (
    <Swiper navigation={true} modules={[Navigation, Pagination]} pagination={{ clickable: true }} className="mySwiper z-50 relative">
      <SwiperSlide> <img className='' src={banner1} alt="" /> </SwiperSlide>
      <SwiperSlide> <img src={banner2} alt="" /> </SwiperSlide>
      <SwiperSlide> <img src={banner3} alt="" /> </SwiperSlide>
      <SwiperSlide> <img src={banner4} alt="" /> </SwiperSlide>
      <SwiperSlide> <img src={banner5} alt="" /> </SwiperSlide>
      <SwiperSlide> <img src={banner6} alt="" /> </SwiperSlide>
      <div className='absolute top-0 z-40 w-1/2 text-white bg-gradient-to-r from-[#151515]  h-full '>
        <div className='lg:mt-40 ml-12 space-y-6'>
          <h1 className='lg:text-7xl font-bold'>Affordable Price For Car Servicing</h1>
          <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
          <div className='flex space-x-4 pt-8'>
            <button className="btn btn-primary">Primary</button>
            <button className="btn btn-outline btn-secondary">Secondary</button>
          </div>
        </div>
      </div>
    </Swiper>
  );
};

export default Banner;