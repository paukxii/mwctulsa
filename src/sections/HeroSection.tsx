import SectionContainer from '../components/SectionContainer';
// import Event_slider from '../sections/upcoming/Event_slider';

export default function HeroSection() {
  return (
    <SectionContainer
      id='hero'
      bgImage='bg-hero sm:w-full sm:h-[750px] sm:mx-auto md:-mt-[70px] md:w-[92%] md:h-[720px] md:rounded-3xl md:mx-auto'
      hero={true} >
      <div className='relative w-full'>
        <div className='grid grid-cols-1 h-screen w-full place-items-center sm:h-[750px] text-center'>
          <div className='text-center'>
            <h1 className='text-white text-[60px] md:text-[80px] lg:text-[80px] leading-none text-shadow'> Welcome to <br/> MWC </h1>
            <p className='text-2xl md:text-3xl text-white text-shadow'>မြန်မာတို့ စုဝေးကိုးကွယ်ရာနေရာမှ ကြိုဆိုပါ၏။</p>
          </div>
          {/* <div className='absolute mt-[65%] sm:mt-[550px] w-full sm:w-full'>
              <Event_slider />
          </div> */}
        </div>
      </div>
    </SectionContainer>
  );
}