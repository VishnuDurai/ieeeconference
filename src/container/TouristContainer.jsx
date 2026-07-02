export default function TouristContainer({ name, img }) {
  return (
    <section>
      <div className="max-w-xs mx-auto bg-white shadow-xl transition-transform hover:scale-105 rounded-2xl p-4">
        <div className="flex flex-col items-center">
          {/* Image */}
          <div className=" overflow-hidden ">
            <img
              src={img}
              alt={name}
              className="w-full h-60 object-cover"
            />
          </div>

          {/* Title */}
          <h2 className="mt-4 text-xl font-medium text-gray-800">
            {name}
          </h2>
        </div>
      </div>
    </section>
  );
}
