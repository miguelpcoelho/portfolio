"use client";

import { motion } from "framer-motion";
import React from "react";

const projects = [1, 2, 3, 4];

function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className="flex flex-col relative overflow-hidden text-left md:flex-row min-h-screen max-w-full z-0 mx-auto justify-center items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full h-[40rem] md:h-auto flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 pt-8 md:pt-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-blue-400/80">
        {projects.map((project, index) => (
          <div
            key={project}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{ opacity: 0, y: -300 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-60"
              src="https://www.openproject.org/assets/images/product-tour/icons/project-portfolio-border-03d8fd69.svg"
              alt=""
            />
            <div className="space-y-8 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-blue-400/50">
                  Case Study {index + 1} of {projects.length}:
                </span>{" "}
                Project Name
              </h4>

              <p className="text-lg text-center md:text-left">
                Project summary Project summary Project summary Project summary
                Project summary Project summary Project summary Project
                summaryProject summary Project summary Project summary
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-blue-400/20 left-0 h-1/2 -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
