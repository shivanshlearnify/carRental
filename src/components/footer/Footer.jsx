import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const [email, setemail] = useState("");
  const navigate = useNavigate();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e) => {
    setemail(e.target.value);
  };

  const handleToast = () => {
    if (!emailRegex.test(email)) {
      toast.error("Please add a valid Email");
    } else {
      email === ""
        ? toast.error("Please add a Email to subscribe")
        : toast.success(`Successfully Subscribed for ${email} Email`);
      setemail("");
    }
  };
  return (
    <div className="flex max-w-7xl m-auto px-3 py-[100px] gap-10 sm:flex-col">
      <ul className="w-1/4 flex flex-col gap-3 sm:w-full">
        <li className=" text-xl font-bold">UrbanDrive</li>
        <li className="font-medium text-gray-500">
          We provide an extensive selection of vehicles tailored to suit all
          your driving requirements. Whatever your needs may be, we offer the
          ideal car to match them perfectly.
        </li>
        <li className="font-bold cursor-pointer">+91 7894561239</li>
        <li className="font-bold cursor-pointer">UrbanDrive@gmail.com</li>
      </ul>
      <ul className="w-1/4 flex flex-col gap-3 sm:w-full">
        <li className=" text-xl font-bold">Company</li>
        <li className="font-medium text-gray-500">Delhi, In</li>
        <li
          className="font-medium text-gray-500 cursor-pointer"
          onClick={() => navigate("/contact")}
        >
          Careers
        </li>
        <li
          className="font-medium text-gray-500 cursor-pointer"
          onClick={() => navigate("/testimonial")}
        >
          Blog
        </li>
        <li
          className="font-medium text-gray-500 cursor-pointer"
          onClick={() => navigate("/contact")}
        >
          How we work
        </li>
      </ul>
      <ul className="w-1/4 flex flex-col gap-3 sm:w-full">
        <li className=" text-xl font-bold">WORKING HOURS</li>
        <li className="font-medium text-gray-500">
          Mon - Fri: 9:00AM - 9:00PM
        </li>
        <li className="font-medium text-gray-500">Sat: 9:00AM - 19:00PM</li>
        <li className="font-medium text-gray-500">Sun: Closed</li>
      </ul>
      <ul className="w-1/4 flex flex-col gap-3  sm:w-full">
        <li className=" text-xl font-bold">Subscription</li>
        <li className="font-medium text-gray-500">
          Subscribe your Email address for latest news & updates.
        </li>
        <li className="w-full">
          <input
            className="border w-full px-4 py-2"
            type="text"
            placeholder="Enter Email Address "
            value={email}
            onChange={handleChange}
          />
        </li>
        <li>
          <button
            onClick={handleToast}
            className="w-full cursor-pointer px-4 py-2 bg-[#ff4d30] text-white"
          >
            Submit
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
