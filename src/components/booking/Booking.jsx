import React, { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { fireDB } from "../../firebase/FirebaseConfig";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Booking = () => {
  const user = JSON.parse(localStorage.getItem("users"));
  const [modal, setModal] = useState(false);

  const navigate = useNavigate();

  const [carInfo, setCarInfo] = useState({
    carType: "",
    pickUp: "",
    dropOff: "",
    pickTime: "",
    dropTime: "",
  });

  const [userInfo, setUserInfo] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
    city: "",
    pincode: "",
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  const openMOdal = () => {
    if (
      carInfo.carType === "" ||
      carInfo.pickUp === "" ||
      carInfo.dropOff === "" ||
      carInfo.pickTime === "" ||
      carInfo.dropTime === ""
    ) {
      toast.error("All Feilds Are Required");
    } else if (user === null) {
      navigate("/signIn");
    } else {
      setModal(true);
    }
  };
  const closeModal = () => {
    setModal(false);
  };
  const bookNowFunction = () => {
    if (
      userInfo.name === "" ||
      userInfo.age === "" ||
      userInfo.email === "" ||
      userInfo.phone === "" ||
      userInfo.city === "" ||
      userInfo.pincode === ""
    ) {
      toast.error("All Feilds Are Required");
    }
    const bookingInfo = {
      carInfo,
      userInfo,
      userid: user.uid,
      status: "confirmed",
      time: Timestamp.now(),
      date: new Date().toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
    };
    try {
      const bookingRef = collection(fireDB, "order");
      addDoc(bookingRef, bookingInfo);
      setModal(false);
      toast.success("Booking Done");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div id="booking" className="bg-gradient-to-b from-customGray to-white">
        <div className="max-w-7xl m-auto p-3 relative">
          <div className="max-w-7xl m-auto lg:max-h-80 p-10 bg-white mt-16 drop-shadow-2xl">
            {/* <img className="absolute z-0 bg-cover bg-center" src={bookingimg} alt="bg" /> */}
            <div className="heading text-2xl font-bold mb-4 md:text-center sm:text-center">
              Book a car{" "}
              <span className="text-red-400">
                (Please Sign In Before Booking)*
              </span>
            </div>
            <div className="flex flex-wrap gap-6 relative sm:justify-center md:justify-center">
              <div className="flex flex-col w-[340px] ">
                <label className="font-bold mb-2" htmlFor="">
                  Pick-up
                </label>
                <select
                  className="border-2 p-2 text-[#838383]"
                  value={carInfo.pickUp}
                  onChange={(e) => {
                    setCarInfo({ ...carInfo, pickUp: e.target.value });
                  }}
                >
                  <option>Select Your Pickup Location</option>
                  <option>Terminal 1</option>
                  <option>Anand Vihar</option>
                  <option>vasant Kunj</option>
                  <option>Kalka ji</option>
                  <option>Chawri Bazar</option>
                  <option>Sadar Bazar</option>
                </select>
              </div>
              <div className="flex flex-col w-[340px] ">
                <label className="font-bold mb-2" htmlFor="">
                  Drop-off
                </label>
                <select
                  className="border-2 p-2 text-[#838383]"
                  value={carInfo.dropOff}
                  onChange={(e) => {
                    setCarInfo({ ...carInfo, dropOff: e.target.value });
                  }}
                >
                  <option>Select Your Drop off Location</option>
                  <option>Terminal 1</option>
                  <option>Anand Vihar</option>
                  <option>vasant Kunj</option>
                  <option>Kalka ji</option>
                  <option>Chawri Bazar</option>
                  <option>Sadar Bazar</option>
                </select>
              </div>
              <div className="flex flex-col w-[340px] ">
                <label className="font-bold mb-2" htmlFor="">
                  Car Model
                </label>
                <select
                  className="border-2 p-2 text-[#838383]"
                  value={carInfo.carType}
                  onChange={(e) => {
                    setCarInfo({ ...carInfo, carType: e.target.value });
                  }}
                >
                  <option>Select Your Car Modal</option>
                  <option>Audi A1 S-line</option>
                  <option>Mercedez-Benz GLK</option>
                  <option>VW Golf 6</option>
                  <option>VW Passat CC</option>
                  <option>Toyota Camry</option>
                </select>
              </div>
              <div className="flex flex-col w-[340px] ">
                <label className="font-bold mb-2" htmlFor="">
                  Pick-up - Date
                </label>
                <input
                  className="border-2 p-2 text-[#838383]"
                  type="date"
                  value={carInfo.pickTime}
                  onChange={(e) => {
                    setCarInfo({ ...carInfo, pickTime: e.target.value });
                  }}
                />
              </div>
              <div className="flex flex-col w-[340px] ">
                <label className="font-bold mb-2" htmlFor="">
                  Drop-off - Date
                </label>
                <input
                  className="border-2 p-2 text-[#838383]"
                  type="date"
                  value={carInfo.dropTime}
                  onChange={(e) => {
                    setCarInfo({ ...carInfo, dropTime: e.target.value });
                  }}
                />
              </div>
              <div className="flex flex-col w-[340px] justify-end font-semibold">
                <button
                  onClick={openMOdal}
                  className="bg-[#ff4d30] p-2 text-white text-xl rounded"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="modal"
        className={`w-[100vw] h-[100vh] flex justify-center items-center absolute backdrop-blur-[2px] ${
          !modal ? "activeModal" : ""
        } top-[54%] fixed sm:px-3`}
      >
        <div className="booking-modal bg-white max-w-xl mx-auto border rounded-xl ">
          <div className="bg-[#ff4d30] text-white text-xl font-semibold py-2 px-4 rounded-t-xl flex justify-between items-center ">
            <h2>COMPLETE RESERVATION</h2>

            <MdClose onClick={closeModal} className="cursor-pointer text-2xl" />
          </div>
          <div className="bg-[#ff4c3036] py-5 px-4 flex flex-col gap-2 text-lg text-[#fffff] font-normal ">
            <h2 className="flex items-center gap-2 text-[#ff4d30] font-medium">
              <FaInfoCircle />
              Upon completing this reservation enquiry, you will receive:
            </h2>
            <p>
              Your rental voucher to produce on arrival at the rental desk and a
              toll-free customer support number.
            </p>
          </div>
          <div className="text-center py-6">
            <h2 className="text-2xl font-bold my-2">Booking Details</h2>
            <div className="flex justify-between w-full text-center px-5">
              <div>
                <h2>Car Name</h2>
                <h2>{carInfo.carType}</h2>
              </div>
              <div>
                <h2>Pickup</h2>
                <h2>
                  {carInfo.pickUp}({carInfo.pickTime})
                </h2>
              </div>
              <div>
                <h2>Drop off</h2>
                <h2>
                  {carInfo.dropOff}({carInfo.dropTime})
                </h2>
              </div>
            </div>
          </div>
          <hr className="w-[90%] mx-auto" />
          <div className="py-5">
            <h2 className="text-center py-2 text-xl font-bold">
              PERSONAL INFORMATION
            </h2>
            <div className="flex flex-wrap gap-4 justify-center w-full">
              <input
                className="bg-[#dbdbdb] w-[15rem] px-2 py-1 rounded"
                type="text"
                placeholder="Enter Your Full Name"
                value={userInfo.name}
                onChange={(e) => {
                  setUserInfo({ ...userInfo, name: e.target.value });
                }}
              />
              <input
                className="bg-[#dbdbdb] w-[15rem] px-2 py-1 rounded"
                type="text"
                placeholder="Enter Your Age"
                value={userInfo.age}
                onChange={(e) => {
                  setUserInfo({ ...userInfo, age: e.target.value });
                }}
              />
              <input
                className="bg-[#dbdbdb] w-[15rem] px-2 py-1 rounded"
                type="text"
                placeholder="Enter Your Email Address"
                value={userInfo.email}
                onChange={(e) => {
                  setUserInfo({ ...userInfo, email: e.target.value });
                }}
              />
              <input
                className="bg-[#dbdbdb] w-[15rem] px-2 py-1 rounded"
                type="text"
                placeholder="Enter Your Phone number"
                value={userInfo.phone}
                onChange={(e) => {
                  setUserInfo({ ...userInfo, phone: e.target.value });
                }}
              />
              <input
                className="bg-[#dbdbdb] w-[15rem] px-2 py-1 rounded"
                type="text"
                placeholder="Enter Your City name"
                value={userInfo.city}
                onChange={(e) => {
                  setUserInfo({ ...userInfo, city: e.target.value });
                }}
              />
              <input
                className="bg-[#dbdbdb] w-[15rem] px-2 py-1 rounded"
                type="text"
                placeholder="Enter Zip Code"
                value={userInfo.pincode}
                onChange={(e) => {
                  setUserInfo({ ...userInfo, pincode: e.target.value });
                }}
              />
              <button
                onClick={bookNowFunction}
                className="w-[12rem] bg-[#ff4d30] text-white text-xl font-semibold py-2 rounded "
              >
                Reserve Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
