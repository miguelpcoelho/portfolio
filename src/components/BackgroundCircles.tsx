"use client";

import { motion } from "framer-motion";
import React from "react";

function BackgroundCircles() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        scale: [1, 2, 2, 3, 1],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{ duration: 2.5 }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-gray-700 rounded-full h-[200px] w-[200px] mt-52 animate-ping" />
      <div className="absolute border border-gray-800 rounded-full h-[300px] w-[300px] mt-52 " />
      <div className="absolute border border-gray-800 rounded-full h-[400px] w-[400px] mt-52 " />
      <div className="absolute border opacity-20 border-blue-400 rounded-full h-[500px] w-[500px] mt-52 animate-pulse" />
      <div className="absolute border border-gray-800 rounded-full h-[600px] w-[600px] mt-52" />
    </motion.div>
  );
}

export default BackgroundCircles;
