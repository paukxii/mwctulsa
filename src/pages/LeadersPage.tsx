import React, { useEffect, useState } from 'react';
import { useLocation, Link as RouterLink } from 'react-router-dom';
import { fav_icon, pastors } from '../constants';
import SectionContainer from '../components/SectionContainer';
interface Pastor {
  id: number;
  name: string;
  position: string;
  thumbnail_img: string;
  image: string;
  link: string;
  autobiography: string;
}

interface TabProps {
  pastor: Pastor,
  isActive: boolean,
  onClick: () => void
}

function Tab({ pastor, isActive, onClick }: TabProps) {
  return (
    <button
      type='button'
      className={`p-1 inline-flex items-center gap-1 rounded-full text-sm hover:grayscale-0 transition-all duration-1000 ${
        isActive ? 'active grayscale-0 transition-all duration-1000' : 'grayscale transition-all duration-1000'
      }`}
      onClick={onClick}
    >
      <img
        src={pastor.thumbnail_img}
        alt={pastor.name}
        className='h-20 w-20 sm:h-14 sm:w-14 object-cover rounded-full drop-shadow-xl'
      />
    </button>
  );
}

function LeadersPage() {
  const [activeTab, setActiveTab] = useState(0);
  const location = useLocation();
  const isTabActive = (index: number) => activeTab === index;


  useEffect(() => {
    const tabFromQuery = new URLSearchParams(location.search).get('tab');
    // console.log(tabFromQuery);
    if (tabFromQuery) setActiveTab(parseInt(tabFromQuery, 10));
  }, [location.search]);

  useEffect(() => {
    const activeTabElement = document.getElementById(activeTab.toString());
    if (activeTabElement) activeTabElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [activeTab]);

  const Home_button: React.FC = () => (
    <RouterLink to='/'><img src={fav_icon} alt='Home' className='h-18 w-18 sm:w-12 m-1 mx-auto sm:mx-1 drop-shadow-lg cursor-pointer' /></RouterLink>
  );

  return (
    <div className='flex flex-col h-screen'>
      <div className='fixed lg:sticky z-10 top-0 bg-slate-400 w-20 sm:w-14 mx-auto sm:mx-2 rounded-b-full drop-shadow-lg'>
        <Home_button />
      </div>

      <div className='w-full'>
        {pastors.map((pastor, index) => (
          <div
            key={pastor.id}
            id={pastor.id.toString()}
            role='tabpanel'
            aria-labelledby={pastor.link}
            className={`fade-in ${isTabActive(index) ? '' : 'hidden'}`}
          >
            <img src={pastor.image} className='hidden sm:block md:block w-full mt-0 mb-2' alt={pastor.name} />

            <SectionContainer id=''>
              <img src={pastor.image} className='hidden lg:block mb-4 h-[670px] w-full object-cover object-top drop-shadow-xl rounded-3xl' alt={pastor.name} />
              <h1 className='text-slate-500 font-light text-3xl'>{pastor.name}</h1>
              <h2 className='text-slate-400 -mt-1 mb-5 text-xl font-normal'>{pastor.position}</h2>
              <p className='font-light text-md whitespace-pre-line'> {pastor.autobiography} </p>
              {pastor.favorite_verse && <p className='font-light text-md whitespace-pre-line'><br /><b>Favorite scriptures</b><br /> {pastor.favorite_verse}</p>} 
            </SectionContainer>
          </div>
        ))}
      </div>
      
      <div className='sticky mx-auto bottom-2 sm:max-w-max md:max-w-max bg-slate-400 backdrop-blur-sm rounded-full'>
        <nav className='flex justify-center' aria-label='Tabs' role='tablist'>
          {pastors.map((pastor, index) => (
            <Tab
              key={pastor.id}
              pastor={pastor}
              isActive={isTabActive(index)}
              onClick={() => setActiveTab(index)}
            />
          ))}
        </nav>
      </div>
    </div>
  );
}

export default LeadersPage;