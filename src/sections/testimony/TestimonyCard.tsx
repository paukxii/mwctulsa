// Import necessary libraries or components

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
  return (
    <div className='min-w-min lg:min-w-min m-2'>
      <div id={index} className='relative flex flex-col w-full lg:h-auto text-left'>
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className='w-32 mx-auto mt-5 rounded-full border-4 border-gray-100 drop-shadow-lg'
        />
        <div>
          <div className='py-5 sm:py-2 font-light text-md testimony whitespace-pre-line'>{testimonial.message}</div>
          <hr className='w-full'/>
          <p className='pt-2 capitalize text-md font-medium font-sans text-slate-700'>{testimonial.name}</p>
          <p className='mb-5 text-md font-thin italic font-sans text-slate-500'>Testimonial written in: {testimonial.date}</p>
        </div>
      </div>
    </div>
  );
}