import React from "react";

const Testimonial = () => {
  return (
    <div className="bg-[#f8f8f8]">
      <div className="flex flex-col max-w-7xl mx-auto py-20 px-3 gap-10">
        <div className="flex flex-col items-center max-w-2xl m-auto gap-4">
          <h3 className="text-xl font-bold ">Reviewed by People</h3>
          <h1 className="text-5xl font-extrabold sm:text-center">Client's Testimonials</h1>
          <p className="text-gray-500 flex text-center">
            Discover the positive impact we've made on the our clients by
            reading through their testimonials. Our clients have experienced our
            service and results, and they're eager to share their positive
            experiences with you.
          </p>
        </div>
        <div className="flex gap-16 p-[35px] sm:flex-col">
          <div className="right bg-white flex flex-col gap-5 p-[45px] ">
            <p className="text-xl font-bold ">
              "We rented a car from this website and had an amazing experience!
              The booking was easy and the rental rates were very affordable. "
            </p>
            <div className="text-end">
              <img src="" alt="" />
              <h2 className="font-bold">Rohit, ipsum.</h2>
              <h2>delhi, In</h2>
            </div>
          </div>
          <div className="right bg-white flex flex-col gap-5 p-[45px] ">
            <p className="text-xl font-bold ">
              "The car was in great condition and made our trip even better.
              Highly recommend for this car rental website!"
            </p>
            <div className="text-end">
              <img src="" alt="" />
              <h2 className="font-bold">shubham, ipsum.</h2>
              <h2>delhi, In</h2>
            </div>
          </div>
          <div className="right"></div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
