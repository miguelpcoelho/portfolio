"use client";

import { motion } from "framer-motion";
import React from "react";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className="flex flex-col relative text-center md:text-left md:flex-row h-screen max-w-7xl px-10 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="https://avatars.githubusercontent.com/u/25953540?v=4"
        className="rounded-full mt-40 md:mt-0 flex-shrink-0 w-56 h-56 object-cover md:w-64 md:h-64"
      />
      <div className="space-y-2 md:space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold mt-6 md:mt-0">
          Here is a{" "}
          <span className="underline decoration-blue-400/50">little</span>{" "}
          background
        </h4>
        <p className="text-sm md:text-base text-justify mt-2 md:mt-0">{`My name is Miguel, and I am a Frontend Engineer based in Lisbon. I hold both a bachelor's and a master's degree in Software Engineering from Instituto Superior Técnico, one of the top technical universities in Portugal. My interest in technology has been growing over time, and now I am fascinated with the power of programming, knowing that creativity is the limit. In a couple of years, I hope to pursue a career in business, leveraging the knowledge I have gained in technology. I believe that my skills can help create something that can have a positive impact on the world. I started developing Frontend three years ago using React Native, and nowadays I am using ReactJS and NextJS.`}</p>
        <p className="hidden md:block text-justify">
          In my free time, I enjoy traveling to new places and experiencing
          different cultures. I also like to stay active by playing sports, with
          football being my favorite. Overall, I am a curious and adventurous
          person who is always seeking to learn and grow both professionally and
          personally.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
