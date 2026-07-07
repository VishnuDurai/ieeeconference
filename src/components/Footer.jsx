import College from "../assets/SRECLogo New Updated.png";

export default function Footer() {
  return (
    <footer className="bg-primary-blue w-full sm:w-full  text-white text-center absolute  mt-20 py-4">
      <div className=" flex justify-center gap-3 lg:gap-10 sm:flex-row flex-col items-center">
        <div className=" flex gap-10 justify-center  items-center">
          <img
            className="w-[180px] h-auto object-contain brightness-0 invert"
            src={College}
            alt="SREC Logo"
          />
        </div>
        <p className=" font-semibold lg:text-xl">
          &copy; 2027 AECTSD, Sri Ramakrishna Engineering College. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
