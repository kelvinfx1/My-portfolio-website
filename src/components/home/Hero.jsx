import React, { useEffect } from "react";
import myPhoto from "../../assets/osorachukwuMain.png";
import dottedBg from "../../assets/icons/bg-dottedsmall.svg";
// import bricks from '../../assets/icons/rectangleBg.svg'
import resume from "../../assets/docs/osorachukwu-ezewi-cv.pdf";
import Logo from "../Logo";

function Hero() {
  return (
    <section className="lg:h-[80vh] xl:h-[90vh] relative">
      {/* Floating text 👇*/}
      <p className="hidden lg:block absolute top-32 -left-12 rotate-90 text-7xl font-semibold italic text-altBg">
        Osora
      </p>
      {/* Floating text ☝*/}

      <div className="container mx-auto px-4 md:flex h-full">
        {/* First column 👇*/}
        <div className="flex flex-col justify-end pt-24 lg:justify-center xl:justify-end xl:pb-20 md:w-[50%] lg:pl-24 md:font-medium">
          {/* Texts container 👇*/}
          <div className="left-anime text-textMedium">
            <p className="text-textLight">Hi, my name is</p>
            <p className="font-medium text-5xl my-5 md:text-6xl">
              Osorachukwu <br />
              Ezewi{" "}
            </p>
            <p>
              I'm a Frontend Web Developer experienced in building Industry
              Leading Web Solutions with next gen technologies.
            </p>
          </div>
          {/* Button 👇*/}
          <div>
            <a
              href={resume}
              download={resume}
              className="mt-6 text-textLight btn rounded-none bg-inherit border-textLight lg:btn-lg hover:bg-textLight hover:text-white"
            >
              Download CV
            </a>
          </div>
        </div>
        {/* Second column 👇*/}
        <div className="h-full hidden md:block z-30">
          <img src={myPhoto} alt="" className="h-full hover:grayscale" />
        </div>

        {/*  👇Background noise */}
        <div className="hidden -z-0 h-full absolute bottom-0 right-1 lg:block">
          <div className="bg-altBg hover:bg-[#e4e1f3] h-full w-[550px]"></div>
        </div>

        <div className="absolute w-20 bottom-80 left-[600px]">
          <img src={dottedBg} alt="" className="animate-pulse"/>
        </div>
      </div>
    </section>
  );
}

export default Hero;
