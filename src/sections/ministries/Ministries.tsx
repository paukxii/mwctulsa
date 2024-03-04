import SectionContainer from '../../components/SectionContainer';
import { ministries } from '../../constants';
import MinistryCard from './MinistryCard';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import { EffectFade, Autoplay, Navigation, Pagination, } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Ministries() {
  return (
    <SectionContainer bgColor='' id='ministries'>

      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        effect={'fade'}
        loop={true}
        spaceBetween={6}
        speed={1000}
        slidesPerView={1}
        pagination={{clickable:true}}
        autoplay={{delay: 5000, disableOnInteraction: false}}
      >

      {ministries.map((ministry, index) => (
        <SwiperSlide key={index}>
          <MinistryCard ministry={ministry} />
        </SwiperSlide>
      ))}
      </Swiper>
    </SectionContainer>
  );
}
