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
      bgColor='bg-gradient-to-br from-sky-800 to-indigo-900'
      >
      <Swiper
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
                  <h1 className=' text-nowrap text-3xl font-black leading-relaxed bg-gradient-to-b from-orange-200 to-red-200 bg-clip-text text-transparent m-2'>{visions.title}</h1>
                  <div className='text-lg space-y-4 font-semibold text-slate-200 p-2'>
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