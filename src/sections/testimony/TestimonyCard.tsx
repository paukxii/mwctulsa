import React from 'react';

interface Testimonial {
  name: string;
  image: string;
  message: string;
}

interface TestimonyProp {
  index: string;
  testimonial: Testimonial;
}

export default function TestimonyCard({ testimonial, index }: TestimonyProp) {
  const cardClasses = `
    relative
    border-4 border-white 
    bg-gradient-to-b from-zinc-100 to-neutral-100 
    rounded-[75px] rounded-tl-[180px] rounded-br-[120px] 
    w-full xl:h-auto 
    text-center 
    mx-auto`
  ;

  return (
    <div className='min-w-full xl:min-w-min'>
      <div id={index} className={cardClasses}>
        <img
          src={testimonial.image}
          alt=''
          className='w-24 mx-auto rounded-full border-4 border-white mt-5 drop-shadow-md'
        />
        <div className='py-5 sm:py-2 px-12 sm:px-3 font-light text-md testimony' dangerouslySetInnerHTML={{ __html: testimonial.message }} />
        <hr className='w-[90%] sm:w-[85%] mx-auto'/>
        <p className='py-2 mb-2 capitalize text-md font-medium font-sans text-slate-700'>{testimonial.name}</p>
      </div>
    </div>
  );
}