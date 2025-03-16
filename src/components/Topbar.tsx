import React, { useEffect, useState } from "react";
import { navbar_items } from "../constants";
import mwc_logo from "/imgs/mwc_logo.png";
import {
  Bars3Icon as HamburgerIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import MobileMenu from "./MobileMenu";
import { Link, useLocation } from "react-router-dom";

const ChurchLogo: React.FC = () => (
  <Link to="/#hero">
    <img
      src={mwc_logo}
      alt="Church Logo"
      className=" lg:ml-10 mt-10 h-28 w-auto top-4"
    />
  </Link>
);

const Topbar: React.FC = () => {
  const [isMobileMenuOpen, setisMobileMenuOpen] = useState(false);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newOpacity = scrollPosition > 1 ? scrollPosition / 800 : 0;
      requestAnimationFrame(() => {
        setOpacity(newOpacity);
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const location = useLocation();

  return (
    <>
      <nav
        className={`${
          location.pathname.includes("leaders") ? "hidden" : "sticky"
        } top-2 lg:top-0 md:top-2 mx-auto lg:w-full w-[92%] md:w-[95%] md:h-24 h-[70px] z-50 rounded-3xl lg:rounded-none md:rounded-3xl`}
        style={{ backgroundColor: `rgba(220, 150, 0, ${opacity})` }}
      >
        <div className="flex justify-between items-center h-full px-5 w-full lg:px-10">
          <ChurchLogo />
          <ul className="sticky top-0 flex items-end h-full gap-5">
            {navbar_items.map((item, index) => (
              <li
                key={index}
                className="hidden lg:flex items-end gap-5 h-full capitalize text-lg"
              >
                <Link
                  to={`/#${item.link}`}
                  className={`${
                    location.hash === `#${item.link}`
                      ? "text-white"
                      : "text-white/50"
                  } text-lg capitalize font-semibold`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div
            className="w-10 font-semibold lg:hidden text-white"
            onClick={() => setisMobileMenuOpen((prev) => !prev)}
          >
            {isMobileMenuOpen ? <XMarkIcon /> : <HamburgerIcon />}
          </div>
        </div>
      </nav>
      <MobileMenu open={isMobileMenuOpen} setMobileOpen={setisMobileMenuOpen} />
    </>
  );
};

export default Topbar;
