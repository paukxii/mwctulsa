interface UpcomingEventProps {
  name: string;
  image: string;
}

export default function RectangleContainer({
  name,
  image,
}: UpcomingEventProps) {
  console.log(image);
  return (
    <div
      key={name}
      className={`relative rounded-lg h-[208px] sm:h-[330px] md:h-[328px] md:w-[560px] border-2 drop-shadow-sm flex flex-col items-center justify-center capitalize font-bold text-white`}
    >
      <div className={`absolute inset-0 w-full object-contian h-full p-2`}>
        <img src={image} alt='' className='opacity-100' />
      </div>
      {name.split('').map((eventName, index) => (
        <div key={index} className='w-[342px]'>
          <h1 className='text-3xl text-shadow bg-transparent text-zinc-800'>
            {/* {eventName} */}
          </h1>
        </div>
      ))}
    </div>
  );
}