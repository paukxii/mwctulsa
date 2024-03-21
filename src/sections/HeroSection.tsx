import SectionContainer from '../components/SectionContainer';
import Event_slider from '../sections/upcoming/Event_slider';

export default function HeroSection() {
  return (
    <SectionContainer
      id='hero'
      bgImage='bg-hero h-[54rem] sm:h-[40.5rem] md:h-[50rem] mb-32 sm:mb-24 md:mb-[9rem] w-full'
      hero={true} >
     <div className='relative w-full'>
        <div className='grid grid-cols-1 h-screen w-full place-items-center sm:h-[750px] text-center'>
          <div className='text-center hidden'>
            <h1 className='text-white text-5xl md:text-[80px] leading-none text-shadow'> Welcome to <br/> MWC </h1>
            <p className='text-xl md:text-3xl text-white text-shadow'>မြန်မာတို့ စုဝေးကိုးကွယ်ရာနေရာမှ<br/>ကြိုဆိုပါ၏။</p>
          </div>
         <div className='absolute bottom-5 sm:bottom-12 md:bottom-44 w-full lg:w-[80%]'>
              <Event_slider />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}