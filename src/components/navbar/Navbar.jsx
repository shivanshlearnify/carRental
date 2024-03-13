import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="fixed top-0 bg-slate-50/30 w-full z-10">
      <div className="flex max-w-7xl justify-between m-auto p-3 items-center h-24">
        <div
          className="text-4xl font-extrabold text-[#ff4d30] cursor-pointer"
          onClick={() => navigate("/")}
        >
          Car Rental
        </div>
        <div>
          <ul className="flex gap-4 font-medium cursor-pointer">
            <li onClick={()=> navigate('/')}>Home</li>
            <li onClick={()=> navigate('/about')}>About</li>
            <li onClick={()=> navigate('/vechilemodels')}>Vehicle Models</li>
            <li onClick={()=> navigate('/testimonial')}>Testimonials</li>
            <li onClick={()=> navigate('/ourteam')}>Our Team</li>
            <li onClick={()=> navigate('/contact')}>Contact</li>
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