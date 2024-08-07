import SectionContainer from '../../components/SectionContainer';
import { visions } from '../../constants';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import { Autoplay, Navigation, Pagination, Scrollbar, Parallax, EffectFade } from 'swiper/modules';
import 'swiper/css/effect-fade';

const event_slider = () => {

  return (
    <SectionContainer
      id='visions'
      bgColor='bg-gradient-to-br from-sky-800 to-indigo-900 sm:w-[90%] sm:mx-auto sm:rounded-[30px]'
      >
      <Swiper className='w-full overflow-hidden'
        modules={[Autoplay, Navigation, Pagination, Scrollbar, Parallax, EffectFade]}
        effect={'fade'}
        fadeEffect={{crossFade: true}}
        loop={true}
        autoplay={{delay: 10000, disableOnInteraction: false}}
        speed={1000}
      >
          {visions.map((visions,index) => (
              <SwiperSlide key={index} className=''>
                <div className='lg:flex lg:flex-col-2 lg:w-[80%] mx-auto whitespace-pre-line'>
                  <p className='sm:ml-10 md:ml-10 min-w-60 lg:py-7 text-3xl font-black leading-relaxed sm:my-5 md:my-5 bg-gradient-to-b from-orange-200 to-red-200 bg-clip-text text-transparent'>{visions.title}</p>
                  <div className='sm:ml-10 md:ml-10 max-w-max text-lg font-semibold leading-relaxed -indent-6 sm:-indent-6 text-slate-200'>
                    <p className='mb-2'>{visions.line_1}</p>
                    <p className='mb-2'>{visions.line_2}</p>
                    <p className='sm:mb-6'>{visions.line_3}</p>
                  </div>
                </div>
              </SwiperSlide>
        ))}
      </Swiper>
    </SectionContainer>
  )
}

export default event_slider