import { ReactNode } from 'react';

export const SectionHeader = ({ children }: { children: ReactNode }) => (
  <div className='min-w-min'>
    <div className='bg-gradient-to-b from-sky-600 to-blue-300 bg-clip-text text-transparent text-5xl sm:text-3xl font-normal text-left my-5 sm:my-2 leading-none'>
      {children}
    </div>
  </div>
);
