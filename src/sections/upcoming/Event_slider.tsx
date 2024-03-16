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
            <SwiperSlide key={index} className=''>
              <div className=''>
                <img src={event.image} alt={event.name} className='' />
              </div>
            </SwiperSlide>
        ))}
      </Swiper>
  )
}

export default event_slider