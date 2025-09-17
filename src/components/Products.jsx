/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion"; 

// Import videos
import ArqitelVideo from "/src/assets/videos/Arqitel.webm";
import CulaVideo from "/src/assets/videos/yir.webm"; 
import LayoutLandVideo from "/src/assets/videos/webflow.mp4"; 
import TTRVideo from "/src/assets/videos/ttr.webm";
import ManivVideo from "/src/assets/videos/yahoo.webm"; 

function Products() {
  const prod = [
    {
      title: "Arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      isLive: true,
      isCase: false,
      video: ArqitelVideo,
    },
    {
      title: "Cula",
      description:
        "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
      isLive: true,
      isCase: true,
      video: CulaVideo,
    },
    {
      title: "Layout Land",
      description:
        "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
      isLive: true,
      isCase: true,
      video: LayoutLandVideo,
    },
    {
      title: "TTR",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      isLive: true,
      isCase: false,
      video: TTRVideo,
    },
    {
      title: "Maniv",
      description:
        "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
      isLive: true,
      isCase: true,
      video: ManivVideo,
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const mover = (index) => {
    setHoveredIndex(index);
  };

  const pos = hoveredIndex !== null ? hoveredIndex * 23 : 0;
  const isHovering = hoveredIndex !== null;

  return (
    <div
      onMouseLeave={() => setHoveredIndex(null)}
      className="py-15 mt-16 relative"
    >
      {prod.map((elem, idx) => (
        <Product key={idx} elem={elem} mover={mover} count={idx} />
      ))}
      <div className="w-full h-full absolute top-0 pointer-events-none">
        {/* The "Window" for the video */}
        <motion.div
          initial={{ y: 0, x: "-50%", scale: 0 }}
          animate={{ y: pos + `rem`, scale: isHovering ? 1 : 0 }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className="w-96 h-[23rem] left-[44%] absolute overflow-hidden"
        >
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full"
          >
            {prod.map((item, index) => (
              <video
                key={index}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={item.video} />
                Your browser does not support the video tag.
              </video>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
