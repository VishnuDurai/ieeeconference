import React, { useState, useEffect } from "react";
import TracksList from "../components/Call for Papers/TracksList";
import Footer from '../components/Footer';

const tracksData = [
  {
    title: "TRACK 1",
    description:
      "Power and Energy Systems",
    items: [
      ["Power System Operation and Control", "Advanced Transmission and Distribution Systems", "Smart Grids and Micro Grids", "Renewable Energy Systems", "Electrical Machinery and Control"],
      ["Electric Vehicles", "Emerging Power Electronics Converters", "Energy Storage Systems", "AI/ML Applications in Electrical Engineering", "Sustainable Energy Systems"],
    ],
  },
  {
    title: "TRACK 2",
    description:
      "Emerging Embedded and Communication Systems",
    items: [
      ["Microelectronics", "Semiconductor Devices", "Circuits and Systems", "Embedded Systems", "VLSI Design", "5G/6G Technology", "Communication Protocols and Networks", "Green and Sustainable Communication Systems"],
      ["Signal", "Speech and Image Processing", "RF, Microwaves & Optical Communication", "Digital Communication Technologies and Systems", "Sensor Networks & IoT", "Embedded AI"],
    ],
  },
  {
    title: "TRACK 3",
    description:
      "Instrumentation and Control Systems",
    items: [
      ["Smart Instrumentation and Control Systems", "AI and Machine Learning in Control and Instrumentation Applications", "Process Control", "Instrumentation Systems", "DCS and SCADA", "Automation and Industrial Control"],
      ["CAN", "Sensors and Actuators", "Cyber-Physical Systems and Industrial IoT", "Robotics and Autonomous Systems", "Measurement Techniques and Metrology", "Wearable and Portable Sensing Devices", "Quantum Sensors and Measurement Technologies"],
    ],
  },
  {
    title: "TRACK 4",
    description:
      "Biomedical Engineering and Sciences",
    items: [
      ["Disruptive technologies in healthcare - AI/ML", "Micro/Nano Bio-engineering", "Biomedical Instrumentation and Devices", "Biosensors/ Micro/Nano and Wearable Technologies", "Biomedical Imaging and Image Processing", "Biomedical and Health Informatics"],
      ["IoT in Healthcare", "Diagnostic", "Therapeutic and Rehabilitation Engineering", "Big Data Analytics in Healthcare", "Telemedicine and Remote Healthcare", "Smart Implants and Biocompatible Devices", "Bio-photonics and Optical Technologies"],
    ],
  },
  {
    title: "TRACK 5",
    description:
      "Emerging Computing Technologies and Computational Intelligence",
    items: [
      ["Artificial Intelligence", "Machine Learning", "Generative AI", "Computational Intelligence Techniques"],
      ["High-Performance and Parallel Computing", "Edge, IoT, and Cyber-Physical Systems", "Ethics and Societal Impact of AI", "Intelligent Software and Systems"],
    ],
  },
  {
    title: "TRACK 6",
    description:
      "Transformative Technologies in Big Data, Internet of Things and Security",
    items: [
      ["Predictive Modeling", "Business Intelligence and Real-Time Analytics", "AI-Driven Automation", "Edge Computing", "Cloud Computing"],
      ["IoT Security", "Cybersecurity", "Ethical Hacking and Threat Intelligence", "Data Science and Big Data Analytics", "AI and Big Data Integration", "Blockchain Technologies"],
    ],
  },

];

export default function CallforPaper() {
  const announcements = [
    { title: "Call for Papers", date: "2026-12-15", text: "15th December 2026" },
    { title: "Paper Submission Deadline", date: "2027-04-30", text: "30th April 2027" },
    { title: "Paper Acceptance Notification", date: "2027-06-30", text: "30th June 2027" },
    { title: "Camera-ready Paper Submission Deadline", date: "2027-07-31", text: "31st July 2027" },
    { title: "Early Bird Registration Deadline", date: "2027-08-15", text: "15th August 2027" },
    { title: "Final Registration Deadline", date: "2027-09-30", text: "30th September 2027" },
    { title: "Late Fee Registration Deadline", date: "2027-10-10", text: "10th October 2027" },
    { title: "Pre-conference Tutorials Registration", date: "2027-11-15", text: "15th November 2027" },
    { title: "Conference Date", date: "2027-12-17 to 2027-12-18", text: "17th to 18th December 2027" },
  ];

  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000 * 60 * 60 * 24);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="mt-28">
      {/* Flex container to hold TracksList and Important Dates side by side */}
      <div className="flex flex-col xl:flex-row justify-between gap-10 items-start">
        {/* Tracks List */}
        <div className="flex-1 flex justify-center items-center place-self-center">
          <TracksList tracks={tracksData} />
        </div>


        {/* Important Dates */}
        <div className="flex flex-col items-center my-10 xl:w-1/3">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-6">
            Important Dates
          </h2>
          <ol className="space-y-0 ml-4 sm:ml-8 md:ml-14 xl:ml-0 mx-auto max-w-3xl">
            {announcements.map((announcement, index) => {
              const eventDate = new Date(announcement.date);
              const isHighlighted = eventDate <= currentDate;
              let isDateHighlighted = isHighlighted;

              if (
                index === 0 &&
                !isHighlighted &&
                announcements.every(
                  (a, idx) => idx !== 0 && new Date(a.date) > currentDate
                )
              ) {
                isDateHighlighted = true;
              }

              return (
                <li
                  key={index}
                  className={`border-l-4 ${isHighlighted ? "border-blue-500" : "border-gray-300"
                    } pl-4 py-3 `}
                >
                  <div className="flex items-center">
                    <div
                      className={`${isHighlighted ? "bg-blue-500" : "bg-gray-400"
                        } w-6 h-6 rounded-full flex items-center justify-center  -ml-8`}
                    >
                      <span className="text-white font-bold text-[8px]">✔</span>
                    </div>
                    <div className="ml-6">
                      <h3
                        className={`text-lg ${isHighlighted ? "text-blue-500" : "text-gray-700"
                          } font-semibold`}
                      >
                        {announcement.title}
                      </h3>
                      <p
                        className={`${isHighlighted ? "text-blue-400" : "text-gray-500"
                          } font-medium`}
                      >
                        {announcement.text}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>

      <Footer />
    </main>
  );
}