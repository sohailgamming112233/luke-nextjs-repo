"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

const Photo = () => {
  return (
    <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
      {/* Green traveling circle */}
      <motion.svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 506 506"
        fill="none"
      >
        <motion.circle
          cx="253"
          cy="253"
          r="250"
          stroke="#00ff99"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="60 400"
          animate={{ rotate: 360 }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.svg>

      {/* Photo */}
      <div className="absolute inset-4 rounded-full overflow-hidden">
        <Image
          src="/me.png"
          alt="Profile Photo"
          fill
          priority
          quality={300}
          className="object-cover rounded-full"
        />
      </div>
    </div>
  );
};

export default Photo;
