import React from "react";
// import bookingimg from "../../assets/booking.png"

const Booking = () => {
  return (
    <div className="bg-gradient-to-b from-customGray to-white">
      <div className="max-w-7xl m-auto p-3 relative">
        <div className="max-w-6xl max-h-80 border-2 p-10 bg-white mt-16 bg-[url('../../assets/booking.png')]">
          <div className="heading">Book a car</div>
          <div className="flex flex-wrap gap-6">
            <div className="flex flex-col w-[340px] ">
              <label htmlFor="">Car Model</label>
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
              <label htmlFor="">Pick-up</label>
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
              <label htmlFor="">Drop-off</label>
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
              <label htmlFor="">Pick-up</label>
              <input className="border-2 p-2 text-[#838383]" type="date" />
            </div>
            <div className="flex flex-col w-[340px] ">
              <label htmlFor="">Drop-off</label>
              <input className="border-2 p-2 text-[#838383]" type="date" />
            </div>
            <div className="flex flex-col w-[340px] ">
              <button>Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
