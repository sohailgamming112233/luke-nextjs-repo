"use client";

import React from "react";
import { motion } from "framer-motion";

const stairAnimation = {
  initial: {
    y: "0%",
  },
  animate: {
    y: "100%",
  },
  exit: {
    y: ["100%", "0%"],
  },
};

const reverseIndex = (index) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.4,
            ease: "easeInOut",
            delay: reverseIndex(index) * 0.1,
          }}
          className="absolute w-screen h-full bg-white"
          style={{
            width: "16.6667%",
            left: `${index * 16.6667}%`,
          }}
        />
      ))}
    </div>
  );
};

export default Stairs;
