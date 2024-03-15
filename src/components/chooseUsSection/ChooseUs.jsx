import React from "react";
import bg from "../../assets/Choosebg.png";
import main from "../../assets/ChooseMain.png";
import icon1 from "../../assets/Chooseicon1.png";
import { useNavigate } from "react-router-dom";

const backgroundStyle = {
  backgroundImage: `url(${bg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "-2% 129%",
};
const ChooseUs = () => {
  const navigate = useNavigate();
  return (
    <div className=" mx-auto px-4 pb-[126px]" style={backgroundStyle}>
      <div className="max-w-7xl mx-auto">
        <div>
          <img className="w-[100%] m-auto " src={main} alt="" />
        </div>
        <div className="max-w-5xl m-auto flex gap-[65px] mt-[3.5rem] sm:flex-col ">
          <div className="left w-1/2 sm:w-full sm:flex sm:flex-col sm:items-center">
            <p className="text-2xl font-bold mb-3">Why Choose Us</p>
            <h1 className="text-5xl font-bold sm:text-center">
              Best valued deals you will ever find
            </h1>
            <p className="text-gray-500 py-6 sm:text-center">
              Discover the best deals you'll ever find with our unbeatable
              offers. We're dedicated to providing you with the best value for
              your money, so you can enjoy top-quality services and products
              without breaking the bank. Our deals are designed to give you the
              ultimate renting experience, so don't miss out on your chance to
              save big.
            </p>
            <button
              onClick={() => navigate("/about")}
              className="bg-[#ff4d30] rounded text-white text-[24px] font-bold py-[8px] px-[30px] shadow-[#ff4d30] shadow-2xl	 "
            >
              Find Details
            </button>
          </div>
          <div className="right w-1/2 sm:w-full">
            <div className="one flex gap-8 mb-5">
              <div className="icon">
                <img className="w-[15rem] " src={icon1} alt="" />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-3">Cross Country Drive</h2>
                <p className="text-gray-500 font-medium">
                  Take your driving experience to the next level with our
                  top-notch vehicles for your cross-country adventures.
                </p>
              </div>
            </div>
            <div className="one flex gap-8 mb-5">
              <div className="icon">
                <img className="w-[15rem] " src={icon1} alt="" />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-3">
                  All Inclusive Pricing
                </h2>
                <p className="text-gray-500 font-medium">
                  Get everything you need in one convenient, transparent price
                  with our all-inclusive pricing policy.
                </p>
              </div>
            </div>
            <div className="one flex gap-8 mb-5">
              <div className="icon">
                <img className="w-[15rem] " src={icon1} alt="" />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-3">No Hidden Charges</h2>
                <p className="text-gray-500 font-medium">
                  Enjoy peace of mind with our no hidden charges policy. We
                  believe in transparent and honest pricing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
