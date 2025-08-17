import React from 'react';

const Feature = () => {

    const features = [
    {
      title: "Smart Home System",
      desc: "Velit irure occaecat do consectetur dolore officia magna ut anim ut.",
      icon: "🏠",
    },
    {
      title: "Solar Energy Panels",
      desc: "Velit irure occaecat do consectetur dolore officia magna ut anim ut.",
      icon: "☀️",
    },
    {
      title: "Central Air Conditioning",
      desc: "Velit irure occaecat do consectetur dolore officia magna ut anim ut.",
      icon: "❄️",
    },
    {
      title: "Home Security System",
      desc: "Velit irure occaecat do consectetur dolore officia magna ut anim ut.",
      icon: "🔒",
    },
  ];
    return (
         <section className="py-16 px-6 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side */}
        <div>
          <span className="text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-md">
            Home Overview
          </span>
          <h2 className="mt-4 text-4xl font-bold text-gray-900 leading-tight">
            Luxury living where comfort meets timeless style, effortlessly
          </h2>
          <p className="mt-4 text-gray-500">
            Non anim in pariatur in ex excepteur commodo do officia amet
            incididunt ullamco nostrud aliquip minim magna ut esse dolore.
          </p>
          <button className="mt-6 bg-[#b88648] text-white px-6 py-3 rounded-md font-semibold shadow hover:bg-[#a07035] transition">
            SCHEDULE A VISIT
          </button>
        </div>

        {/* Right Side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {features.map((f, idx) => (
            <div key={idx} className="flex flex-col items-start space-y-3">
              <div className="text-5xl text-[#b88648]">{f.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="text-gray-500 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
    );
};

export default Feature;