import React from 'react';
import { SectionHeader } from '../../components/SectionHeader';
import { volunteer } from '../../constants';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Volunteer() {
  return (
    <div id='volunteer'>
      {/* <SectionHeader>
         Volunteer
       </SectionHeader> */}

      <Swiper
        modules={[Autoplay, Navigation]}
        slidesPerView={3}
        spaceBetween={5}
        breakpoints={{
          743: {
            slidesPerView: 4,
          },
          1136: {
            slidesPerView: 10,
          },
        }}
        loop={true}
        speed={8000}
        autoplay={{ delay: 0 }}
      >
        {volunteer.map((volunteerItem) => (
          <SwiperSlide key={volunteerItem.image} className=''>
            <div className=''>
              <img src={volunteerItem.image} alt={''} className='w-32 sm:w-28 rounded-full grayscale hover:grayscale-0 transition-all duration-1000' />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}