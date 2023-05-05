"use client";

import { motion } from "framer-motion";
import React from "react";
import ExperienceCard from "./ExperienceCard";
import { experienceData } from "@/data/experiences";

function WorkExperience() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className="flex flex-col overflow-hidden relative text-left md:flex-row h-screen max-w-full px-10 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>

      <div className="flex w-full space-x-5 overflow-scroll p-10 snap-x snap-mandatory overflow-y-hidden scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-blue-400/80">
        {experienceData.map((e) => (
          <ExperienceCard
            key={e.alt}
            description={e.description}
            jobTitle={e.jobTitle}
            techStack={e.techStack}
            alt={e.alt}
            img={e.img}
            company={e.company}
            date={e.date}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default WorkExperience;
