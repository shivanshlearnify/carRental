import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import MyContext from "../../context/MyContext";
import Loader from "../../components/loader/Loader";
import {
  FaCar,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaCheckCircle,
} from "react-icons/fa";

const UserDashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("users"));

  const context = useContext(MyContext);
  const { loading, bookingInfo } = context;
  const bookingData = bookingInfo.filter((obj) => obj?.userid === user?.uid);
  return (
    <Layout>
      <div>
        <div className="bg-[#ff4c306c] text-xl font-bold flex flex-col gap-4 mt-[150px] justify-center items-center max-w-7xl mx-auto rounded-3xl py-16 sm:mx-2 shadow-md">
          <img
            className="w-[120px] self-center"
            src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
            alt="Car Icon"
          />
          <h2 className="text-center text-2xl">
            Name: <span className="text-white">{user.name}</span>
          </h2>
          <h2 className="text-center text-2xl">
            Email: <span className="text-white">{user.email}</span>
          </h2>
        </div>
      </div>
      <div className="max-w-7xl mx-auto sm:mx-5">
        <div>
          <h2 className="text-3xl font-bold mt-5">
            Booking Info{" "}
            <span className="text-red-500">
              (All Information Will be Shared With You in your mail)*
            </span>
          </h2>
        </div>
        {bookingData.length === 0 ? (
          <p className="text-xl font-medium my-10 flex gap-2 sm:flex-col">
            Currently, there are no available car bookings.
            <h2>
              Skip to{" "}
              <span
                className="text-[#ff4d30] cursor-pointer"
                onClick={() => navigate("/")}
              >
                Homepage
              </span>
            </h2>
          </p>
        ) : (
          ""
        )}
        {loading && <Loader />}

        {bookingInfo
          .filter((obj) => obj?.userid === user?.uid)
          .map((info, index) => (
            <div
              key={index}
              className="my-14 max-w-lg bg-red-100 rounded-lg p-4 font-medium cursor-pointer font-sans shadow-md"
            >
              <h2 className="text-2xl font-bold mb-4">Booking Details</h2>
              <div className="flex items-center mb-2">
                <FaCar className="text-xl mr-2 text-red-500" />
                <span className="text-lg font-semibold">Booking Id:</span> #
                {info.id}
              </div>
              <div className="flex items-center mb-2">
                <FaCar className="text-xl mr-2 text-red-500" />
                <span className="text-lg font-semibold">Car Booked:</span>{" "}
                {info.carInfo.carType}
              </div>
              <div className="flex items-center mb-2">
                <FaMapMarkerAlt className="text-xl mr-2 text-red-500" />
                <span className="text-lg font-semibold">
                  Pickup Location:
                </span>{" "}
                {info.carInfo.pickUp}
              </div>
              <div className="flex items-center mb-2">
                <FaCalendarAlt className="text-xl mr-2 text-red-500" />
                <span className="text-lg font-semibold">Pickup Date:</span>{" "}
                {info.carInfo.pickTime}
              </div>
              <div className="flex items-center mb-2">
                <FaMapMarkerAlt className="text-xl mr-2 text-red-500" />
                <span className="text-lg font-semibold">
                  Drop Location:
                </span>{" "}
                {info.carInfo.dropOff}
              </div>
              <div className="flex items-center mb-2">
                <FaCalendarAlt className="text-xl mr-2 text-red-500" />
                <span className="text-lg font-semibold">Drop Date: </span>{" "}
                {info.carInfo.dropTime}
              </div>
              <div className="flex items-center">
                <span className="text-lg font-semibold mr-2">
                  Booking Confirmation: 
                </span>

                <FaCheckCircle className="text-green-500" /> 
                <p>Confirmed</p>
              </div>
            </div>
          ))}
      </div>
    </Layout>
  );
};

export default UserDashboard;
