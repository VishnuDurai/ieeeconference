import Footer from "../../components/Footer";
export default function Contact() {
  return (
    <main>
      <div className=" min-h-screen p-8 md:p-16 mx-auto max-w-xl items-center flex flex-col justify-center">
        <p className="text-2xl sm:text-4xl text-center font-bold uppercase mb-8">
          Contact US
        </p>

        {/* Organizer 1 */}
        <div className="bg-white w-fit shadow-lg rounded-lg p-6 mb-8">
          <p className="text-xl font-semibold text-center mb-4">
            Dr. R. Shanmugasundaram
          </p>
          <p className="text-center text-gray-700 font-medium mb-2">
            Organizing Secretary, ICAECTSD 2025
          </p>
          <p className="text-center text-gray-700 font-medium mb-2">
            Professor, Dept. of EEE
          </p>
          <div className="text-center mb-4">
            <p className="text-gray-700">
              <span className="font-semibold">E-mail: </span>
              <a
                href="mailto:rsseee@srec.ac.in"
                className="text-blue-600 hover:underline"
              >
                rsseee@srec.ac.in
              </a>
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Mobile: </span>
              +91 9894064807
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Conference E-mail: </span>
              <a
                href="mailto:ieee-aectsd@srec.ac.in"
                className="text-blue-600 hover:underline"
              >
                ieee-aectsd@srec.ac.in
              </a>
            </p>
          </div>
        </div>

        {/* Organizer 2 */}
        <div className="bg-white w-fit shadow-lg rounded-lg p-6">
          <p className="text-xl font-semibold text-center mb-4">
            Dr. K. Balamurugan
          </p>
          <p className="text-center text-gray-700 font-medium mb-2">
            Joint-Organizing Secretary, ICAECTSD 2025
          </p>
          <p className="text-center text-gray-700 font-medium mb-2">
            Associate Professor, Dept. of EEE
          </p>
          <div className="text-center mb-4">
            <p className="text-gray-700">
              <span className="font-semibold">E-mail: </span>
              <a
                href="mailto:balamurugan.kaliappan@srec.ac.in"
                className="text-blue-600 hover:underline"
              >
                balamurugan.kaliappan@srec.ac.in
              </a>
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Mobile: </span>
              +91 9894548074
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
