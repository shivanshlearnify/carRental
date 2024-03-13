import React from "react";
import bg from "../../assets/downloadbg.png";
import appstore from "../../assets/appstore.svg";
import googletore from "../../assets/googleapp.svg";

const backgroundStyle = {
  backgroundImage: `url(${bg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "92% 0%",
};

const DownloadSection = () => {
  return (
    <div className="bg-[#f8f8f8] py-24" style={backgroundStyle}>
      <div className="max-w-7xl m-auto px-3">
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold">
            Download our app to get most out of it
          </h1>
          <p className="font-medium text-gray-500 my-5">
            Thrown shy denote ten ladies though ask saw. Or by to he going think
            order event music. Incommode so intention defective at convinced.
            Led income months itself and houses you.
          </p>
          <div className="flex gap-5">
            <img src={appstore} alt="" />
            <img src={googletore} alt="" />
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;
