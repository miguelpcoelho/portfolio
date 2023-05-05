"use client";

import { motion } from "framer-motion";
import React from "react";
import SkillIcon from "./SkillIcon";
import { skillsData } from "@/data/skills";

function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className="flex flex-col relative text-center md:text-left xl:flex-row min-h-screen max-w-[2000px] xl:px-10 xl:space-y-0 mx-auto items-center justify-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-widest text-gray-500 text-sm">
        Hover over a skill for current profienciency
      </h3>
      <div className="grid grid-cols-4 gap-5">
        {skillsData.map((e) => (
          <SkillIcon
            key={e.alt}
            alt={e.alt}
            img={e.img}
            profienciency={e.profienciency}
            directionLeft={e.directionLeft}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
