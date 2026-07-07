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
            Dr. V. Karpagam
          </p>
          <p className="text-center text-gray-700 font-medium mb-2">
            Organizing Secretary, ICAECTSD 2027
          </p>
          <p className="text-center text-gray-700 font-medium mb-2">
            Professor & Head, Dept. of AI&DS
          </p>
          <div className="text-center mb-4">
            <p className="text-gray-700">
              <span className="font-semibold">E-mail: </span>
              <a
                href="mailto:karpagam.vilvanathan@srec.ac.in"
                className="text-blue-600 hover:underline"
              >
                karpagam.vilvanathan@srec.ac.in
              </a>
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Mobile: </span>
              +91 9842073310
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Conference E-mail: </span>
              <a
                href="mailto:aectsd2027@srec.ac.in"
                className="text-blue-600 hover:underline"
              >
                aectsd2027@srec.ac.in
              </a>
            </p>
          </div>
        </div>

        {/* Organizer 2 */}
        <div className="bg-white w-fit shadow-lg rounded-lg p-6">
          <p className="text-xl font-semibold text-center mb-4">
            Mrs. S. Jansi Rani
          </p>
          <p className="text-center text-gray-700 font-medium mb-2">
            Joint-Organizing Secretary, ICAECTSD 2027
          </p>
          <p className="text-center text-gray-700 font-medium mb-2">
            Assistant Professor (Sl.Gr), Dept. of IT
          </p>
          <div className="text-center mb-4">
            <p className="text-gray-700">
              <span className="font-semibold">E-mail: </span>
              <a
                href="mailto:jansi.sankar@srec.ac.in"
                className="text-blue-600 hover:underline"
              >
                jansi.sankar@srec.ac.in
              </a>
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Mobile: </span>
              +91 9486800382
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
