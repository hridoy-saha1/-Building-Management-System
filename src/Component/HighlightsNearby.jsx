import React from "react";
import airport from "../assets/rooms/airport.jpg"
import University from "../assets/rooms/university.jpg"
import mall from "../assets/rooms/mall.jpg"

const nearbyPlaces = [
  {
    title: "Airport",
    distance: "16 miles",
    img: airport
  },
  {
    title: "University",
    distance: "10 miles",
    img: University, 
  },
  {
    title: "Shopping Mall",
    distance: "12 miles",
    img: mall
  },
];

const HighlightsNearby = () => {
  return (
    <section className="py-12 px-6 text-center">
      <div className="mb-2">
        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm font-medium">
          Near By Places
        </span>
      </div>
      <h2 className="text-3xl font-semibold mb-10">Highlights Nearby</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {nearbyPlaces.map((place, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
          >
            <img
              src={place.img}
              alt={place.title}
              className="w-full h-64 object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent text-white flex justify-between items-end">
              <h3 className="text-lg font-medium">{place.title}</h3>
              <span className="text-sm">{place.distance}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HighlightsNearby;
