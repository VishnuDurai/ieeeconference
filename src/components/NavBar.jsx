import { useState } from "react";
import Logo from "../assets/SRECLogo New Updated.png";
import TrustLogo from "../assets/logo2.png";
import { useLocation } from 'react-router-dom'

export default function NavBar() {
  const location = useLocation()

  function isActive(path) {
    if (location.pathname === path)
      return true
  }
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function menu() {
    setIsMenuOpen((prevState) => !prevState);
  }

  return (
    <section>


      <nav className="sm:p-10 p-3 flex justify-between bg-slate-100">
        <div className="flex justify-between  sm:gap-0">
          <div className="flex sm:flex-row xl:w-full md:w-3/4 flex-col gap-5 xl:gap-10">
            <div className="flex gap-5 items-center">
              <img className="w-50 md:w-50 h-auto  rounded-md object-contain" src={Logo} alt="Logo" />
              <img className="w-50 md:w-50 h-auto rounded-md object-contain" src={TrustLogo} alt="Trust Logo" />
            </div>
            <div className={` ${isMenuOpen ? "block" : "block"} sm:block sm:w-4/5`}>
              <p className=" 2xl:text-4xl lg:text-3xl sm:text-xl  text-md font-bold">
                Second International Conference of Advances in Engineering and
                Computing Technologies for sustainable Development (AECTSD) 2027
              </p>
              <p className="font-semibold sm:text-2xl">17 and 18th December, 2027</p>
            </div>
          </div>
          {/* Mobile menu toggle button */}
          <div onClick={menu} className=" block text-3xl sm:text-5xl cursor-pointer ">
            <ion-icon name={isMenuOpen ? "close-outline" : "menu-outline"}></ion-icon>
          </div>
        </div>
      </nav>
      {/* Menu Items */}
      <div className="  ">
        <ul
          className={`${isMenuOpen ? "sm:top-[150px] top-[90px] opacity-100 z-10 " : "hidden top-[-400px] opacity-0"
            } absolute w-full xl:pl-20 left-0 transition-all ease-in-out duration-500 pl-10 opacity-0 py-10 bg-slate-100 xl:static z-auto flex   xl:gap-20 xl:px-0 px-10 sm:flex-row sm:gap-20  flex-col gap-3 2xl:text-lg text-md text-black `}
        >
          <div className=" flex flex-col gap-6">

            <a href="/">
              <li className={` ${isActive("/") ? "text-primary-blue font-bold" : ""} hover:text-primary-blue hover:cursor-pointer hover:underline hover:font-bold duration-500`}>
                Home
              </li>
            </a>
            <a href="/">
              <li className={` ${isActive("/about") ? "text-primary-blue font-bold" : ""} hover:text-primary-blue hover:cursor-pointer hover:underline hover:font-bold duration-500`}>
                About Us
              </li>
            </a>
            <a href="/">
              <li className={` ${isActive("/committee") ? "text-primary-blue font-bold" : ""} hover:text-primary-blue hover:cursor-pointer hover:underline hover:font-bold duration-500`}>
                Committee
              </li>
            </a>
            <a href="/">
              <li className={` ${isActive("/authors") ? "text-primary-blue font-bold" : ""} hover:text-primary-blue hover:cursor-pointer hover:underline hover:font-bold duration-500`}>
                Authors
              </li>
            </a>
            <a href="/">
              <li className={` ${isActive("/register") ? "text-primary-blue font-bold" : ""} hover:text-primary-blue hover:cursor-pointer hover:underline hover:font-bold duration-500`}>
                Registration
              </li>
            </a>
          </div>
          <div className=" flex flex-col gap-6 mt-3">

            <a href="/">
              <li className={` ${isActive("/callforpapers") ? "text-primary-blue font-bold" : ""} hover:text-primary-blue hover:cursor-pointer hover:underline hover:font-bold duration-500`}>
                Call for Papers
              </li>
            </a>
            <a href="/">
              <li className={` ${isActive("/speakers") ? "text-primary-blue font-bold" : ""} hover:text-primary-blue hover:cursor-pointer hover:underline hover:font-bold duration-500`}>
                Speakers
              </li>
            </a>
            <a href="/">
              <li className={` ${isActive("/venue") ? "text-primary-blue font-bold" : ""} hover:text-primary-blue hover:cursor-pointer hover:underline hover:font-bold duration-500`}>
                Venue
              </li>
            </a>
            <a href="/">
              <li className={` ${isActive("/contact") ? "text-primary-blue font-bold" : ""} hover:text-primary-blue hover:cursor-pointer hover:underline hover:font-bold duration-500`}>
                Contact
              </li>
            </a>
          </div>
        </ul>
      </div>

    </section>
  );
}
