import HeroSection from '../sections/HeroSection';
import EventSection from '../sections/live/EventSection';
import Ministers from '../sections/leaders/Leaders';
import Ministries from '../sections/ministries/Ministries';
import Schedules from '../sections/shedules/Schedules';
import Visions from '../sections/visions/Visions';
import TestimonySection from '../sections/testimony/TestimonySection';
import Offering from '../sections/offering/Offering';
import Event_slider from '../sections/upcoming/Event_slider';
import Volunteer from '../sections/volunteer/Volunteer';
import Topbar from '../components/Topbar';
import FooterSection from '../sections/footer/FooterSection';

export default function MainPage() {
  return (
    <>
      <Topbar />
      <HeroSection />
      <div className='hidden'>
        <Event_slider />
      </div>
      <Schedules />
      <EventSection />
      <Visions />
      <Ministers />
      <Ministries />
      <Volunteer/>
      <TestimonySection />
      <Offering />
      <FooterSection />
    </>
  )
}