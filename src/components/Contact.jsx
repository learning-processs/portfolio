import React from "react";
import { allImage } from "../assets/assets";
import { motion } from "motion/react"

const Contact = () => {
  return (
    <motion.div initial={{opacity:0.2, y:100}} transition={{delay:0.9,duration:1}} whileInView={{opacity:1,y:0}} viewport={{once:false}}
     className="w-full flex flex-col items-center justify-center mb-10" id="contact">
      <h1 className=" text-4xl font-semibold py-4">Contact</h1>
      <hr className="border-t-2 border-red-600 w-32 my-2 " />
      <div className="w-full flex  py-10">
            {/* text */}
            <div className="flex flex-col items-center justify-center gap-5 w-[50%]">
            <p className="">Deoria, Uttar Pradesh</p>
            <div className="flex gap-2">
                <img src={allImage.phone} alt="" className="h-5" />
                <p className="">111-2222-333</p>
            </div>
            <p className=""> Mon-Fri - 08:00-19:00</p>
            </div>
            {/* form */}
            <form className="w-[50%] max-w-lg flex-col flex gap-4 pr-5 mx-auto">
                <div className="flex-col sm:flex-row  justify-between items-center ">
                    <input type="text" placeholder="Name" className="border py-2 px-2 border-gray-300 w-full my-4"/>
                    <input type="text" placeholder="Phone" className="border py-2 px-2 border-gray-300 w-full"/>
                </div>
                <input type="email" placeholder="Email address" className="border py-2 px-2 border-gray-300" />
                <textarea placeholder="Message" className="border py-2 px-2 border-gray-300"></textarea>
                <div className="flex justify-center items-center w-full">
                    <button className="bg-red-600 w-full py-2">CONTACT US</button>
                </div>
            </form>
      </div>
    </motion.div>
  );
};

export default Contact;
