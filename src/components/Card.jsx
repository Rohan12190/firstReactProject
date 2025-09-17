/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function Card({width,hover="false", para, start}) {
  return (
    <motion.div whileHover={{backgroundColor: hover==="true" && "#7443ff", padding:"25px" }} className={`${width} bg-zinc-700 rounded-xl p-5 min-h-96 flex flex-col justify-between`}>
      <div className="w-full">
        <div className="flex items-center justify-between">
          <h4>Up Next: Culture</h4>
          <FaArrowRightLong />
        </div>
        <h3 className="text-[2.2vw] tracking-tight font-medium mt-3">Some heading</h3>
      </div> 

      <div className="down w-full">
        {start && (
            <>
            <h1 className="text-8xl leading-none tracking-tight font-medium">Start a Project</h1>
            <button className="rounded-full py-2 px-5 mt-5 border-[1px] border-zinc-400">Contact Us</button>
            </>)
            }

            {para && (<p className="font-medium text-sm text-zinc-500">Lorem ipsum dolor sit amet.</p>)}
        
        
      </div>
    </motion.div>
  );
}

export default Card;
