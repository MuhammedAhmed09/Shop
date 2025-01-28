import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const Bannir = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src='/Image/bg-1.jpg' alt="open" className='w-full h-[40vw]' />
        </SwiperSlide>
        <SwiperSlide>
            <img src='/Image/bg-2.jpg' alt="open" className='w-full h-[40vw]' />
        </SwiperSlide>
        <SwiperSlide>
            <img src='/Image/bg-3.jpg' alt="open" className='w-full h-[40vw]' />
        </SwiperSlide>
      </Swiper> 
    </>
  )
}

export default Bannir