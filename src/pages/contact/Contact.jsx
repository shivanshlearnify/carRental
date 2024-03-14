import React from "react";
import HeroBanner from "../../components/heroBanner/HeroBanner";
import HeroBanner2 from "../../components/heroBanner2/HeroBanner2";

const Contact = () => {
  return (
    <div>
      <HeroBanner name={"Contact Page"} />
      <div className="flex max-w-7xl justify-between m-auto p-3 my-10 md:flex-col sm:flex-col md:gap-8 sm:gap-4">
        <div className="left w-1/3 flex flex-col gap-3 md:w-full sm:w-full">
          <h2 className="text-4xl font-extrabold">Need additional information?</h2>
          <p className="font-medium text-gray-500 ">
            A multifaceted professional skilled in multiple fields of research,
            development as well as a learning specialist. Over 15 years of
            experience.
          </p>
          <p className="text-gray-500"><span className="font-bold">Phone:-</span>9876543210</p>
          <p className="text-gray-500"><span className="font-bold">Email:-</span>lorem@gmail.com</p>
          <p className="text-gray-500"><span className="font-bold">Location:-</span>Delhi, In</p>
        </div>
        <div className="right w-[600px] flex flex-col gap-3 md:mx-auto sm:w-full">
          <label className="text-2xl font-semibold"  htmlFor="">Full Name</label>
          <input className="border py-2 px-3" type="text" placeholder="Enter here"/>
          <label className="text-2xl font-semibold"  htmlFor="">Email Address</label>
          <input className="border py-2 px-3" type="text" placeholder="Enter here"/>
          <label className="text-2xl font-semibold"  htmlFor="">Share your concern</label>
          <textarea className="border py-2 px-3" type="text" placeholder="Enter here" rows={6}/>
          <button className="w-full cursor-pointer px-4 py-2 bg-[#ff4d30] rounded-md text-white">Send Message</button>
        </div>
      </div>
      <HeroBanner2 />
    </div>
  );
};

export default Contact;
