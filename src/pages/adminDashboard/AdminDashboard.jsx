import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import { TiUser } from "react-icons/ti";
import { GrOrderedList } from "react-icons/gr";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import MyContext from "../../context/MyContext";
import {
  FaCar,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaCheckCircle,
  FaUserFriends ,
} from "react-icons/fa";
import { MdOutlineMarkEmailUnread,MdPhoneInTalk ,MdLocationCity  } from "react-icons/md";
import { TbMapPinCode } from "react-icons/tb";
import Loader from "../../components/loader/Loader";

const AdminDashboard = () => {
  const user = JSON.parse(localStorage.getItem("users"));

  const navigate = useNavigate();

  const context = useContext(MyContext);
  const { loading, bookingInfo } = context;
  console.log(bookingInfo);

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
          <div>
            <Tabs className="right flex flex-col gap-[200px] justify-center w-[55rem] mt-[34px]">
              <TabList className="flex gap-[20px] w-full justify-center">
                <Tab className="bg-white w-[15rem] h-[10rem] rounded-2xl p-5 mt-8 flex justify-center items-center text-xl font-semibold cursor-pointer flex-col text-[#ff4d30] gap-2">
                  <GrOrderedList className="w-[36px] h-[36px]" />
                  <h2>5</h2>
                  <h2>Total Booking</h2>
                </Tab>
                <Tab className="bg-white w-[15rem] h-[10rem] rounded-2xl p-5 mt-8 flex justify-center items-center text-xl font-semibold cursor-pointer flex-col text-[#ff4d30] gap-2">
                  <TiUser className="w-[36px] h-[36px]" />
                  <h2>5</h2>
                  <h2>Total Users</h2>
                </Tab>
                <Tab className="bg-white w-[15rem] h-[10rem] rounded-2xl p-5 mt-8 flex justify-center items-center text-xl font-semibold cursor-pointer flex-col text-[#ff4d30] gap-2">
                  <FaCar className="w-[36px] h-[36px]" />
                  <h2>5</h2>
                  <h2>Fleet of Vehicles</h2>
                </Tab>
              </TabList>
              <div>
                <TabPanel>
                  {loading && <Loader />}
                  {bookingInfo.map((info, index) => (
                    <div
                    key={index}
                    className="my-8 max-w-[90%] bg-red-100 rounded-lg p-6 cursor-pointer shadow-md"
                  >
                    <h2 className="text-2xl font-bold mb-6">Booking Details</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div>
                        <div className="flex items-center mb-4">
                          <FaCar className="text-xl mr-3 text-red-500" />
                          <span className="text-lg font-semibold">Booking Id:</span>{" "}
                          <span>{info.id}</span>
                        </div>
                        {/* Other booking details go here */}
                        <div className="flex items-center mb-4">
                          <FaCar className="text-xl mr-3 text-red-500" />
                          <span className="text-lg font-semibold">Car Booked:</span>{" "}
                          <span>{info.carInfo.carType}</span>
                        </div>
                        <div className="flex items-center mb-4">
                          <FaMapMarkerAlt className="text-xl mr-3 text-red-500" />
                          <span className="text-lg font-semibold">Booking Date:</span>{" "}
                          <span>{info.date}</span>
                        </div>
                        <div className="flex items-center mb-4">
                          <FaMapMarkerAlt className="text-xl mr-3 text-red-500" />
                          <span className="text-lg font-semibold">Pickup Location:</span>{" "}
                          <span>{info.carInfo.pickUp}</span>
                        </div>
                        <div className="flex items-center mb-4">
                          <FaCalendarAlt className="text-xl mr-3 text-red-500" />
                          <span className="text-lg font-semibold">Pickup Date:</span>{" "}
                          <span>{info.carInfo.pickTime}</span>
                        </div>
                        <div className="flex items-center mb-4">
                          <FaMapMarkerAlt className="text-xl mr-3 text-red-500" />
                          <span className="text-lg font-semibold">Drop Location:</span>{" "}
                          <span>{info.carInfo.dropOff}</span>
                        </div>
                        <div className="flex items-center mb-4">
                          <FaCalendarAlt className="text-xl mr-3 text-red-500" />
                          <span className="text-lg font-semibold">Drop Date:</span>{" "}
                          <span>{info.carInfo.dropTime}</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-lg font-semibold mr-3">Booking Confirmation:</span>
                          <FaCheckCircle className="text-green-500" />
                          <p className="ml-2 text-green-500 font-semibold">Confirmed</p>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center mb-4">
                          <FaUserFriends className="text-xl mr-3 text-red-500" />
                          <span className="text-lg font-semibold">User Name:</span>{" "}
                          <span>{info.userInfo.name}</span>
                        </div>
                        <div className="flex items-center mb-4">
                          <MdOutlineMarkEmailUnread className="text-xl mr-3 text-red-500" />
                          <span className="text-lg font-semibold">User Email:</span>{" "}
                          <span>{info.userInfo.email}</span>
                        </div>
                        <div className="flex items-center mb-4">
                          <MdPhoneInTalk className="text-xl mr-3 text-red-500" />
                          <span className="text-lg font-semibold">User Phone:</span>{" "}
                          <span>{info.userInfo.phone}</span>
                        </div>
                        <div className="flex items-center mb-4">
                          <MdLocationCity className="text-xl mr-3 text-red-500" />
                          <span className="text-lg font-semibold">User City:</span>{" "}
                          <span>{info.userInfo.city}</span>
                        </div>
                        <div className="flex items-center mb-4">
                          <TbMapPinCode className="text-xl mr-3 text-red-500" />
                          <span className="text-lg font-semibold">User Pincode:</span>{" "}
                          <span>{info.userInfo.pincode}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  ))}
                </TabPanel>
                <TabPanel>
                  <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                  <h2 className="text-4xl font-medium">"Exciting updates underway! UI is currently under construction."</h2>
                </TabPanel>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
