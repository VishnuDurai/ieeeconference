import { useState } from "react";
import College from '../assets/SRECLogo New Updated.png'
import { useLocation } from "react-router-dom";

export default function NewNavbar() {
  const location = useLocation();

  function isActive(path) {
    return location.pathname === path;
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCommitteeOpen, setIsCommitteeOpen] = useState(false);
  const [isVenueOpen, setIsVenueOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((prevState) => !prevState);
  }

  function toggleCommittee() {
    setIsCommitteeOpen((prevState) => !prevState);
  }

  function toggleVenue() {
    setIsVenueOpen((prevState) => !prevState);
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow-md">
      <nav className="bg-primary-blue text-white w-full px-5 sm:px-10 py-4 flex justify-between items-center relative">
        <div
          onClick={() => (window.location.href = '/')}
          className="flex items-center gap-5 cursor-pointer select-none"
        >
          <img
            className="w-[100px] h-auto object-contain brightness-0 invert"
            src={College}
            alt="SREC Logo"
          />
        </div>

        <div
          onClick={toggleMenu}
          className="text-3xl sm:text-4xl cursor-pointer text-white flex items-center hover:opacity-80 transition-opacity"
        >
          <ion-icon name={isMenuOpen ? 'close-outline' : 'menu-outline'}></ion-icon>
        </div>

        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-slate-900 border-t border-slate-800 shadow-2xl z-40 py-6 px-10">
            <ul className="flex flex-col md:flex-row md:flex-wrap md:justify-center md:items-center gap-6 text-lg font-medium text-gray-200">
              <a href="/">
                <li
                  className={`${isActive("/") ? "font-semibold underline underline-offset-8 text-white" : ""} hover:cursor-pointer hover:underline hover:underline-offset-8 hover:text-white duration-300`}
                >
                  Home
                </li>
              </a>
              <a href="/about">
                <li
                  className={`${isActive("/about") ? "font-semibold underline underline-offset-8 text-white" : ""} hover:cursor-pointer hover:underline hover:underline-offset-8 hover:text-white duration-300`}
                >
                  About Us
                </li>
              </a>
              <div className="relative">
                <li
                  className={`${isActive("/committee/organizing") || isActive("/committee/steering") || isActive("/committee/advisory") ? "font-semibold underline underline-offset-8 text-white" : ""} hover:cursor-pointer hover:underline hover:underline-offset-8 hover:text-white duration-300`}
                  onClick={toggleCommittee}
                >
                  Committee
                </li>
                {isCommitteeOpen && (
                  <ul className="absolute bg-slate-800 border border-slate-700 rounded-md shadow-lg mt-2 w-60 flex flex-col gap-2 p-3 z-50">
                    <a href="/committee/organizing">
                      <li className="hover:cursor-pointer hover:text-white text-md text-gray-300">
                        Organizing Committee
                      </li>
                    </a>
                    <a href="/committee/steering">
                      <li className="hover:cursor-pointer hover:text-white text-md text-gray-300">
                        Steering Committee
                      </li>
                    </a>
                    <a href="/committee/advisory">
                      <li className="hover:cursor-pointer hover:text-white text-md text-gray-300">
                        Advisory Committee
                      </li>
                    </a>
                  </ul>
                )}
              </div>
              <a href="/author">
                <li
                  className={`${isActive("/author") ? "font-semibold underline underline-offset-8 text-white" : ""} hover:cursor-pointer hover:underline hover:underline-offset-8 hover:text-white duration-300`}
                >
                  Authors
                </li>
              </a>
              <a href="/register">
                <li
                  className={`${isActive("/register") ? "font-semibold underline underline-offset-8 text-white" : ""} hover:cursor-pointer hover:underline hover:underline-offset-8 hover:text-white duration-300`}
                >
                  Registration
                </li>
              </a>
              <a href="/call">
                <li
                  className={`${isActive("/call") ? "font-semibold underline underline-offset-8 text-white" : ""} hover:cursor-pointer hover:underline hover:underline-offset-8 hover:text-white duration-300`}
                >
                  Call for Papers
                </li>
              </a>
              <a href="/speakers">
                <li
                  className={`${isActive("/speakers") ? "font-semibold underline underline-offset-8 text-white" : ""} hover:cursor-pointer hover:underline hover:underline-offset-8 hover:text-white duration-300`}
                >
                  Speakers
                </li>
              </a>
              <div className="relative">
                <li
                  className={`${isActive("/venue/") || isActive("/venue/tourism") || isActive("/venue/hotels") ? "font-semibold underline underline-offset-8 text-white" : ""} hover:cursor-pointer hover:underline hover:underline-offset-8 hover:text-white duration-300`}
                  onClick={toggleVenue}
                >
                  Venue
                </li>
                {isVenueOpen && (
                  <ul className="absolute bg-slate-800 border border-slate-700 rounded-md shadow-lg mt-2 flex flex-col w-44 gap-2 p-3 z-50">
                    <a href="/venue/">
                      <li className="hover:cursor-pointer hover:text-white text-md text-gray-300">
                        Venue
                      </li>
                    </a>
                    <a href="/venue/tourism">
                      <li className="hover:cursor-pointer hover:text-white text-md text-gray-300">
                        Tourist Places
                      </li>
                    </a>
                    <a href="/venue/hotels">
                      <li className="hover:cursor-pointer hover:text-white text-md text-gray-300">
                        Hotels to Stay
                      </li>
                    </a>
                  </ul>
                )}
              </div>
              <a href="/contact">
                <li
                  className={`${isActive("/contact") ? "font-semibold underline underline-offset-8 text-white" : ""} hover:cursor-pointer hover:underline hover:underline-offset-8 hover:text-white duration-300`}
                >
                  Contact
                </li>
              </a>
            </ul>
          </div>
        )}
      </nav>

      {/* Marquee scrolling line */}

    </header>
  );
}
