import React, { ReactNode, useEffect, useState } from 'react';
import { mwc_logo, navbar_items } from '../constants';
import { Bars3Icon as HamburgerIcon, XMarkIcon } from '@heroicons/react/20/solid';
import MobileMenu from './MobileMenu';
import { Link } from 'react-scroll';

interface TopbarContainerProps {
  children: ReactNode;
}

const TopbarContainer: React.FC<TopbarContainerProps> = ({ children }) => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newOpacity = scrollPosition > 1 ? scrollPosition / 800 : 0;
      requestAnimationFrame(() => {
        setOpacity(newOpacity);
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='sticky top-0 sm:top-4 md:top-2 sm:mx-auto md:mx-auto w-full sm:w-[92%] md:w-[95%] h-24 sm:h-[70px] z-50 sm:rounded-3xl md:rounded-3xl' style={{ backgroundColor: `rgba(220, 150, 0, ${opacity})` }}>
      {children}
    </div>
  );
};

interface TopBarWrapperProps {
  children: ReactNode;
}

const TopBarWrapper: React.FC<TopBarWrapperProps> = ({ children }) => (
  <nav className='relative flex justify-between items-center h-full w-full px-10 lg:px-20'>
    {children}
  </nav>
);

const ChurchLogo: React.FC = () => (
    <Link to='hero' style={{ cursor: 'pointer' }}><img src={mwc_logo} alt='Church Logo' className='mwc-logo' /></Link>
);

const Topbar: React.FC = () => {
  const [isMobileMenuOpen, setisMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
  }, [isMobileMenuOpen]);

  return (
    <>
      <TopbarContainer>
        <TopBarWrapper>
          <ChurchLogo />
          <ul className='sticky top-0 flex items-end h-full gap-5'>
            {navbar_items.map((item, index) => (
              <li key={index} className='hidden lg:flex items-end gap-5 h-full text-orange-200'>
                <Link
                  activeClass='navbar-active'
                  to={item.link}
                  spy={true}
                  smooth={true}
                  duration={300}
                  offset={-64}
                  style={{ cursor: 'pointer' }}
                >
                  <p className='font-light lg:text-2xl capitalize pb-2'>{item.name}</p>
                </Link>
                {index !== navbar_items.length - 1 && <div className='h-6 w-[2px] mb-2 bg-white/60' />}
              </li>
            ))}
          </ul>
          <div className='w-8 -mr-4 font-medium text-white lg:hidden' onClick={() => setisMobileMenuOpen((prev) => !prev)}>
            {isMobileMenuOpen ? <XMarkIcon /> : <HamburgerIcon />}
          </div>
        </TopBarWrapper>
      </TopbarContainer>
      <MobileMenu open={isMobileMenuOpen} setMobileOpen={setisMobileMenuOpen} />
    </>
  );
};

export default Topbar;