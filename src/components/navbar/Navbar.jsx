import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 bg-transparent w-full z-10">
      <div className="flex max-w-7xl justify-between m-auto p-3 items-center h-24">
        <div className="text-4xl font-extrabold text-[#ff4d30] cursor-pointer">
          Car Rental
        </div>
        <div>
          <ul className="flex gap-4 font-medium cursor-pointer">
            <li>Home</li>
            <li>About</li>
            <li>Vehicle Models</li>
            <li>Testimonials</li>
            <li>Our Team</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="flex gap-3 font-medium text-lg">
          <button>Sign In</button>
          <button className="bg-[#ff4d30] text-white px-4 py-2 rounded">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
