import React from "react";
//import hero image
import woman_hero from "../img/woman_hero.png";
const Hero = () => {
  return (
    <div className="relative w-full h-[600px] bg-hero bg-cover bg-center flex justify-between overflow-hidden ">
      <div className="w-full sm:basis-2/3 flex sm:justify-center items-center pl-4 md:ml-10">
        <div className="flex flex-col gap-y-2">
          <p className="w-[500px] flex items-center uppercase">
            <span className="w-12 h-1 bg-red-500 mr-1"></span>New Trend
          </p>
          <p className="text-4xl sm:text-7xl font-extralight">
            AUTUM SALE STYLISH <br /> <span className="font-medium">WOMAN</span>
          </p>
          <div>
            <button className="bg-red-300 px-5 py-2 text-white font-normal uppercase">
              Discover
            </button>
          </div>
        </div>
      </div>

      <div className="absolute right-0 opacity-60 sm:opacity-100 sm:relative sm:basis-1/3">
        <img src={woman_hero} alt="woman" className="h-[600px]" />
      </div>
    </div>
  );
};

export default Hero;
