// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import { Autoplay, Navigation, Pagination, Scrollbar, Parallax, EffectCoverflow } from 'swiper/modules';
import 'swiper/css/effect-fade';

import { upcoming_events } from '../../constants';

const event_slider = () => {

  return (
      <Swiper className='w-[500px] sm:w-full'
        modules={[Autoplay, Navigation, Pagination, Scrollbar, Parallax, EffectCoverflow]}
        // effect={'coverflow'}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        centeredSlides={true}
        parallax={true}
        navigation={false}
        pagination={true}
        scrollbar={{draggable: true}}
        autoplay={{delay: 50000, disableOnInteraction: false}}
        // spee d={100}
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