import React from "react";

const Footer = () => {
  return (
    <div className="flex max-w-7xl m-auto px-3 py-[100px] gap-10">
      <ul className="w-1/4 flex flex-col gap-3">
        <li className=" text-xl font-bold">CAR Rental</li>
        <li className="font-medium text-gray-500">
          We offers a big range of vehicles for all your driving needs. We have
          the perfect car to meet your needs.
        </li>
        <li className="font-bold cursor-pointer">+91 7894561239</li>
        <li className="font-bold cursor-pointer">lorem@gmail.com</li>
      </ul>
      <ul className="w-1/4 flex flex-col gap-3">
        <li className=" text-xl font-bold">Company</li>
        <li className="font-medium text-gray-500">Delhi, In</li>
        <li className="font-medium text-gray-500">Careers</li>
        <li className="font-medium text-gray-500">Blog</li>
        <li className="font-medium text-gray-500">How we work</li>
      </ul>
      <ul className="w-1/4 flex flex-col gap-3">
        <li className=" text-xl font-bold">WORKING HOURS</li>
        <li className="font-medium text-gray-500">
          Mon - Fri: 9:00AM - 9:00PM
        </li>
        <li className="font-medium text-gray-500">Sat: 9:00AM - 19:00PM</li>
        <li className="font-medium text-gray-500">Sun: Closed</li>
      </ul>
      <ul className="w-1/4 flex flex-col gap-3  ">
        <li className=" text-xl font-bold">Subscription</li>
        <li className="font-medium text-gray-500">
          Subscribe your Email address for latest news & updates.
        </li>
        <li className="w-full">
          <input className="border w-full px-4 py-2" type="text" placeholder="Enter Email Address " />{" "}
        </li>
        <li>
          <button className="w-full cursor-pointer px-4 py-2 bg-[#ff4d30] text-white">Submit</button>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
