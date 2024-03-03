import React from 'react';
import {
  fb_logo,
  mail_logo,
  mwc_info,
  yt_logo,
} from '../../constants';

const SocialMediaLink = ({ href, src, alt }) => (
  <a href={href} target='_blank'>
    <img src={src} alt={alt} className='w-12 grayscale hover:grayscale-0 transition-all duration-1000' />
  </a>
);

export default function FooterSection() {
  return (
    <div id='footer' className='pt-24 pb-10 sm:py-5 md:py-5 bg-slate-200'>
      <div className='flex flex-col justify-center items-center'>
        <img src='/imgs/mwc_logo_w.png' className='w-40'></img>
        <a href='https://goo.gl/maps/TGaQcPi357kQousf7' target='_blank' className='text-md text-gray-600 text-2xl sm:text-xl font-light my-2'>2102 S Hickory St, Sapulpa OK 74066</a>
        <div className='w-full flex gap-5 sm:gap-2 py-5 items-center justify-evenly'>
          <div className='h-1 flex-1 bg-gray-600 rounded-full' />
          <SocialMediaLink href={mwc_info.fb_link} src={fb_logo} alt='mwc facebook page' />
          <SocialMediaLink href={`mailto:${mwc_info.email}`} src={mail_logo} alt='mwc email' />
          <SocialMediaLink href={mwc_info.yt_link} src={yt_logo} alt='mwc youtube' />
          <div className='h-1 flex-1 bg-gray-600 rounded-full ' />
        </div>
        <h1>&copy; 2023 Myanmar Worship Center</h1>
      </div>
    </div>
  );
}
