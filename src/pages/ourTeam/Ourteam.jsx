import React from "react";
import HeroBanner from "../../components/heroBanner/HeroBanner";
import HeroBanner2 from "../../components/heroBanner2/HeroBanner2";

import Person1 from "../../assets/1.png";
import Person2 from "../../assets/2.png";
import Person3 from "../../assets/3.png";
import Person4 from "../../assets/4.png";
import Person5 from "../../assets/5.png";
import Person6 from "../../assets/6.png";
import Layout from "../../components/layout/Layout";

const teamPpl = [
  { img: Person1, name: "Luke Miller", job: "Salesman" },
  { img: Person2, name: "Michael Diaz", job: "Business Owner" },
  { img: Person3, name: "Briana Ross", job: "Photographer" },
  { img: Person4, name: "Lauren Rivera", job: "Car Detailist" },
  { img: Person5, name: "Martin Rizz", job: "Mechanic" },
  { img: Person6, name: "Caitlyn Hunt", job: "Menager" },
];

const Ourteam = () => {
  return (
    <Layout>
      <HeroBanner name={"Our Team"} />
      <div className="flex flex-wrap max-w-6xl mx-auto gap-8 my-20 px-4">
        {teamPpl.map((ppl, index) => (
          <div
            key={index}
            className="rounded-t-md rounded-b-md cursor-pointer shadow-2xl mx-auto"
          >
            <img className="bg-[#ff9d9d] rounded-t-md" src={ppl.img} alt={ppl.name} />
            <div className="max-w-[160px] mx-auto flex flex-col items-center my-8">
              <h2 className="text-2xl font-bold">{ppl.name}</h2>
              <h2 className="font-medium text-gray-500">{ppl.job}</h2>
            </div>
          </div>
        ))}
      </div>
      <HeroBanner2 />
    </Layout>
  );
};

export default Ourteam;
