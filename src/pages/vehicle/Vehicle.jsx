import React from "react";
import HeroBanner from "../../components/heroBanner/HeroBanner";
import HeroBanner2 from "../../components/heroBanner2/HeroBanner2";

const data = [
  {
    img: "https://www.livemint.com/lm-img/img/2023/10/18/600x338/2024_GLE_SUV_1697612413085_1697612418916.webp",
    carName: "Mercedes Benz GLE SUV",
    rate: "8500",
    company: "Mercedes",
  },
  {
    img: "https://stimg2.cardekho.com/images/carNewsEditorImages/816x544/20190809_193414/24143/jeep0.jpg",
    carName: "Jeep Wrangler",
    rate: "8500",
    company: "Jeep",
  },
  {
    img: "https://preview.redd.it/can-we-all-agree-mk5-mk4-v0-ectoidxohw2b1.png?width=1080&crop=smart&auto=webp&s=86236d2784a71329406e93412e8e047b60c5c715",
    carName: "Supra mk 5",
    rate: "10500",
    company: "Toyota",
  },
  {
    img: "https://www.livemint.com/lm-img/img/2023/10/18/600x338/2024_GLE_SUV_1697612413085_1697612418916.webp",
    carName: "Mercedes Benz GLE SUV",
    rate: "8500",
    company: "Mercedes",
  },
  {
    img: "https://stimg2.cardekho.com/images/carNewsEditorImages/816x544/20190809_193414/24143/jeep0.jpg",
    carName: "Jeep Wrangler",
    rate: "8500",
    company: "Jeep",
  },
  {
    img: "https://preview.redd.it/can-we-all-agree-mk5-mk4-v0-ectoidxohw2b1.png?width=1080&crop=smart&auto=webp&s=86236d2784a71329406e93412e8e047b60c5c715",
    carName: "Supra mk 5",
    rate: "10500",
    company: "Toyota",
  },
];

const Vehicle = () => {
  return (
    <div>
      <HeroBanner name={"Vehicle"} />
      <div className="max-w-6xl mx-auto p-3 flex flex-wrap gap-12 my-20">
        {data.map((item, index) => (
          <div className="max-w-[528px] w-full rounded-t-md rounded-b-md cursor-pointer shadow-2xl" key={index}>
            <img
              className="max-w-[528px] w-full h-[300px] rounded-t-md"
              src={item.img}
              alt={item.company}
            />
            <div className="mt-8 flex flex-col gap-5">
              <div className="flex justify-between px-5 text-xl font-bold">
                <h2 className="">{item.carName}</h2>
                <span>{item.rate}/day</span>
              </div>
              <div className="flex justify-between px-5 font-medium text-gray-500">
                <h2>{item.company}</h2>
                <p>
                  <span>Rating:-</span>4/5
                </p>
              </div>
              <div className="flex justify-between px-5 font-medium text-gray-500">
                <h2>
                  <span>Transmission:-</span>Manual
                </h2>
                <h2>
                  <span>Fuel Type:-</span>Deisel
                </h2>
              </div>
              <div>
              <button className="w-full cursor-pointer px-4 py-2 bg-[#ff4d30] rounded-b-md text-white">Book a ride</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <HeroBanner2 />
    </div>
  );
};

export default Vehicle;
