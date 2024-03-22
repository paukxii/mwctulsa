import {
  fb_logo,
  mail_logo,
  mwc_info,
  yt_logo,
} from '../../constants';

interface SocialMediaLink {
  href: string;
  src: string;
  alt: string;
}

const SocialMediaLink = ({ href, src, alt }: SocialMediaLink) => (
  <a href={href} target='_blank'>
    <img src={src} alt={alt} className='w-12 grayscale hover:grayscale-0 transition-all duration-1000' />
  </a>
);

export default function FooterSection() {
  return (
    <div id='footer' className=''>
      <div className='mb-[.45rem]'>
        <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
            <defs>
                <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g className="parallax">
                <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgba(220,237,255,0.7)" />
                <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(155,203,255,0.5)" />
                <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(100,170,255,0.3)" />
                <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(0,120,255,0.1)" />
            </g>
        </svg>
      </div>

      <div className='flex flex-col justify-center items-center py-7 bg-blue-300'>
        <img src='/imgs/mwc_logo_w.png' className='w-40'></img>
        <a href='https://goo.gl/maps/TGaQcPi357kQousf7' target='_blank' className='text-md text-gray-800 text-2xl sm:text-xl font-light my-2 sm:my-0'>2102 S Hickory St, Sapulpa OK 74066</a>
        <div className='w-full flex gap-5 sm:gap-2 py-5 items-center justify-evenly'>
          <div className='h-1 flex-1 bg-gray-600 rounded-full' />
            <SocialMediaLink href={mwc_info.fb_link} src={fb_logo} alt='mwc facebook page' />
            <SocialMediaLink href={`mailto:${mwc_info.email_link}`} src={mail_logo} alt='mwc email' />
            <SocialMediaLink href={mwc_info.yt_link} src={yt_logo} alt='mwc youtube' />
          <div className='h-1 flex-1 bg-gray-600 rounded-full ' />
        </div>
        <h1 className='text-white text-lg font-light'>&copy; 2024 Myanmar Worship Center</h1>
      </div>
    </div>
  );
}