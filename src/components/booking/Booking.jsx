import React from "react";
import bookingimg from "../../assets/booking.png";

const Booking = () => {
  return (
    <div className="bg-gradient-to-b from-customGray to-white">
      <div className="max-w-7xl m-auto p-3 relative">
        <div className="max-w-7xl m-auto max-h-80 p-10 bg-white mt-16 drop-shadow-2xl">
          {/* <img className="absolute z-0 bg-cover bg-center" src={bookingimg} alt="bg" /> */}
          <div className="heading text-2xl font-bold mb-4">Book a car</div>
          <div className="flex flex-wrap gap-6 relative">
            <div className="flex flex-col w-[340px] ">
              <label className="font-bold mb-2" htmlFor="">Car Model</label>
              <select className="border-2 p-2 text-[#838383]">
                <option>Select Your Car Modal</option>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
                <option>Option 4</option>
                <option>Option 5</option>
              </select>
            </div>
            <div className="flex flex-col w-[340px] ">
              <label className="font-bold mb-2" htmlFor="">Pick-up</label>
              <select className="border-2 p-2 text-[#838383]">
                <option>Select Your Pickup Location</option>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
                <option>Option 4</option>
                <option>Option 5</option>
              </select>
            </div>
            <div className="flex flex-col w-[340px] ">
              <label className="font-bold mb-2" htmlFor="">Drop-off</label>
              <select className="border-2 p-2 text-[#838383]">
                <option>Select Your Drop off Location</option>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
                <option>Option 4</option>
                <option>Option 5</option>
              </select>
            </div>
            <div className="flex flex-col w-[340px] ">
              <label className="font-bold mb-2" htmlFor="">Pick-up</label>
              <input className="border-2 p-2 text-[#838383]" type="date" />
            </div>
            <div className="flex flex-col w-[340px] ">
              <label className="font-bold mb-2" htmlFor="">Drop-off</label>
              <input className="border-2 p-2 text-[#838383]" type="date" />
            </div>
            <div className="flex flex-col w-[340px] justify-end font-semibold">
              <button className="bg-[#ff4d30] p-2 text-white text-xl">Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
