import React from "react";
import { useNavigate } from "react-router-dom";

const backgroundStyle = {
  backgroundImage: `url('https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "0% 39%",
};

const HeroBanner = ({ name }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#f8f8f8]">
      <div className="h-[450px]" style={backgroundStyle}>
        <div className="bg-[#f8f8f85d] h-[450px]">
          <div className="max-w-7xl m-auto px-3 pt-[180px] ">
            <h2 className="text-4xl font-bold">{name}</h2>
            <h2 className="text-2xl font-semibold mt-2">
              <span className="cursor-pointer " onClick={() => navigate("/")}>
                Home
              </span>
              /{name}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
