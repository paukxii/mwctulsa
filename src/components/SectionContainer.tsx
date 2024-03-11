import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  bgColor?: string;
  bgImage?: string;
  bgChildImage?: string;
  id: string;
  hero?: boolean;
}
export default function SectionContainer({
  children,
  bgColor,
  bgImage,
  bgChildImage,
  id,
  hero,
}: SectionProps) {

  return (
    <section
      className={`relative ${bgColor} ${bgImage} bg-no-repeat bg-cover bg-fixed bg-center sm:bg-local md:bg-local ${bgChildImage} bg-cover bg-local ${hero && '-mt-[8rem]'} py-3 lg:py-10`}
      id={id}
    >
      <div className='w-[92%] lg:w-[55%] mx-auto'>{children}</div>
    </section> 
  );
}