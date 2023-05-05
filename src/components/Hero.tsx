import React from "react";
import Image from "next/image";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";

function Hero() {
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <div className="rounded-full overflow-hidden">
        <Image
          src="https://media.licdn.com/dms/image/C4D03AQHU02N9d3XN0w/profile-displayphoto-shrink_400_400/0/1659088677422?e=1687996800&v=beta&t=77gJXSxwti_HedzzDOEG60EKu78JKdqKW4GxWnWSbF0"
          alt="profile image"
          width={120}
          height={120}
          priority
        />
      </div>
      <div className="z-20">
        <h2 className="uppercase text-sm text-gray-400 pb-2 tracking-[1rem]">
          Software engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10 mb-5">
          Miguel Coelho
        </h1>
        <div>
          <Link href="#about">
            <button className="heroBtn">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroBtn">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroBtn">Skills</button>
          </Link>
          <Link href="#education">
            <button className="heroBtn">Education</button>
          </Link>
          <Link href="#projects">
            <button className="heroBtn">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
