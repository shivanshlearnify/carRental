import React from "react";

import { FaCircleArrowUp } from "react-icons/fa6";
const ScrollTopArrow = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div
      className="fixed right-[16px] bottom-[40px] text-4xl cursor-pointer text-[#ff4d30]"
      onClick={handleScrollToTop}
    >
      <FaCircleArrowUp />
    </div>
  );
};

export default ScrollTopArrow;
