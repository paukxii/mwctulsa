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
        spaceBetween={2}
        loop={true}
        centeredSlides={true}
        autoplay={{delay: 5000, disableOnInteraction: false}}
        speed={1000}
        
      >
        {upcoming_events.map((event,index) => (
            <SwiperSlide key={index} className='mb-2 sm:mb-2'>
              <div className=''>
                <img src={event.image} alt={event.name} className='align-bottom rounded-3xl sm:rounded-2xl bg-gradient-to-b from-sky-800/50 to-indigo-900/50' />
              </div>
            </SwiperSlide>
        ))}
      </Swiper>
  )
}

export default event_slider