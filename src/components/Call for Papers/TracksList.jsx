export default function TracksList({ tracks }) {
  return (
    <main className="min-h-screen p-6">
      <div className="max-w-5xl mx-auto">
        {tracks.map((track, index) => (
          <div
            key={index}
            className="border border-gray-400 rounded-lg p-6 shadow-sm mb-8 bg-white"
          >
            <div className="border-b border-gray-300 pb-4 mb-6">
              <h2 className="text-3xl font-semibold tracking-tight">{track.title}</h2>
              <p className="text-gray-700 font-semibold text-lg mt-2">{track.description}</p>
            </div>

            <div className="flex flex-col md:flex-row justify-between gap-6">
              {track.items.map((column, colIndex) => (
                <ul key={colIndex} className="flex-1 space-y-3">
                  {column.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="text-gray-800 font-medium list-disc ml-5 text-base"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
