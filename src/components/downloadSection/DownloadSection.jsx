import React from "react";
import bg from "../../assets/downloadbg.png";
import appstore from "../../assets/appstore.svg";
import googletore from "../../assets/googleapp.svg";

const backgroundStyle = {
  backgroundImage: `url(${bg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "45% 222%",
};

const DownloadSection = () => {
  return (
    <div className="dSection bg-[#f8f8f8] py-24 h-[620px]" style={backgroundStyle}>
      <div className="max-w-7xl m-auto px-3">
        <div className="max-w-lg ">
          <h1 className="text-5xl font-bold sm:text-center">
            Download our app to get most out of it
          </h1>
          <p className="font-medium text-gray-500 my-5 sm:text-center">
            Thrown shy denote ten ladies though ask saw. Or by to he going think
            order event music. Incommode so intention defective at convinced.
            Led income months itself and houses you.
          </p>
          <div className="flex gap-5 sm:flex-col">
            <img className="sm:w-[180px] sm:mx-auto" src={appstore} alt="" />
            <img className="sm:w-[180px] sm:mx-auto" src={googletore} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;
