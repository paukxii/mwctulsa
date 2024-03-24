// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css/effect-fade';

import { upcoming_events } from '../../constants';

const event_slider = () => {

  return (
      <Swiper className=''
        modules={[Autoplay, EffectFade]}
        effect={'fade'}
        fadeEffect={{crossFade: true}}
        loop={true}
        centeredSlides={true}
        autoplay={{delay: 10000, disableOnInteraction: false}}
        speed={1000}
      >
        {upcoming_events.map((event,index) => (
            <SwiperSlide key={index} className='mb-5 sm:mb-3'>
              <div className=''>
                <img src={event.image} alt={event.name} className='align-bottom rounded-3xl sm:rounded-2xl' />
              </div>
            </SwiperSlide>
        ))}
        <img className='rounded-3xl sm:rounded-xl backdrop-blur-md bg-gradient-to-br from-sky-800 to-indigo-900' src='/imgs/weekly/WeeklyTable.png' />
      </Swiper>
  )
}

export default event_slider