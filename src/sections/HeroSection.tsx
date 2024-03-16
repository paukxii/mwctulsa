import SectionContainer from '../components/SectionContainer';
import Event_slider from '../sections/upcoming/Event_slider';

export default function HeroSection() {
  return (
    <SectionContainer
      id='hero'
      bgImage='bg-hero h-[50rem] sm:h-[41rem] mb-36 sm:mb-20 sm:w-full md:-mt-[70px] md:w-[92%] md:h-[720px] md:rounded-3xl md:mx-auto'
      hero={true} >
      <div className='relative w-full'>
        <div className='grid grid-cols-1 h-screen w-full place-items-center sm:h-[750px] text-center'>
          <div className='text-center hidden'>
            <h1 className='text-white text-5xl md:text-[80px] leading-none text-shadow'> Welcome to <br/> MWC </h1>
            <p className='text-xl md:text-3xl text-white text-shadow'>မြန်မာတို့ စုဝေးကိုးကွယ်ရာနေရာမှ<br/>ကြိုဆိုပါ၏။</p>
          </div>
          <div className='absolute mt-[28em] lg:mt-[20rem] lg:w-[72%] sm:w-full'>
              <Event_slider />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}