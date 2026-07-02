import TouristContainer from "../../container/TouristContainer";
import Footer from "../../components/Footer";
export default function TouristPlaces() {
  return (
    <main className=" mt-20">
      <p className="pt-10 text-justify px-5 text-gray-600 font-semibold sm:text-center text-lg mb-5">
        Half-a-day tour will be arranged to visit nearest site seeing places
        based on number of participant’s registered for tour.
      </p>

      <p className=" text-2xl sm:text-4xl text-center font-bold uppercase py-10">
        About Coimbatore
      </p>

      <div className=" mx-auto max-w-5xl text-lg flex flex-col gap-4 leading-8 pb-5 text-justify px-3">
        <p>
          Coimbatore, often referred to as the <span className=" font-semibold">"Manchester of South India",</span> is a
          dynamic city in Tamil Nadu, India, known for its industrial prowess,
          pleasant climate, and cultural heritage. It is a popular destination
          for conferences and business events, offering excellent infrastructure
          and connectivity.
        </p>
        <p>
          Coimbatore International Airport connects the city to major Indian
          cities like Chennai, Bangalore, Mumbai, and Delhi, as well as
          international destinations like Singapore and Sharjah. Coimbatore
          Junction is a major railway hub with frequent trains to all parts of
          India. It is also well-connected via National Highways, making it
          accessible by road from nearby cities like Chennai, Bangalore, and
          Kochi. Coimbatore is widely recognized as an emerging education hub in
          South India. The city is home to a variety of prestigious educational
          institutions, spanning schools, colleges, and specialized training
          centers. It offers a holistic educational environment with a focus on
          academics, innovation, and industry integration. The ideal time to
          visit Coimbatore is between September and March, when the weather is
          pleasant and conducive to travel.
        </p>
      </div>

      <p className=" text-2xl sm:text-4xl text-center font-bold uppercase py-5">
        Tourist Places
      </p>
      <div className=" flex flex-col justify-center items-center place-self-center">
        <div className=" grid xl:grid-cols-3 md:grid-cols-2 gap-14 mx-auto">
          <TouristContainer
            name={
              "Isha Yoga Center - Dhyanalinga and Adiyogi Statue (Religious site)"
            }
            img={"/assets/tourism/isha.jpeg"}
          />
          <TouristContainer
            name={
              "Dhyanalinga Temple at the foothills of Velliangiri Mountains (Religious site)"
            }
            img={"/assets/tourism/dhyanalinga.jpg"}
          />
          <TouristContainer
            name={"Marudamalai Temple (Religious site)"}
            img={"/assets/tourism/marudhamalai.jpeg"}
          />
          <TouristContainer
            name={"Kovai Kutralam Water Falls"}
            img={"/assets/tourism/kovai.jpg"}
          />
          <TouristContainer
            name={"Brookefields Mall"}
            img={"/assets/tourism/brooks.jpg"}
          />
          <TouristContainer
            name={"Black Thunder Theme Park"}
            img={"/assets/tourism/blackthunder.jpg"}
          />
          <TouristContainer
            name={"Eachanari Vinayagar Temple (Religious site)"}
            img={"/assets/tourism/vinayagartemple.jpeg"}
          />
          <TouristContainer
            name={"Kovai Kondattam"}
            img={"/assets/tourism/kovaikondattam.jpg"}
          />
          <TouristContainer
            name={"Horticulture Farms, Kallar, Near Mettupalayam"}
            img={"/assets/tourism/kallar.jpg"}
          />
        </div>
      </div>

      <p className=" text-2xl mt-20 sm:text-4xl text-center font-bold uppercase py-10">
        Weekend Stay
      </p>
      <div className=" flex flex-col mt-10 mb-20 justify-center">
        <div className=" grid xl:grid-cols-3 md:grid-cols-2 gap-14 mx-auto">
          <TouristContainer
            name={"Ooty Hill Station (Udhagamandalam)"}
            img={"/assets/tourism/ooty.jpeg"}
          />
          <TouristContainer
            name={"Coonoor Hill Station"}
            img={"/assets/tourism/coonoor.jpg"}
          />
          <TouristContainer
            name={"Valparai Hill Station"}
            img={"/assets/tourism/valparai.jpg"}
          />
          <TouristContainer
            name={"Munnar Hill Station"}
            img={"/assets/tourism/Munnar.jpg"}
          />
          <TouristContainer
            name={"Athirapally Waterfalls"}
            img={"/assets/tourism/athirapilly.jpg"}
          />
          <TouristContainer
            name={"Kodaikannal Hill Station"}
            img={"/assets/tourism/kodai.jpeg"}
          />
          <TouristContainer
            name={"Topslip Anamalai Tiger Reserve"}
            img={"/assets/tourism/tiger.jpg"}
          />
        </div>
      </div>

      <Footer />
    </main>
  );
}
