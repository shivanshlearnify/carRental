import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import { TiUser } from "react-icons/ti";
import { FaCar } from "react-icons/fa6";
import { GrOrderedList } from "react-icons/gr";

const AdminDashboard = () => {
  const user = JSON.parse(localStorage.getItem("users"));

  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear("users");
    navigate("/signIn");
  };
  return (
    <div>
      <div className="bg-[#ff4d30] h-[320px]">
        <div className="relative p-5 flex gap-10">
          <div className="left max-w-[18rem] bg-white h-[95vh] top-[5px] rounded-xl drop-shadow-2xl p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-center text-2xl font-semibold">
                Admin dashboard
              </h2>
              <hr className="my-4" />
              <img
                className="flex justify-center w-full"
                src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
                alt=""
              />
              <h2 className="mt-8 mb-4 font-semibold cursor-pointer ">
                <span>Name :- </span>
                {user.name}
              </h2>
              <h2 className="my-4 font-semibold cursor-pointer">
                <span>Email :- </span>
                {user.email}
              </h2>
              <h2 className="my-4 font-semibold cursor-pointer">
                <span>Date :- </span>
                {user.date}
              </h2>
              <h2 className="my-4 font-semibold cursor-pointer">
                <span>Role :- </span>
                {user.role}
              </h2>
            </div>
            <div>
              <div
                onClick={logout}
                className="text-center text-2xl bg-[#ff4d30] text-white rounded py-2 cursor-pointer flex items-center justify-center"
              >
                <MdLogout />
                Logout
              </div>
              <div className="text-center my-4">
                <h2>
                  Skip to{" "}
                  <span
                    className="text-[#ff4d30] cursor-pointer"
                    onClick={() => navigate("/")}
                  >
                    Homepage
                  </span>
                </h2>
              </div>
            </div>
          </div>
          <div className="right flex gap-[20px] justify-center w-full mt-[34px]">
            <div className="bg-white w-[15rem] h-[10rem] rounded-2xl p-5 mt-8 flex justify-center items-center text-xl font-semibold cursor-pointer flex-col text-[#ff4d30] gap-2">
              <FaCar className="w-[36px] h-[36px]" />
              <h2>5</h2>
              <h2>Fleet of Vehicles</h2>
            </div>
            <div className="bg-white w-[15rem] h-[10rem] rounded-2xl p-5 mt-8 flex justify-center items-center text-xl font-semibold cursor-pointer flex-col text-[#ff4d30] gap-2">
              <GrOrderedList className="w-[36px] h-[36px]" />
              <h2>5</h2>
              <h2>Total Booking</h2>
            </div>
            <div className="bg-white w-[15rem] h-[10rem] rounded-2xl p-5 mt-8 flex justify-center items-center text-xl font-semibold cursor-pointer flex-col text-[#ff4d30] gap-2">
              <TiUser className="w-[36px] h-[36px]" />
              <h2>5</h2>
              <h2>Total Users</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
