import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("users"));

  const logout = () => {
    localStorage.clear("users");
    navigate("/signIn");
  };

  const navigate = useNavigate();
  return (
    <div className="lg:absolute top-0  w-full z-10">
      <div className="flex max-w-7xl justify-between m-auto p-3 items-center lg:h-24 sm:flex-col sm:gap-2 sm:w-full sm:bg-[#f8f8f8] md:bg-[#f8f8f8] md:flex-col md:gap-2 ">
        <div
          className="text-4xl font-extrabold text-[#ff4d30] cursor-pointer"
          onClick={() => navigate("/")}
        >
          Car Rental
        </div>
        <div>
          <ul className="flex gap-4 font-medium cursor-pointer sm:flex-wrap sm:justify-center">
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => navigate("/about")}>About </li>
            <li onClick={() => navigate("/vechilemodels")}>Vehicle Models</li>
            <li onClick={() => navigate("/testimonial")}>Testimonials</li>
            <li onClick={() => navigate("/ourteam")}>Our Team</li>
            <li onClick={() => navigate("/contact")}>Contact Us</li>
          </ul>
        </div>
        <div className="flex gap-3 font-medium text-lg">
          {!user && (
            <button onClick={() => navigate("/signIn")}>Sign In</button>
          )}
          {!user && (
            <button
              onClick={() => navigate("/signUp")}
              className="bg-[#ff4d30] text-white px-4 py-2 rounded"
            >
              Register
            </button>
          )}
          {user?.role === "admin" && (
            <button onClick={() => navigate("/admin-dashboard")}>
              Hey, {user.name}
            </button>
          )}
          {user?.role === "user" && (
            <button onClick={() => navigate("/user-dashboard")}>
              Hey, {user.name}
            </button>
          )}
          {user && (
            <button
              onClick={logout}
              className="bg-[#ff4d30] text-white px-4 py-2 rounded"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
