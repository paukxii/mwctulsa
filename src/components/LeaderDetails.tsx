import { Link, useParams } from "react-router-dom";
import { pastors } from "../constants";
import SectionContainer from "./SectionContainer";
import fb_logo from "/imgs/mwc_fb.png";
import fav_icon from "/imgs/favicon.png";
import { useEffect } from "react";

export default function LeaderDetails() {
  const { leaderId } = useParams();
  const pastor = pastors.find((p) => p.name === leaderId);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [leaderId, pastor]);

  const HomeButton = () => (
    <Link to="/" aria-label="Go to Home">
      <img
        src={fav_icon}
        alt="Home"
        className="w-12 md:w-16 lg:w-16 m-1 mx-auto drop-shadow-lg"
      />
    </Link>
  );

  if (!pastor) {
    return (
      <div className="text-center text-red-500 font-semibold text-lg">
        Leader not found.
      </div>
    );
  }

  return (
    <div className="flex-1 h-full">
      {/* Home Button */}
      <div className="lg:mx-auto md:ml-8 w-max">
        <div className="fixed top-0 z-10 bg-slate-400 md:w-20 lg:w-20 w-14 mx-2 md:mx-auto rounded-b-full drop-shadow-lg">
          <HomeButton />
        </div>
      </div>

      {/* Leader Details */}
      <>
        {/* Mobile Image */}
        <img
          src={pastor.image}
          className="md:hidden lg:hidden w-full mb-2 "
          alt={pastor.name}
        />

        <SectionContainer id="ministries" bgColor="bg-white">
          {/* Desktop Image */}
          <img
            src={pastor.image}
            className="hidden md:block lg:block mb-2 aspect-auto max-h-[800px] w-full object-cover object-top drop-shadow-xl rounded-3xl"
            alt={pastor.name}
          />

          <p className="font-thin text-sm mr-2 text-right text-gray-400">
            {pastor.photo_description}
          </p>

          <h1 className="text-slate-500 font-light text-3xl sm:text-2xl">
            {pastor.name}
          </h1>
          <h2 className="text-slate-400 -mt-1 mb-5 text-xl font-normal">
            {pastor.position}
          </h2>

          {/* Contact Information */}
          <div className="pl-2 border-l-4 border-indigo-200 space-y-1">
            <p>{pastor.ph_no}</p>
            <p>{pastor.email}</p>
            {pastor.fb_link && (
              <a
                href={pastor.fb_link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Facebook Profile"
              >
                <img
                  src={fb_logo}
                  alt="Facebook"
                  className="w-8 grayscale hover:grayscale-0 transition-all duration-1000"
                />
              </a>
            )}
          </div>

          {/* Autobiography */}
          <p className="font-light text-md whitespace-pre-line mt-5">
            {pastor.autobiography}
          </p>

          {/* Favorite Scriptures */}
          {pastor.favorite_verse && (
            <p className="font-light text-md whitespace-pre-line">
              <br />
              <b>Favorite scriptures</b>
              <br />
              {pastor.favorite_verse}
            </p>
          )}
        </SectionContainer>
      </>
    </div>
  );
}
