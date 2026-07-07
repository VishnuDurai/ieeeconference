import SREC from "../../assets/srec.jpg";
import { useState, useEffect } from "react";

// Move announcements outside the component
const announcements = [
  {
    title: "📢 Call for Papers!",
    notice:
      "Mark your calendars: The Call for Papers for AECTSD 2027 opens on 15th December 2026. Start preparing your submissions today!",
    date: "2026-12-15",
  },
  {
    title: "⏳ Submit Your Papers Now!",
    notice:
      "The Paper Submission Deadline for AECTSD 2027 is 30th April 2027. Don’t miss this opportunity to contribute to the future of sustainable development!",
    date: "2027-04-30",
  },
  {
    title: "✉️ Paper Acceptance Notification",
    notice:
      "Notifications of accepted papers will be sent out by 30th June 2027. Keep an eye on your inbox!",
    date: "2027-06-30",
  },
  {
    title: "🖊️ Camera-ready Paper Submission Deadline",
    notice:
      "Finalize your accepted papers! The Camera-ready Submission Deadline is 31st July 2027. Ensure your paper is polished and ready for publication.",
    date: "2027-07-31",
  },
  {
    title: "🐦 Early Bird Registration is Open!",
    notice:
      "Enjoy discounted rates by registering before the Early Bird Deadline on 15th August 2027. Don’t miss out!",
    date: "2027-08-15",
  },
  {
    title: "🕒 Final Registration Deadline Approaching!",
    notice:
      "Secure your spot! The Final Registration Deadline is 30th September 2027. Act now to avoid late fees.",
    date: "2027-09-30",
  },
  {
    title: "⏰ Late Fee Registration Deadline",
    notice:
      "Late registration is available until 10th October 2027, but don’t wait too long to register!",
    date: "2027-10-10",
  },
  {
    title: "🎓 Pre-conference Tutorials Registration Open!",
    notice:
      "Register for Pre-conference Tutorials by 15th November 2027. Expand your knowledge and skills before the main event!",
    date: "2027-11-15",
  },
  {
    title: "📅 Save the Date!",
    notice:
      "Join us for the AECTSD 2027 Conference on 17th and 18th December 2027. Let’s innovate and collaborate for a sustainable future!",
    date: "2027-12-17",
  },
];

export default function Hero() {
  const [currentAnnouncement, setCurrentAnnouncement] = useState(null);

  useEffect(() => {
    const currentDate = new Date();

    const upcomingAnnouncement = announcements.find(
      (announcement) => new Date(announcement.date) >= currentDate
    );

    setCurrentAnnouncement(upcomingAnnouncement);
  }, []);

  return (
    <section className="relative">
      <img
        className="w-screen h-[600px] -z-20 object-cover absolute top-0 left-0"
        src={SREC}
        alt="SREC"
      />

      <div className="absolute top-0 -z-10 left-0 w-full h-[600px]"></div>

      {currentAnnouncement && (
        <div className="absolute top-24 mt-1 sm:top-20 sm:mt-2 lg:top-20 xl:top-20 2xl:top-28 lg:mt-1 2xl:mt-0 w-full text-white bg-black opacity-80 py-2 text-lg font-semibold overflow-hidden">
          <div className="animate-marquee whitespace-nowrap">
            <span className="mx-8">{currentAnnouncement.title}</span>

            <span className="mx-8">
              {currentAnnouncement.notice}
            </span>

            <span className="mx-20">
              All accepted and presented papers of AECTSD 2027 will be
              submitted for possible publication in the IEEE Xplore® Digital
              Library.
            </span>
          </div>
        </div>
      )}

      <div className="absolute inset-0 mt-80 sm:mt-96 flex justify-center items-center cursor-pointer transition-shadow hover:shadow-inner">
        <div className="p-4 mt-20 sm:mt-0 sm:p-8 rounded-lg text-center bg-gray-500 bg-opacity-30 backdrop-blur-xs text-white max-w-xl md:max-w-3xl xl:max-w-7xl mx-4">
          <p
            className="text-xl sm:text-2xl font-bold md:text-4xl mb-4"
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,1)" }}
          >
            Welcome to ICAECTSD 2027
          </p>

          <p
            className="text-xl sm:text-2xl font-bold mb-4"
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,1)" }}
          >
            Second IEEE International Conference On
          </p>

          <h1
            className="text-xl sm:text-2xl font-bold mb-4"
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,1)" }}
          >
            Advances in Engineering and Computing Technologies for Sustainable
            Development (ICAECTSD) 2027
          </h1>

          <p
            className="text-md md:text-xl font-semibold"
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,1)" }}
          >
            17th and 18th December 2027
          </p>

          {/* Replace with your brochure PDF link when available */}
          <button
            type="button"
            className="mt-5 sm:text-lg font-semibold bg-primary-blue px-4 sm:px-7 py-2 sm:py-3 rounded-md cursor-pointer"
          >
            Download Brochure
          </button>
        </div>
      </div>
    </section>
  );
}