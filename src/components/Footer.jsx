import College from "../assets/clg.png";
import Logo from "../assets/logo2.png";

export default function Footer() {
  return (
    <footer className="bg-primary-blue w-full sm:w-full  text-white text-center absolute  mt-20 py-4">
      <div className=" flex justify-center gap-3 lg:gap-10 sm:flex-row flex-col items-center">
        <div className=" flex gap-10 justify-center  items-center">
          <img
            className=" w-20 xl:w-28 object-contain"
            src={College}
            alt="College Logo"
          />
          <img
            className=" w-20 xl:w-28 sm:hidden  object-contain"
            src={Logo}
            alt="IEEE Logo"
          />
        </div>
        <p className=" font-semibold lg:text-xl">
          &copy; 2025 AECTSD, Sri Ramakrishna Engineering College. All rights
          reserved.
        </p>
        <img
          className=" w-20 xl:w-28 object-contain hidden sm:block"
          src={Logo}
          alt="IEEE Logo"
        />
      </div>
    </footer>
  );
}
