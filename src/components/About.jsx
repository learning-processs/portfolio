import React from "react";
import { allImage } from "../assets/assets";
import { motion } from "motion/react";
import { useInView } from "motion/react";

const About = () => {
  
  return (
    <div 
     className="bg-pink-50" id="about">
      <motion.div initial={{opacity:0.2, y:100}} whileInView={{opacity:1, y:0}} transition={{duration:1}}  viewport={{once:true}}
        id="about"
        className="relative w-full max-w-4xl sm:py-64 py-40 mx-auto overflow-x-hidden 
    max-lg:px-8 max-md:px-4 
    "
      >
        {/* BackGround Image */}
        <img
          src={allImage.aboutMe}
          alt=""
          className="w-full h-64 md:h-96 object-cover rounded-xl  "
        />

        {/* Overly Card */}
        <motion.div 
          className="  absolute top-1/2 left-1/3 -translate-x-1/2 bg-white bg-opacity-90 shadow-lg
      p-6 md:p-12 rounded-lg md:mx-14 sm:mx-7  mx-7"
        >
          <h2 className="text-2xl md:text-3xl mb-2 text-gray-900 font-semibold ">
            About Me
          </h2>
          <hr className="border-t-2 border-orange-400 w-16 mb-4" />
          <p className="text-gray-600 max-sm:text-xs max-sm:h-20 max-sm:overflow-y-scroll max-sm:scrollbar-hide">
            I am a dedicated professional who strives to excel in my field. My
            portfolio showcases a variety of projects where creativity meets
            functionality, demonstrating my skills and passion for delivering
            outstanding solutions. With a deep commitment to learning and
            growth, I aim to connect with others and contribute positively to
            the industry.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
