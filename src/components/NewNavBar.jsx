import { useState } from "react";
import Logo from "../assets/logo2.png";
import College from '../assets/clg.png'
// import Logo from '../../public/assets/logo.jpg'
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
    <nav className="fixed top-0 z-50 bg-primary-blue text-white w-full xl:opacity-90 px-5 sm:px-10 py-4 backdrop-blur-3xl flex justify-between xl:flex-row flex-col">
  <div className="flex justify-between">
    <div
      onClick={() => (window.location.href = '/')}
      className="flex flex-row xl:w-full md:w-3/4 gap-3 cursor-pointer xl:gap-5"
    >
      <div className=" flex gap-3 flex-col sm:flex-row mt-2 sm:mt-0">
      <img
        className="w-12 sm:w-16 xl:w-16 2xl:w-24 items-center align-baseline justify-center place-self-center sm:h-fit"
        src={Logo}
        alt="IEEE Logo"
        />
      <img
        className="w-12 sm:w-16 xl:w-16 2xl:w-24 items-center align-baseline justify-center place-self-center sm:h-fit"
        src={College}
        alt="College Logo"
        />
        </div>
      <div className={`${isMenuOpen ? 'block' : 'block'} sm:block sm:w-full ml-5 sm:ml-10 2xl:ml-16 2xl:mt-5`}>
        <p className=" sm:text-lg text-md font-bold">Sri Ramakrishna Engineering College</p>
        <p className="font-semibold sm:text-base">Coimbatore</p>
      </div>
    </div>

    <div
      onClick={toggleMenu}
      className="block xl:hidden text-3xl sm:text-5xl cursor-pointer"
    >
      <ion-icon name={isMenuOpen ? 'close-outline' : 'menu-outline'}></ion-icon>
    </div>
  </div>



      <div className="lg:block">
        <ul
          className={`${
            isMenuOpen
              ? "sm:top-[60px] top-[50px] left-0 opacity-100 z-50"
              : "hidden xl:flex top-[-400px] xl:opacity-100 opacity-0"
          } flex 2xl:text-lg xl:text-xs mt-5 xl:flex-row flex-col absolute xl:static transition-all ease-in-out duration-500 w-full bg-primary-blue xl:bg-transparent pl-10 xl:pl-0 py-10 xl:py-0`}
        >
          <div className="flex xl:flex-row flex-col gap-7">
            <a href="/">
              <li
                className={`${
                  isActive("/") ? "  font-semibold underline underline-offset-8" : ""
                }  hover:cursor-pointer hover:underline hover:underline-offset-8 hover:font-bold duration-500 font-medium`}
              >
                Home
              </li>
            </a>
            <a href="/about">
              <li
                className={`${
                  isActive("/about") ? " font-semibold underline underline-offset-8" : ""
                } hover: hover:cursor-pointer hover:underline hover:underline-offset-8 hover:font-bold duration-500 font-medium`}
              >
                About Us
              </li>
            </a>
            <div className="relative">
              <li
                className={`${
                  isActive("/committee/organizing") || isActive("/committee/steering") || isActive("/committee/advisory") ? " font-semibold underline underline-offset-8" : ""
                } hover: hover:cursor-pointer hover:underline hover:underline-offset-8 hover:font-bold duration-500 font-medium`}
                onClick={toggleCommittee}
              >
                Committee
              </li>
              {isCommitteeOpen && (
                <ul className="absolute bg-primary-blue rounded-md shadow-lg mt-2 w-60 flex flex-col gap-2 p-3">
                  <a href="/committee/organizing">
                    <li className="hover: hover:cursor-pointer hover:font-bold text-lg">
                      Organizing Committee
                    </li>
                  </a>
                  <a href="/committee/steering">
                    <li className="hover: hover:cursor-pointer hover:font-bold text-lg">
                      Steering Committee
                    </li>
                  </a>
                  <a href="/committee/advisory">
                    <li className="hover: hover:cursor-pointer hover:font-bold text-lg">
                      Advisory Committee
                    </li>
                  </a>
                </ul>
              )}
            </div>
            <a href="/author">
              <li
                className={`${
                  isActive("/author") ? " font-semibold underline underline-offset-8" : ""
                } hover: hover:cursor-pointer hover:underline hover:underline-offset-8 hover:font-bold duration-500 font-medium`}
              >
                Authors
              </li>
            </a>
            <a href="/register">
              <li
                className={`${
                  isActive("/register") ? " font-semibold underline underline-offset-8" : ""
                } hover: hover:cursor-pointer hover:underline hover:underline-offset-8 hover:font-bold duration-500 font-medium`}
              >
                Registration
              </li>
            </a>
          </div>
          <div className="flex xl:flex-row flex-col gap-7 mt-5 xl:mt-0 xl:ml-5">
            <a href="/call">
              <li
                className={`${
                  isActive("/call") ? " font-semibold underline underline-offset-8" : ""
                } hover: hover:cursor-pointer hover:underline hover:underline-offset-8 hover:font-bold duration-500 font-medium`}
              >
                Call for Papers
              </li>
            </a>
            <a href="/speakers">
              <li
                className={`${
                  isActive("/speakers") ? " font-semibold underline underline-offset-8" : ""
                } hover: hover:cursor-pointer hover:underline hover:underline-offset-8 hover:font-bold duration-500 font-medium`}
              >
                Speakers
              </li>
            </a>
            <div className="relative">
              <li
                className={`${
                  isActive("/venue/") ||  isActive("/venue/tourism") ||  isActive("/venue/hotels") ? " font-semibold underline underline-offset-8" : ""
                } hover: hover:cursor-pointer hover:underline hover:underline-offset-8 hover:font-bold duration-500 font-medium`}
                onClick={toggleVenue}
              >
                Venue
              </li>
              {isVenueOpen && (
                <ul className="absolute bg-primary-blue rounded-md shadow-lg mt-2 flex flex-col w-44 gap-2 p-3">
                  <a href="/venue/">
                    <li className="hover: hover:cursor-pointer hover:font-bold">
                      Venue
                    </li>
                  </a>
                  <a href="/venue/tourism">
                    <li className="hover: hover:cursor-pointer hover:font-bold">
                      Tourist Places
                    </li>
                  </a>
                  <a href="/venue/hotels">
                    <li className="hover: hover:cursor-pointer hover:font-bold">
                      Hotels to Stay
                    </li>
                  </a>
                </ul>
              )}
            </div>
            <a href="/contact">
              <li
                className={`${
                  isActive("/contact") ? " font-semibold underline underline-offset-8" : ""
                } hover: hover:cursor-pointer hover:underline hover:underline-offset-8 hover:font-bold duration-500 font-medium`}
              >
                Contact
              </li>
            </a>
          </div>
        </ul>
      </div>
    </nav>
  );
}
