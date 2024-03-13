import React from "react";
import bg from "../../assets/book-banner.png";

const backgroundStyle = {
  backgroundImage: `url(${bg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

const HeroBanner2 = () => {
  return (
    <div className=" h-[200px] mt-20" style={backgroundStyle}>
      <div className="bg-[#00000048] h-[200px] w-full">
        <div className="max-w-4xl mx-auto pt-20">
          <h2 className="text-white text-3xl font-bold">
            Book a car by getting in touch with us{" "}
            <span className="text-[#ff4d30] cursor-pointer">
              {" "}
              +91 9876543210
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner2;
