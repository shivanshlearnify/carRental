import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import bg from "../../assets/car.png";

const backgroundStyle = {
  backgroundImage: `url(${bg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "0 96%",
};

const Faq = () => {
  const [qid, setQId] = useState(1);

  const handleid = (id) => {
    setQId(qid === id ? "" : id);
  };
  const setActiveQs = (id) => {
    return qid === id ? "active-question" : "";
  };
  const setAnswer = (id) => {
    return qid === id ? "active-answer" : "answer";
  };

  return (
    <div style={backgroundStyle}>
      <div className="max-w-3xl mx-auto px-3 flex flex-col items-center gap-3 mb-10">
        <h3 className="text-xl font-bold mt-12">Faq</h3>
        <h1 className="text-4xl font-bold sm:text-center">Frequently Asked Questions</h1>
        <p className="text-center	text-xl font-medium text-gray-500 ">
          Frequently Asked Questions About the Car Rental Booking Process on Our
          Website: Answers to Common Concerns and Inquiries.
        </p>
        <div className="w-full shadow-2xl  my-8 flex flex-col bg-[#f8f8f8]">
          <div
            className={`question flex justify-between text-xl font-medium px-8 pt-4 pb-4 cursor-pointer ${setActiveQs(
              1
            )}`}
            onClick={() => handleid(1)}
          >
            <h2>1. What is special about comparing rental car deals?</h2>
            <IoIosArrowDown />
          </div>
          <div className={`${setAnswer(1)}`}>
            Comparing rental car deals is important as it helps find the best
            deal that fits your budget and requirements, ensuring you get the
            most value for your money. By comparing various options, you can
            find deals that offer lower prices, additional services, or better
            car models. You can find car rental deals by researching online and
            comparing prices from different rental companies.
          </div>
          <div
            className={`question flex justify-between text-xl font-medium px-8 py-4 cursor-pointer ${setActiveQs(
              2
            )}`}
            onClick={() => handleid(2)}
          >
            <h2>2. How do I find the car rental deals?</h2>
            <IoIosArrowDown />
          </div>
          <div className={`${setAnswer(2)}`}>
            You can find car rental deals by researching online and comparing
            prices from different rental companies. Websites such as Expedia,
            Kayak, and Travelocity allow you to compare prices and view
            available rental options. It is also recommended to sign up for
            email newsletters and follow rental car companies on social media to
            be informed of any special deals or promotions.
          </div>
          <div
            className={`question flex justify-between text-xl font-medium px-8 pt-4 pb-4 cursor-pointer ${setActiveQs(
              3
            )}`}
            onClick={() => handleid(3)}
          >
            <h2>3. How do I find such low rental car prices?</h2>
            <IoIosArrowDown />
          </div>
          <div className={`${setAnswer(3)}`}>
            Book in advance: Booking your rental car ahead of time can often
            result in lower prices. Compare prices from multiple companies: Use
            websites like Kayak, Expedia, or Travelocity to compare prices from
            multiple rental car companies. Look for discount codes and coupons:
            Search for discount codes and coupons that you can use to lower the
            rental price. Renting from an off-airport location can sometimes
            result in lower prices.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
