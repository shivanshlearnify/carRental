import React, { useRef } from "react";
import HeroBanner from "../../components/heroBanner/HeroBanner";
import HeroBanner2 from "../../components/heroBanner2/HeroBanner2";

import Layout from "../../components/layout/Layout";
import ScrollTopArrow from "../../components/scrollTopArrow/ScrollTopArrow";
import toast from "react-hot-toast";

const Contact = () => {
  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const concernRef = useRef(null);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = () => {
    if (
      fullNameRef.current.value === "" ||
      emailRef.current.value === "" ||
      concernRef.current.value === ""
    ) {
      toast.error("All Feilds Are Required");
    } else if (!emailRegex.test(emailRef.current.value)) {
      toast.error("Enter a Valid Email");
    } else {
      toast.success(
        "We have successfully received your concern, and we are eager to enhance it further."
      );

      fullNameRef.current.value = "";
      emailRef.current.value = "";
      concernRef.current.value = "";
    }
  };

  return (
    <Layout>
      <HeroBanner name={"Contact Page"} />

      <ScrollTopArrow />
      <div className="flex max-w-7xl justify-between m-auto p-3 my-10 md:flex-col sm:flex-col md:gap-8 sm:gap-4">
        <div className="left w-1/3 flex flex-col gap-3 md:w-full sm:w-full">
          <h2 className="text-4xl font-extrabold">
            Need additional information?
          </h2>
          <p className="font-medium text-gray-500 ">
            An accomplished professional adept in various domains of research,
            development, and educational expertise, boasting over 15 years of
            extensive experience.
          </p>
          <p className="text-gray-500">
            <span className="font-bold">Phone:-</span>9876543210
          </p>
          <p className="text-gray-500">
            <span className="font-bold">Email:-</span>lorem@gmail.com
          </p>
          <p className="text-gray-500">
            <span className="font-bold">Location:-</span>Delhi, In
          </p>
        </div>
        <div className="right w-[600px] flex flex-col gap-3 md:mx-auto sm:w-full">
          <label className="text-2xl font-semibold" htmlFor="">
            Full Name
          </label>
          <input
            ref={fullNameRef}
            className="border py-2 px-3"
            type="text"
            placeholder="Enter here"
          />
          <label className="text-2xl font-semibold" htmlFor="">
            Email Address
          </label>
          <input
            ref={emailRef}
            className="border py-2 px-3"
            type="text"
            placeholder="Enter here"
          />
          <label className="text-2xl font-semibold" htmlFor="">
            Share your concern
          </label>
          <textarea
            ref={concernRef}
            className="border py-2 px-3"
            type="text"
            placeholder="Enter here"
            rows={6}
          />
          <button
            onClick={handleSubmit}
            className="w-full cursor-pointer px-4 py-2 bg-[#ff4d30] rounded-md text-white"
          >
            Send Message
          </button>
        </div>
      </div>
      <HeroBanner2 />
    </Layout>
  );
};

export default Contact;
