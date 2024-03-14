import React from "react";
import polo from "../../assets/polo.png";
import bg from "../../assets/hero-bg.png";

// bg-gradient-to-b from-customGray to-white

const HeroComponent = () => {
  return (
    <div className="bg-[#f8f8f8]">
      <div className="flex max-w-7xl m-auto p-3 items-center lg:h-[780px] sm:h-[520px] md:h-[520px]">
        <img className="absolute top-0 right-0 sm:hidden md:hidden" src={bg} alt="bg" />
        <div className="lg:w-1/3 sm:max-w-lg sm:text-center sm:mx-auto md:max-w-xl md:mx-auto md:text-center">
          <div className="font-bold text-xl">Plan your trip now</div>
          <div className="font-extrabold text-5xl my-2">
            Save <span className="text-[#ff4d30]">big</span> with our car rental
          </div>
          <div className="font-medium text-gray-500 my-4">
            Rent the car of your dreams. Unbeatable prices, unlimited miles,
            flexible pick-up options and much more.
          </div>
          <div className="flex gap-5 font-bold mt-8 sm:justify-center md:justify-center">
            <button className="bg-[#ff4d30] text-white px-6 py-4 rounded">
              Book Ride
            </button>
            <button className="bg-black text-white px-6 py-4 rounded">
              Learn More
            </button>
          </div>
        </div>
        <div className="w-2/3 sm:w-0 md:w-0">
          <img className="max-w-3xl w-full relative sm:hidden md:hidden" src={polo} alt="Audi" />
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
