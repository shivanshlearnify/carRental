import React from "react";
import icon1 from "../../assets/planicon1.png";
import icon2 from "../../assets/planicon2.png";
import icon3 from "../../assets/planicon3.png";

const PlanSection = () => {
  return (
    <div className="max-w-6xl m-auto flex flex-col items-center">
      <div className="flex flex-col items-center">
        <div className="head1 text-2xl font-semibold mt-[11rem] ">
          Plan Your Trip now
        </div>
        <div className="head2 text-5xl font-extrabold mt-[1rem] mb-[3rem] text-center ">
          Quick & easy car rental
        </div>
      </div>
      <div className="lg:flex gap-[8.25rem] ">
        <div className="1 flex flex-col items-center">
          <img className="max-h-[180px] h-full" src={icon1} alt="" />
          <div className="head1 text-2xl font-bold mb-[10px] ">Select Car</div>
          <div className="head2 text-gray-500 text-center px-2">
            We offers a big range of vehicles for all your driving needs. We
            have the perfect car to meet your needs
          </div>
        </div>
        <div className="1 flex flex-col items-center">
          <img className="max-h-[180px] h-full" src={icon2} alt="" />
          <div className="head1 text-2xl font-bold mb-[10px] ">
            Contact Operator
          </div>
          <div className="head2  text-gray-500 text-center px-2">
            Our knowledgeable and friendly operators are always ready to help
            with any questions or concerns
          </div>
        </div>
        <div className="1 flex flex-col items-center">
          <img className="max-h-[180px] h-full" src={icon3} alt="" />
          <div className="head1 text-2xl font-bold mb-[10px] ">Let's Drive</div>
          <div className="head2  text-gray-500 text-center px-2">
            Whether you're hitting the open road, we've got you covered with our
            wide range of cars
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanSection;
