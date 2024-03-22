interface Testimonial {
  name: string;
  image: string;
  message: string;
  date: string;
}

interface TestimonyProp {
  index: string;
  testimonial: Testimonial;
}

export default function TestimonyCard({ testimonial, index }: TestimonyProp) {
  const cardClasses = `
    relative
    border-4 border-white 
    bg-gradient-to-r from-blue-100 to-cyan-100 
    rounded-[75px] rounded-tl-[130px] rounded-br-[120px] 
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
        <p className='pt-2 capitalize text-md font-medium font-sans text-slate-700'>{testimonial.name}</p>
        <p className='mb-5 text-md font-thin italic font-sans text-slate-500'>Testimonial written in: {testimonial.date}</p>
      </div>
    </div>
  );
}