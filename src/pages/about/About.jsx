import React from "react";
import HeroBanner from "../../components/heroBanner/HeroBanner";
import PlanSection from "../../components/planSection/PlanSection";
import HeroBanner2 from "../../components/heroBanner2/HeroBanner2";
import Layout from "../../components/layout/Layout";
import ScrollTopArrow from "../../components/scrollTopArrow/ScrollTopArrow";

const About = () => {
  return (
    <Layout>
      <HeroBanner name={"About"} />

      <ScrollTopArrow />
      <div className="flex max-w-5xl m-auto gap-10 pt-20 px-3 sm:flex-col">
        <img
          className="w-1/2 rounded-md sm:w-full"
          src="https://www.investopedia.com/thmb/_ZgPLxMwZVDlKmEbARS5bhv4PG0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/car-dealer-showing-new-car-6938e02d5076488e91d38edb72054770.jpeg"
          alt=""
        />
        <div className="w-1/2 sm:w-full">
          <h1 className="text-3xl font-bold sm:text-center">
            About Car Rental
          </h1>
          <p className="font-medium text-gray-500 mt-5">
            Car Rental is your premier destination for convenient, reliable, and
            affordable transportation solutions. With a commitment to
            exceptional service and a fleet of top-quality vehicles, we strive
            to exceed your expectations with every rental.
            <br />
            At Car Rental, we understand that flexibility and convenience are
            paramount when it comes to your travel needs. Whether you're
            planning a weekend getaway, a business trip, or simply need a
            temporary replacement vehicle, we have you covered. Our extensive
            selection of cars includes compact sedans, spacious SUVs, sleek
            luxury vehicles, and more, ensuring that you'll find the perfect
            ride for any occasion.
          </p>
        </div>
      </div>
      <PlanSection />
      <HeroBanner2 />
    </Layout>
  );
};

export default About;
