/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import React from "react";

function Marquee({ imageUrl, direction }) {
  return (
    <div className="w-full flex overflow-hidden">
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", repeat: Infinity, duration: 30 }}
        // The 'gap-20' is removed from here
        className="flex flex-shrink-0 items-center py-8"
      >
        {imageUrl.map((elem, idx) => (
          // 'mr-20' is added here to give every image consistent spacing
          <img key={idx} src={elem} className="w-[7vw] flex-shrink-0 mr-20" alt="" />
        ))}
      </motion.div>

      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", repeat: Infinity, duration: 30 }}
        // The 'gap-20' is removed from here too
        className="flex flex-shrink-0 items-center py-8"
      >
        {imageUrl.map((elem, idx) => (
          // 'mr-20' is also added here for consistency
          <img key={idx} src={elem} className="w-[7vw] flex-shrink-0 mr-20" alt="" />
        ))}
      </motion.div>
    </div>
  );
}

export default Marquee;