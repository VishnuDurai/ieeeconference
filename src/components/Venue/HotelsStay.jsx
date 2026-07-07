import TouristContainer from "../../container/TouristContainer";
import Headings from "../../container/Headings";
import Footer from "../../components/Footer";
export default function HotelStay() {
  return (
    <main className=" mt-20">
      <p className=" text-2xl sm:text-4xl text-center font-bold uppercase py-10">
        Hotels for Stay
      </p>
      <p className=" pb-5 sm:text-xl text-lg text-center ">
        Participants are requested to book the accommodation well in advance
        through online booking. Some of the best hotels are listed below.
      </p>
      <div className=" flex flex-col justify-center items-center place-self-center">
        <Headings text="Luxury Hotels" />
        <div className=" grid  xl:grid-cols-3  md:grid-cols-2 gap-14 mt-10 mx-auto">
          <TouristContainer
            name={"Vivanta, Race Course Road, Coimbatore"}
            img={"/assets/hotels/vivanta.jpeg"}
          />
          <TouristContainer
            name={"The Residency Towers, Avinashi Road Coimbatore"}
            img={"/assets/hotels/residency.jpg"}
          />
          <TouristContainer
            name={"Le Meridien, Neelambur, Coimbatore"}
            img={"/assets/hotels/lemeredian.jpg"}
          />
          <TouristContainer
            name={"Radisson Blu, Avinashi Road Coimbatore"}
            img={"/assets/hotels/raddisson.jpg"}
          />
          <TouristContainer
            name={"Hash Six Hotel, Saibaba Colony, Coimbatore"}
            img={"/assets/hotels/hashsix.jpg"}
          />
          <TouristContainer
            name={"Lemon Tree Hotel, Coimbatore"}
            img={"/assets/hotels/lemon.jpg"}
          />
        </div>
      </div>

      <div className=" flex flex-col justify-center my-20 items-center place-self-center">
        <Headings text="Mid-Range Hotels" />
        <div className=" grid xl:grid-cols-3  md:grid-cols-2 gap-14 mt-10 mx-auto">
          <TouristContainer
            name={"Hotel CAG Pride, Gandhipuram, Coimbatore"}
            img={"/assets/hotels/cag.jpg"}
          />
          <TouristContainer
            name={"City Tower, Gandhipuram, Coimbatore"}
            img={"/assets/hotels/citytower.jpg"}
          />
          <TouristContainer
            name={"Hotel Alankar, Gandhipuram, Coimbatore"}
            img={"/assets/hotels/alankar.jpg"}
          />
          <TouristContainer
            name={"Fairfield by Marriott, Avinashi Road, Coimbatore"}
            img={"/assets/hotels/farfield.jpg"}
          />
          <TouristContainer
            name={"Welcomhotel, ITC Hotels, Race Course, Coimbatore"}
            img={"/assets/hotels/welcome.jpeg"}
          />
          <TouristContainer
            name={"Hotel KISCOL Grands, Ramnagar, Coimbatore"}
            img={"/assets/hotels/kiscol.jpeg"}
          />

          <TouristContainer
            name={"Rathna Residency, Town Hall, Coimbatore"}
            img={"/assets/hotels/rathna.avif"}
          />
          <TouristContainer
            name={"Hotel Vijay Park Inn, Ramnagar, Coimbatore"}
            img={"/assets/hotels/vijay.jpg"}
          />

        </div>
      </div>

      <div className=" flex flex-col justify-center my-20 items-center place-self-center">
        <Headings text="Budget-Friendly Hotels" />
        <div className=" grid xl:grid-cols-3 md:grid-cols-2 gap-14 mt-10 mx-auto">
          <TouristContainer
            name={"Sri Aarvee Hotels, Gandhipuram, Coimbatore"}
            img={"/assets/hotels/sri.jpg"}
          />
          <TouristContainer
            name={"Zone by The Park, Coimbatore"}
            img={"/assets/hotels/zone.jpg"}
          />
          <TouristContainer
            name={"Hotel Jothi Grand, Near KCT, Saravanampatti, Coimbatore"}
            img={"/assets/hotels/jothi.jpeg"}
          />
        </div>
      </div>

      <p className=" text-center text-lg px-3">For more hotels, visit <a
        className="text-primary-blue hover:underline underline-offset-2 font-semibold"
        href="https://shorturl.at/VgNzo"
        target="_blank"
        rel="noopener noreferrer"
      >
        here
      </a></p>

      <Footer />
    </main>
  );
}
