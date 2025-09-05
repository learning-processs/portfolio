import React from 'react'
import { allImage } from '../assets/assets'
import { motion } from 'motion/react'

const Services = () => {
  return (
    <div className='flex w-full ' id='service'>
        {/* text */}
        <motion.div initial={{opacity:0.2, y:100}} transition={{duration:1}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
         className="flex flex-col items-center justify-center gap-4  w-[40%] max-lg:px-8 text-center">
            <h1 className="md:text-4xl sm:text-2xl text-base font-semibold ">Discover My Work</h1>
            <hr className="border-t-2 border-red-600 sm:w-32  w-14" />
            <p className=' text-xs md:text-base '>Where Vision Meets Creativity.</p>
        </motion.div>
        {/* image */}
        <div className=" w-[60%] ">
            <img src={allImage.me} alt="" className="h-auto w-full " />
        </div>
    </div>
  )
}

export default Services
