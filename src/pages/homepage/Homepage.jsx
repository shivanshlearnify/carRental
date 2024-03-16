import React from "react";
import HeroComponent from "../../components/heroComponent/HeroComponent";
import Booking from "../../components/booking/Booking";
import PlanSection from "../../components/planSection/PlanSection";
import SloganBanner from "../../components/sloganBanner/SloganBanner";
import ChooseUs from "../../components/chooseUsSection/ChooseUs";
import Testimonial from "../../components/testimonial/Testimonial";
import DownloadSection from "../../components/downloadSection/DownloadSection";
import Faq from "../../components/faq/Faq";
import VehicleModelComponent from "../../components/vehicleModelComponent/VehicleModelComponent";
import Layout from "../../components/layout/Layout";
import ScrollTopArrow from "../../components/scrollTopArrow/ScrollTopArrow";

const Homepage = () => {
  
  return (
    <Layout>
      <HeroComponent />
      <ScrollTopArrow/>
      <Booking />
      <PlanSection />
      <VehicleModelComponent/>
      <SloganBanner />
      <ChooseUs />
      <Testimonial />
      <Faq/>
      <DownloadSection />
    </Layout>
  );
};

export default Homepage;
