import React from "react";
import { servicesCon } from "../assets/assets";
import { motion } from "motion/react";
const Project = () => {
  return (
    <motion.div initial={{ y:100}} transition={{delay:0.2 ,duration:1}} whileInView={{y:0}} viewport={{once:true}}
     className=" flex flex-col items-center justify-center
     bg-pink-50/50 py-10 px-10 ">
    <h1 className="text-4xl font-semibold py-4">Projects</h1>
    <hr className="border-t-2 border-red-600 w-32 my-2 " />
      <motion.div initial={{ y:100}} transition={{delay:0.6,duration:1}} whileInView={{y:0}} viewport={{once:true}}
       className=" flex  gap-10 py-7">
        {servicesCon.map((item, i) => (
          <div key={i} className="flex flex-col justify-center items-center gap-5">
            <img src={item.image} alt="" className="rounded-full w-20 h-20 sm:h-28 sm:w-28 " />
            <h2 className="text-lg font-semibold">{item.heading}</h2>
            <p className="text-start md:text-base text-sm">{item.desc}</p>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Project;
