import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import banner from '../assets/Bannerphotos/Banner1.jpg';
import { Link } from 'react-router';

const Banner = () => {
  return (
    <div 
      className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] xl:h-[550px] 
                 rounded-xl overflow-hidden shadow-xl relative flex flex-col items-center justify-center text-center text-white px-4
                  bg-opacity-60 bg-blend-overlay bg-cover bg-center"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <h2 className="text-2xl text-amber-200 sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 drop-shadow-lg">
        Welcome to OneBuilding
      </h2>
      <p className="text-sm text-black font-bold sm:text-base md:text-lg lg:text-xl mb-6 max-w-2xl drop-shadow-md">
        Smart living for a smarter community
      </p>
      <Link to='/apartments' ><button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-full shadow-md transition">
        Book Apartment
      </button></Link>
    </div>
  );
};


export default Banner;
