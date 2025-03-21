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
      className={`relative ${bgColor} ${bgImage} lg:bg-fixed md:bg-center sm:bg-cover bg-center bg-local md:bg-cover  md:bg-local ${bgChildImage} ${hero && '-mt-[8rem]'} py-3 lg:py-8`}
      id={id}
    >
      <div className='w-[92%] lg:w-[75%] mx-auto'>{children}</div>
    </section> 
  );
}