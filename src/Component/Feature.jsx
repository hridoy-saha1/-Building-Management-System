import React from 'react';

const Feature = () => {

  const features = [
    {
      title: "Smart Home System",
      desc: "Control lighting, temperature, and appliances with just a tap or voice command for ultimate convenience.",
      icon: "🏠",
    },
    {
      title: "Solar Energy Panels",
      desc: "Eco-friendly solar panels reduce energy bills while powering your home sustainably.",
      icon: "☀️",
    },
    {
      title: "Central Air Conditioning",
      desc: "Enjoy consistent comfort throughout your home with advanced climate control.",
      icon: "❄️",
    },
    {
      title: "Home Security System",
      desc: "State-of-the-art security cameras and alarms keep your family safe 24/7.",
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
            Luxury living where comfort meets timeless style
          </h2>
          <p className="mt-4 text-gray-500">
            Discover modern homes designed for convenience, elegance, and sustainable living. Every detail is crafted to enhance your lifestyle.
          </p>
         
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
