import React from "react";
import Image from "next/image";
import { ExperienceCardProps } from "@/interfaces";

function ExperienceCard({
  img,
  alt,
  jobTitle,
  company,
  techStack,
  date,
  description,
}: ExperienceCardProps) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#191919] hover:shadow-sm hover:shadow-gray-800 p-10 scroll-smooth opacity-40 hover:opacity-100 duration-500 cursor-pointer transition-opacity overflow-hidden mt-24 md:mt-10 md:h-[450px]">
      <Image
        src={img}
        alt={alt}
        className="rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        width={128}
        height={128}
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{jobTitle}</h4>
        <p className="font-bold text-2xl mt-1">{company}</p>
        <div className="flex space-x-2 my-2">
          {techStack.map((e) => (
            <Image
              key={e.title}
              src={e.img}
              alt={e.title}
              className="rounded-full"
              width={40}
              height={40}
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300">{date}</p>
        <ul className="list-disc space-x-4 ml-5 text-lg">
          {description.map((e) => (
            <li key={e}>{e}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
