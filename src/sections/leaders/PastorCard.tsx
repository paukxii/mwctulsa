import { Link as RouterLink } from 'react-router-dom';

interface Pastor {
  pastor: {
  id: number;
  name: string;
  position: string;
  thumbnail_img: string;
  image: string;
  link: string;
  autobiography: string;
  ph_no: string;
  email: string;
  fb_link: string;
  };
}

export default function PastorCard({ pastor }: Pastor) {
  const isIdGreaterThanOne = pastor.id > 1;
  const colSpanClass = isIdGreaterThanOne
    ? 'col-span-2' : 'col-span-3';
  const imageClass = isIdGreaterThanOne ? 'w-28 mx-auto' : 'w-28 mx-auto';

  return (
    <div className={`flex flex-col ${colSpanClass} justify-center items-center p-5`}>
      <div className='cursor-pointer'>
        <RouterLink to={`/leaders?tab=${pastor.id}`}>
          <div className='bg-slate-300 relative max-w-min overflow-hidden rounded-full'>
            <img
              src={pastor.thumbnail_img}
              alt={pastor.name}
              className={`${imageClass} max-w-min rounded-full hover:scale-105 transition duration-300 ease-in-out`}
            />
          </div>
          <h1 className=' font-medium text-lg'>{pastor.name}</h1>
          <h2 className='text-blue-900 font-light text-md'>{pastor.position}</h2>
        </RouterLink>
      </div>
    </div>
  );
}