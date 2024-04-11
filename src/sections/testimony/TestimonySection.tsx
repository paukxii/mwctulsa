import SectionContainer from '../../components/SectionContainer';
// import { SectionHeader } from '../../components/SectionHeader';
import { testimonies } from '../../constants';
import TestimonyCard from './TestimonyCard';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import { Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function TestimonySection() {
  
  return (
    <SectionContainer id='testimony' bgColor=''>
      <Swiper
        modules={[Autoplay, Navigation, Pagination, Scrollbar]}
        spaceBetween={5}
        loop={true}
        centeredSlides={false}
        slidesPerView={1}
        breakpoints={{
          743: {
            slidesPerView: 1,
          },
          1136: {
            slidesPerView: 3,
          },
        }}
        // navigation
        pagination={false}
        speed={1000}
        autoplay={{delay: 20000, disableOnInteraction: true}}
        >

        {testimonies.map((testimony, index) => (
            <SwiperSlide key={index}>
              <TestimonyCard key={index} testimonial={testimony} index={index.toString()}/>
            </SwiperSlide>
          ))}
      </Swiper>
    </SectionContainer>
  )
}