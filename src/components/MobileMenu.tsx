import { Link } from 'react-scroll';
import { navbar_items } from '../constants';

export default function MobileMenu({
  open,
  setMobileOpen,
}: {
  open: boolean;
  setMobileOpen: (open: boolean) => void;
}) {
  return (
    <aside className={`${open ? 'h-full' : 'h-0'} fixed top-4 md:top-6 left-0 right-0 bottom-0 z-[9] `}
    >
      <div
        className={`relative bg-gradient-to-br from-sky-800/75 to-indigo-900/75 mx-auto w-[92%] rounded-3xl h-[600px] backdrop-blur-md ${open ? 'mt-0' : '-mt-[150vh]'} pb-8 pt-14 md:pt-24 transition-all duration-300 ease-in-out`}
      >
        <div  className='grid place-items-center h-full'>
          <ul>
            {navbar_items.map((item, index) => (
              <li
                key={index}
                className={`items-center text-orange-700 text-2xl max-w-max mx-auto`}
              >
                <Link
                  activeClass='navbar-active'
                  to={item.link}
                  spy={true}
                  smooth={true}
                  duration={300}
                  offset={-80}
                  onClick={() => setMobileOpen(false)}
                  style={{ cursor: 'pointer' }}
                >
                  <p className={`font-light text-3xl capitalize pb-2 bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent`}>
                    {item.name}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}