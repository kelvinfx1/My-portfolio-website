import React, { useEffect } from "react";
import myPhoto from "../../assets/my-porto-removebg-preview.png"
import dottedBg from "../../assets/icons/bg-dottedsmall.svg";
// import bricks from '../../assets/icons/rectangleBg.svg'
import resume from "../../assets/docs/zephy.pdf";
import Logo from "../Logo";

function Hero() {
  return (
    <>
    {/* 👇 I used this div below to create a space btwn the header and the hero */}
      <div className="h-24 hidden lg:block" />
      <section className="pt-14 md:pt-0 lg:h-[80vh] xl:h-[90vh] relative z-0 bg-white dark:bg-darkBgLight  ">
        {/* Floating text 👇*/}
        <p className="hidden lg:block absolute top-32 -left-12 rotate-90 text-7xl font-semibold italic opacity-5 dark:text-white">
          ZEphyr
        </p>
        {/* Floating text ☝*/}


        <div className="container mx-auto px-4 md:flex h-full">
          {/* First column 👇*/}
          <div className="flex flex-col justify-end pt-24 pb-6 lg:justify-center xl:justify-end xl:pb-20 md:w-[50%] lg:pl-24 md:font-medium">
            {/* Texts container 👇*/}
            <div className="left-anime text-textMedium dark:text-white">
              <p className="text-textLight text-xl font-bold">Hi, my name is</p>
              <p className="font-medium text-5xl my-5 md:text-6xl lg:font-bold glitch  ">
                Somtochukwu <br />
                Nwabueze{" "}
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
          <div className="h-full hidden md:block z-30 ml-[100px]  ">
            <img src={myPhoto} alt="" className="h-[660px] hover:grayscale  bottom-28 " />
          </div>

          {/*  👇Background noise */}
          <div className="hidden -z-0 h-full absolute bottom-0 right-1 lg:block">
            <div className=" h-full w-[550px] shadow-2xl"></div>
            {/* bg-altBg */}
           
          </div>
           {/* hover:bg-[#e4e1f3] */}

          <div className="absolute w-30 bottom-80 left-[650px] ">
            <img src={dottedBg} alt="" className="animate-pulse" id="dotted" />
          </div>
        </div>
        {/* <div className="dark:bg-darkBgMedium h-20 bg-altBgMedium"></div> */}  
        {/* ☝this was for creaating gap b/w the hero and the image☝ */}
        <div  className="ml-[50%] translate-x-[-50%]   bg-altBg dark:bg-darkBgLight  md:hidden relative ">
        <img src={myPhoto} alt="" id="port" className="  animate-pulse opacity-[0.9] " />
        </div>
      </section>

     
      
      
      
    </>
  );
}

export default Hero;
