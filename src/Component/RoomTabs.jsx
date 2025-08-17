import { useState } from "react";
import living from "../assets/rooms/living.jpg";
import dining from "../assets/rooms/dining.jpg";
import kitchen from "../assets/rooms/kitchen.jpg";
import bedroom from "../assets/rooms/master.jpg";
import bathroom from "../assets/rooms/bathroom.jpg";

const rooms = [
  {
    name: "Living Room",
    desc: "A cozy, social hub with plush seating and entertainment. Ideal for relaxing, gatherings, and family time.",
    size: "20 m²",
    img: living,
  },
  {
    name: "Dining Room",
    desc: "An elegant space designed for meals and conversations, perfect for family dinners or hosting guests.",
    size: "15 m²",
    img: dining,
  },
  {
    name: "Kitchen",
    desc: "A modern cooking area equipped with appliances and ample storage for efficient meal preparation.",
    size: "12 m²",
    img: kitchen,
  },
  {
    name: "Master Bedroom",
    desc: "A spacious retreat with comfort and privacy, offering relaxation and restful nights.",
    size: "25 m²",
    img: bedroom,
  },
  {
    name: "Bathroom",
    desc: "A clean and refreshing space with modern fixtures, designed for relaxation and hygiene.",
    size: "8 m²",
    img: bathroom,
  },
];

const RoomTabs = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="w-full bg-[#0e3a36] min-h-screen p-6 flex flex-col items-center">
      <h1 className="text-6xl text-white" >Discover Room</h1>
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mt-10 bg-[#116760] p-2 rounded-full mb-6">
        {rooms.map((room, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`px-6 py-2 rounded-full font-medium transition ${
              active === i
                ? "bg-[#b88648] text-white"
                : "bg-transparent text-gray-300 hover:text-white"
            }`}
          >
            {room.name}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex flex-col  md:flex-row items-center gap-6 w-full max-w-5xl">
       
        {/* Left side (text) */}
        <div className=" text-white p-6 bg-[#116760]  rounded-xl w-full md:w-[350px]">
          <h2 className="text-2xl mb-4 md:mb-[270px] font-bold ">{rooms[active].name}</h2>
          <p className="text-gray-300">{rooms[active].desc}</p>
        </div>

        {/* Right side (image + size) */}
        <div className="relative w-full md:w-[700px] rounded-xl overflow-hidden">
          <img
            src={rooms[active].img}
            alt={rooms[active].name}
            className="w-full h-[300px] md:h-[400px] object-cover rounded-xl"
          />
          <span className="absolute bottom-4 left-4 bg-[#b88648] text-white px-4 py-2 rounded-md text-sm font-semibold shadow">
            {rooms[active].size}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RoomTabs;
