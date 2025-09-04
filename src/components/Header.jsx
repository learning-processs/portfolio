import React from "react";

import { allImage } from "../assets/assets";
import { motion } from "motion/react";
const Header = () => {
  return (
    <div  
     className="relative h-full  " id="home">
      {/* Background */}
      <div className="h-[50vh] bg-cover"
      style={{backgroundImage: `url(${allImage.top_bg})`}}>
      </div>
      {/* OverLay Card */}
      <motion.div  
       className="absolute top-72 left-1/2 -translate-x-1/2 flex justify-center items-center max-w-lg z-10">
        <div className=" flex flex-col w-full  rounded-2xl shadow-lg px-14 py-8 sm:px-20 sm:py-14  bg-white text-center items-center">
          <h1 className=" max-sm:text-lg text-lg md:text-3xl font-semibold text-gray-800">Welcome to My Portfolio</h1>
          <hr className=" border border-red-400 my-4 w-20 border-t-2 md:border-t-4" />
          <p className="max-sm:text-sm text-gray-500">Showcasing Talent and Dedication.</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
