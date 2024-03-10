import React from "react";
import polo from "../../assets/polo.png";
import bg from "../../assets/hero-bg.png";

// bg-gradient-to-b from-customGray to-white

const HeroComponent = () => {
  return (
    <div className="bg-[#f8f8f8]">
      <div className="flex max-w-7xl m-auto p-3 items-center h-[850px]">
        <img className="absolute top-0 right-0" src={bg} alt="bg" />
        <div className="w-1/3">
          <div className="font-bold text-xl">Plan your trip now</div>
          <div className="font-extrabold text-5xl my-2">
            Save <span className="text-[#ff4d30]">big</span> with our car rental
          </div>
          <div className="font-medium text-[#706f7b] my-4">
            Rent the car of your dreams. Unbeatable prices, unlimited miles,
            flexible pick-up options and much more.
          </div>
          <div className="flex gap-5 font-bold mt-8">
            <button className="bg-[#ff4d30] text-white px-6 py-4 rounded">
              Book Ride
            </button>
            <button className="bg-black text-white px-6 py-4 rounded">
              Learn More
            </button>
          </div>
        </div>
        <div className="w-2/3">
          <img className="max-w-3xl w-full relative" src={polo} alt="Audi" />
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
