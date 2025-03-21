import HeroSection from '../sections/HeroSection';
import EventSection from '../sections/live/EventSection';
import Ministers from '../sections/leaders/Leaders';
import Ministries from '../sections/ministries/Ministries';
import Schedules from '../sections/shedules/Schedules';
import Visions from '../sections/visions/Visions';
import TestimonySection from '../sections/testimony/TestimonySection';
import Offering from '../sections/offering/Offering';
import Volunteer from '../sections/volunteer/Volunteer';
import FooterSection from '../sections/footer/FooterSection';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default function MainPage() {
  const locatoin = useLocation()

  useEffect(() => {
    const hash = locatoin.hash
    if (hash) {
      const element = document.querySelector(hash)
      if (element) {
        element.scrollIntoView({ behavior:'smooth' })
      }
    }
  },[locatoin])

  return (
    <div className='w-screen'>
      <HeroSection />
      <Schedules />
      <EventSection />
      <Visions />
      <Ministers />
      <Ministries />
      <Volunteer/>
      <TestimonySection />
      <Offering />
      <FooterSection />
    </div>
  )
}