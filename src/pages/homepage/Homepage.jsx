import React from "react";
import HeroComponent from "../../components/heroComponent/HeroComponent";
import Booking from "../../components/booking/Booking";
import PlanSection from "../../components/planSection/PlanSection";
import SloganBanner from "../../components/sloganBanner/SloganBanner";
import ChooseUs from "../../components/chooseUsSection/ChooseUs";
import Testimonial from "../../components/testimonial/Testimonial";
import DownloadSection from "../../components/downloadSection/DownloadSection";

const Homepage = () => {
  return (
    <div>
      <HeroComponent />
      <Booking />
      <PlanSection />
      <SloganBanner />
      <ChooseUs />
      <Testimonial />
      <DownloadSection />
    </div>
  );
};

export default Homepage;
