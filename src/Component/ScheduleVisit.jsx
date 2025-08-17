import React, { useContext } from "react";
import { AuthContext } from "../Auth/AuthContext";
import photos from "../assets/Bannerphotos/real-estate-agent-1180176_1920.jpg"

const ScheduleVisit = () => {
    
  return (
    <section className="py-16 px-6 bg-white">
      {/* Top Title */}
      <div className="text-center mb-10">
        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm font-medium">
          Contact Us
        </span>
        <h2 className="text-3xl font-semibold mt-4">Schedule a Visit</h2>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8  max-w-5xl mx-auto items-center">
        {/* Left: Person Info */}
        <div className="text-center">
          <div className="overflow-hidden rounded-2xl mt-8 shadow-md inline-block">
            <img
              src={photos}
              alt="Agent"
              className="w-72 h-80 object-cover"
            />
          </div>
          <h3 className="mt-4 text-lg font-semibold">Rodriguez</h3>
          <p className="text-amber-700 font-medium">+88015654413</p>
        </div>

        {/* Right: Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="col-span-1 border rounded-md px-4 py-3 bg-gray-50 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="col-span-1 border rounded-md px-4 py-3 bg-gray-50 focus:outline-none"
          />
          <input
            type="date"
            className="col-span-1 border rounded-md px-4 py-3 bg-gray-50 focus:outline-none"
          />
          <input
            type="time"
            className="col-span-1 border rounded-md px-4 py-3 bg-gray-50 focus:outline-none"
          />
          <textarea
            placeholder="Submit Request"
            rows="4"
            className="col-span-2 border rounded-md px-4 py-3 bg-gray-50 focus:outline-none"
          ></textarea>

          <button
            type="submit"
            className="col-span-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 rounded-md transition"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
    </section>
  );
};

export default ScheduleVisit;
