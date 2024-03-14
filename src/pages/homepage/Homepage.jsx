import React from "react";
import HeroComponent from "../../components/heroComponent/HeroComponent";
import Booking from "../../components/booking/Booking";
import PlanSection from "../../components/planSection/PlanSection";
import SloganBanner from "../../components/sloganBanner/SloganBanner";
import ChooseUs from "../../components/chooseUsSection/ChooseUs";
import Testimonial from "../../components/testimonial/Testimonial";
import DownloadSection from "../../components/downloadSection/DownloadSection";
import { FaCircleArrowUp } from "react-icons/fa6";
import Faq from "../../components/faq/Faq";
import VehicleModelComponent from "../../components/vehicleModelComponent/VehicleModelComponent";

const Homepage = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div>
      <HeroComponent />
      <div className="fixed right-[24px] text-4xl cursor-pointer text-[#ff4d30]" onClick={handleScrollToTop}>
        <FaCircleArrowUp />
      </div>
      <Booking />
      <PlanSection />
      <VehicleModelComponent/>
      <SloganBanner />
      <ChooseUs />
      <Testimonial />
      <Faq/>
      <DownloadSection />
    </div>
  );
};

export default Homepage;
