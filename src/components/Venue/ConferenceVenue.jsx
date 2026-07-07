import Footer from '../../components/Footer';

export default function ConferenceVenue() {
  return (
    <main>
      <p className="text-2xl sm:text-4xl py-10 text-center items-center font-bold uppercase">
        Conference Venue
      </p>
      <div className="p-8 md:px-20">
        <div className="flex xl:flex-row flex-col justify-between items-center 2xl:gap-36 gap-20 2xl:px-20">
          <div className="w-full xl:w-2/5">
            <p className="text-lg sm:text-xl sm:leading-loose leading-relaxed text-justify">
              Sri Ramakrishna Engineering College (SREC), located in Coimbatore,
              was established in 1994 and is managed by the SNR Sons Charitable
              Trust. The college offers undergraduate and postgraduate programs
              in engineering and technology. SREC is known for its strong
              academic curriculum, research initiatives, and modern facilities,
              fostering a practical learning environment. The college also
              emphasizes extracurricular activities and industry collaborations,
              aiming to produce skilled professionals. For more information,
              visit their{" "}
              <a className=' text-primary-blue hover:underline underline-offset-2' href="https://srec.ac.in/" rel="noreferrer" target="_blank">
                official website
              </a>
            </p>
          </div>

          <div className="w-full xl:w-3/5">
            <iframe
              title="Sri Ramakrishna Engineering College Location on Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4939.829255974464!2d76.96318737593022!3d11.101540753111017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f7000afa766b%3A0x2b5757b8d520a3af!2sSri%20Ramakrishna%20Engineering%20College!5e1!3m2!1sen!2sin!4v1733458498653!5m2!1sen!2sin"
              className="border-0 w-full xl:w-[700px] h-[400px]"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <p className="text-2xl sm:text-4xl pt-20 pb-10 text-center font-bold uppercase">
          How to Reach
        </p>

        <div className="mx-auto max-w-4xl">
          <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse border border-gray-500">
              <tbody>
                <tr>
                  <td className="border border-gray-500 px-4 py-2 font-bold flex gap-3 text-left">
                    <div>
                      {" "}
                      <ion-icon name="airplane"></ion-icon>
                    </div>
                    Nearby Airport
                  </td>
                  <td className="border border-gray-500 font-medium px-4 py-2 text-center">
                    Coimbatore
                  </td>
                  <td className="border border-gray-500 font-medium px-4 py-2 text-center">
                    20 km
                  </td>
                  <td className="border border-gray-500 font-medium px-4 py-2 text-center">
                    40 minutes
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 font-bold px-4 py-2 flex gap-3 text-left">
                    <div>
                      <ion-icon name="train"></ion-icon>
                    </div>{" "}
                    Nearby Railway Station
                  </td>
                  <td className="border border-gray-500 font-medium px-4 py-2 text-center">
                    Coimbatore
                  </td>
                  <td className="border border-gray-500 font-medium px-4 py-2 text-center">
                    15 km
                  </td>
                  <td className="border border-gray-500 font-medium px-4 py-2 text-center">
                    30 minutes
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-10 mb-5 text-lg">
            Candidates can hire a car (Red Taxi /Go Taxi/OLA) from Airport or
            Railway Station to reach Sri Ramakrishna Engineering College
            Coimbatore.
          </p>

          <p className=' font-semibold mb-4'>Contact Numbers:</p>
          <p>Red Taxi: 0422 456 7890</p>
          <p>Capital Call Taxi: 0422 245 4444</p>
          <p>OLA Cabs: 0422 335 5335 (also booking can be done through OLA App)</p>
          <p>Fast Track Call Taxi: 0422 288 8999</p>
          <p>Go Taxi: 042244556677</p>
          <p className="text-lg my-5">
            Candidates can hire an auto-rickshaw from Thudiyalur (nearest Town
            4km) to reach Sri Ramakrishna Engineering College Coimbatore.
          </p>
          <p>Covai Zone Group Auto: +91 84381 44544</p>
        </div>
      </div>

      <Footer />
    </main>
  );
}
