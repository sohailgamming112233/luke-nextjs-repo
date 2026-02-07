"use client";

import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
  { num: 12, text: "Years of Experience" },
  { num: 50, text: "Completed Projects" },
  { num: 20, text: "Technologies Completed" },
  { num: 500, text: "Code Commits" },
];

const State = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
      {stats.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col gap-2"
        >
          <h2 className="text-4xl font-bold text-blue-500">
            <CountUp start={0} end={item.num} duration={2} separator="," />
          </h2>
          <p className="text-white/70 text-sm sm:text-base">{item.text}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default State;
