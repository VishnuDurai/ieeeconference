import FooterContainer from '../../container/FooterContainer'
import {useState, useEffect} from 'react'
export default function About() {

    const announcements = [
        {
          title: "Call for Papers",
          date: "2024-11-15",
          text: "15th December 2024",
        },
        {
          title: "Paper Submission Deadline",
          date: "2025-04-30",
          text: "30th April 2025"
        },
        {
          title: "Paper Acceptance Notification",
          date: "2025-06-30",
          text: "30th June 2025"
        },
        {
          title: "Camera-ready Paper Submission Deadline",
          date: "2025-07-31",
          text: "31st July 2025"
        },
        {
          title: "Early Bird Registration Deadline",
          date: "2025-08-15",
          text: "15th August 2025"
        },
        {
          title: "Final Registration Deadline",
          date: "2025-09-30",
          text: "30th September 2025"
        },
        {
          title: "Late Fee Registration Deadline",
          date: "2025-10-10",
          text: "10th October 2025"
        },
        {
          title: "Pre-conference Tutorials Registration Deadline",
          date: "2025-11-15",
          text: "15th November 2025"
        },
        {
          title: "Conference Date",
          date: "2025-12-11 to 2025-12-13",
          text: "11th to 13th December 2025"
        },
      ];
    
      const [currentDate, setCurrentDate] = useState(new Date());
    
      useEffect(() => {
        const timer = setInterval(() => {
          setCurrentDate(new Date());
        }, 1000 * 60 * 60 * 24); 
    
        return () => clearInterval(timer);
      }, []);
    
    
  return (
    <div className=" absolute top-[600px] text-center lg:px-20 lg:py-5 sm:p-5 my-5  flex flex-col justify-center">
      <div>
        <p className=" text-xl lg:text-4xl font-semibold ">
          About the Conference
        </p>
      </div>
      <div className=" my-10 lg:px-20 px-5 text-justify text-md lg:text-xl ">
        <p className=' sm:leading-loose'>
          We are delighted to inform the upcoming International Conference on{" "}
          <span className=" font-semibold">
            Advances in Engineering and Computing Technologies for Sustainable
            Development (AECTSD 2025){" "}
          </span>{" "}
          is organized by the Department of Electrical and Electronics
          Engineering, Electronics and Communication Engineering, Electronics
          and Instrumentation, Biomedical Engineering, Computer Science
          Engineering and Information Technology of Sri Ramakrishna Engineering
          College, Coimbatore, Tamilnadu, India during{" "}
          <span className=" font-semibold"> 11th to 13th December 2025.</span>{" "}
          This technical co-sponsor for this conference is IEEE Madras Section.
          This interdisciplinary conference provides a dynamic platform for
          students, academicians, researchers, and industry professionals from
          around the globe to exchange ideas and collaborate, explore innovative
          solutions, present their latest research, and explore cutting-edge
          advancements across multiple fields of technology to facilitate the
          growth and prosperity of society as a whole. This interdisciplinary
          conference aims to foster collaboration and knowledge sharing across a
          diverse tracks from various domains such as Power and Energy, Embedded
          and Communication, Biomedical Engineering, Instrumentation and
          Control, Computational Intelligence, Big Data, Internet of Things and
          Security, and other related areas including core sciences and
          engineering. In addition to the technical sessions, there will be
          pre-conference tutorial and keynote addresses.
        </p>
      </div>

     {/* Timeline Starts */}
     <div className="flex justify-center flex-col gap-10 mb-20 items-center my-5">
        <h3 className="sm:text-4xl text-2xl text-gray-700 font-bold mb-6 ml-3">
          Important Dates
        </h3>

        <ol>
        {announcements.map((announcement, index) => {
      const eventDate = new Date(announcement.date);
      const isHighlighted = eventDate <= currentDate;
      let isDateHighlighted = isHighlighted;

      if (index === 0 && !isHighlighted && announcements.every((a, idx) => idx !== 0 && new Date(a.date) > currentDate)) {
        isDateHighlighted = true;
      }

      return (
        <li
          key={index}
          className={`border-l-2 ${
            isDateHighlighted ? "border-primary-blue" : "border-gray-300"
          }`}
        >
          <div className="md:flex flex-start">
            <div
              className={`${
                isDateHighlighted ? "bg-primary-blue" : "bg-gray-400"
              } w-6 h-6 flex items-center justify-center rounded-full -ml-3.5`}
            >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fast"
                      className="text-white w-3 h-3"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="currentColor"
                        d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"
                      ></path>
                    </svg>
                  </div>
                  <div className={` ${isDateHighlighted ? "bg-primary-blue text-white" : "bg-gray-100 text-black"}  "block p-6 rounded-lg shadow-lg my-10  w-60 transition-transform hover:scale-105 cursor-pointer sm:w-[400px] ml-6 mb-10"`}>
                    <div className="flex flex-col gap-1">
                      <span className="font-medium sm:text-xl">
                        {announcement.title}
                      </span>
                      <span className={` ${isDateHighlighted ? " text-white" : " text-gray-600"}  font-medium text-sm sm:text-md`}>
                        {announcement.text}
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
      {/* Timeline Ends */}

      <FooterContainer />
    </div>
  );
}
