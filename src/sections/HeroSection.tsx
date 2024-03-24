import SectionContainer from '../components/SectionContainer';
import Event_slider from '../sections/upcoming/Event_slider';

export default function HeroSection() {
  return (
    <SectionContainer
      id='hero'
      bgImage='bg-hero w-full'
      hero={true} >
     <div className='relative w-full sm:h-[44rem]'>
        <div className='grid grid-cols-1 h-screen w-full place-items-center sm:h-[20rem] text-center'>
          <div className='absolute bottom-5 sm:bottom-0 md:bottom-20 w-full lg:w-[82%]'>
              <Event_slider />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}