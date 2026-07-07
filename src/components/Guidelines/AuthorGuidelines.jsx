import { useState, useEffect } from "react";
import Footer from "../../components/Footer";

export default function AuthorGuidelines() {
  const announcements = [
    {
      title: "Call for Papers",
      date: "2026-11-15",
      text: "15th December 2026",
    },
    {
      title: "Paper Submission Deadline",
      date: "2027-04-30",
      text: "30th April 2027",
    },
    {
      title: "Paper Acceptance Notification",
      date: "2027-06-30",
      text: "30th June 2027",
    },
    {
      title: "Camera-ready Paper Submission Deadline",
      date: "2027-07-31",
      text: "31st July 2027",
    },
    {
      title: "Early Bird Registration Deadline",
      date: "2027-08-15",
      text: "15th August 2027",
    },
    {
      title: "Final Registration Deadline",
      date: "2027-09-30",
      text: "30th September 2027",
    },
    {
      title: "Late Fee Registration Deadline",
      date: "2027-10-10",
      text: "10th October 2027",
    },
    {
      title: "Pre-conference Tutorials Registration",
      date: "2027-11-15",
      text: "15th November 2027",
    },
    {
      title: "Conference Date",
      date: "2025-12-17 and 2025-12-18",
      text: "17th and 18th December 2027",
    },
  ];

  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000 * 60 * 60 * 24); // Update every 24 hours
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="bg-gray-50 min-h-screen ">
      <h1 className="text-2xl sm:text-4xl uppercase font-bold text-gray-800 pt-10 mb-5 text-center">
        Guidelines for Authors
      </h1>
      <div className="xl:flex xl:justify-around px-5 py-5 gap-10">
        {/* Important Dates Section */}
        <div className="flex flex-col items-center my-10 xl:w-1/3">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-6">
            Important Dates
          </h2>
          <ol className="space-y-0">
            {announcements.map((announcement, index) => {
              const eventDate = new Date(announcement.date);
              const isHighlighted = eventDate <= currentDate;

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

        {/* Instructions Section */}
        <div className="xl:w-2/3">
          <div className="bg-white shadow-lg rounded-lg p-6">
            {/* Instructions */}
            <section className="mb-10">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">
                Instructions:
              </h2>
              <ol className="list-decimal pl-6 space-y-4">
                <li>
                  The maximum length of the paper for review is 6 pages,
                  including figures, tables, and references. The maximum file
                  size allowed is 10 MB in PDF format without encryption and/or
                  passwords.
                </li>
                <li>
                  Papers of poor quality and/or high similarity index will be
                  rejected during the initial screening process without review.
                </li>
                <li>
                  Use only the{" "}
                  <a
                    href="https://www.ieee.org/conferences/publishing/templates.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    IEEE standard two-column conference paper Microsoft Word
                    template
                  </a>
                  .
                </li>
                <li>
                  The paper will be peer-reviewed by domain experts of the
                  respective tracks.
                </li>
                <li>
                  Authors should submit the papers through Microsoft Conference
                  Management Toolkit (CMT).
                </li>
                <li>
                  Kindly do not submit the paper multiple times, as it may lead
                  to the cancellation of your paper.
                </li>
              </ol>
            </section>

            {/* Procedure */}
            <section className="mb-10">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">
                Procedure for Uploading Papers:
              </h2>
              <ol className="list-decimal pl-6 space-y-3 text-sm sm:text-base md:space-y-4">
                <li>
                  Go to the paper submission website:{" "}
                  <a
                    href="https://cmt3.research.microsoft.com/aectsd2025"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline break-words"
                  >
                    https://cmt3.research.microsoft.com/aectsd2025
                  </a>
                  .
                </li>
                <li>
                  If you are new to the system, please choose "Register" at the
                  bottom of the dialog box. Create a new account with a user ID
                  and Password.
                </li>
                <li>Log in to CMT with your user ID and Password.</li>
                <li>Select "All Conferences" and choose the conference.</li>
                <li>Click the Conference Name link.</li>
                <li>
                  On the Author Console page, click + Create new submission.
                </li>
                <li>
                  Fill out the required fields, including the title, abstract,
                  authors, subject areas, and email IDs of all the co-authors.
                </li>
                <li>Upload your paper and other files (if needed).</li>
                <li>Click “Submit” to submit your paper.</li>
              </ol>
            </section>

            {/* Camera-ready Submission */}
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">
                Submitting Camera-Ready Version:
              </h2>
              <ol className="list-decimal pl-6 space-y-4">
                <li>Go to the Author Console in CMT.</li>
                <li>
                  Click the{" "}
                  <span className="font-semibold">
                    Create Camera Ready Submission
                  </span>{" "}
                  link.
                </li>
                <li>Edit the title, abstract, and author information.</li>
                <li>Upload the camera-ready file.</li>
                <li>Answer any additional questions.</li>
                <li>Click “Submit” to submit your paper.</li>
              </ol>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
