import React from "react";
import HeroBanner from "../../components/heroBanner/HeroBanner";

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
];

const Vehicle = () => {
  return (
    <div>
      <HeroBanner name={"Vehicle"} />
    </div>
  );
};

export default Vehicle;
