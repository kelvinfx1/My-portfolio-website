import React, { useEffect } from "react";
import myPhoto from "../../assets/osorachukwuMain.png";
import dottedBg from "../../assets/icons/bg-dottedsmall.svg";
import resume from '../../assets/docs/osorachukwu-ezewi-cv.pdf'
// import myPhoto2 from '../../assets/osora-pressing-1.jpg'
// import Aos from 'aos'
// import 'aos/dist/aos.css'

function Hero() {
  // useEffect(()=> {
  //   Aos.init( {duration: 5000 });
  //  }, []);
   
  return (
    <section className="lg:h-[80vh] xl:h-[90vh] relative">
      <div className="container mx-auto px-4 md:flex h-full">
        {/* First column 👇*/}
        <div className="flex flex-col justify-end py-10 lg:justify-center xl:justify-end xl:pb-20 md:w-[50%] lg:pl-24 md:font-medium">
          {/* Texts container 👇*/}
          <div className="left-anime text-textMedium">
            <p className="text-textLight">Hi, my name</p>
            <p className="text-5xl my-5 md:text-6xl">
              Osorachukwu <br />
              Ezewi{" "}
            </p>
            <p>
              I'm a Frontend Web Developer experience building Industry Leading
              Web and Mobile App Solutions with next gen technologies.
            </p>
          </div>
          {/* Button 👇*/}
          <div>
            <a href={resume} download={resume} className="mt-6 text-textLight btn rounded-none bg-inherit border-textLight lg:btn-lg">
              Download CV
            </a>
          </div>
        </div>
        {/* Second column 👇*/}
        <div className="h-full hidden md:block z-30">
          <img src={myPhoto} alt="" className="h-full hover:grayscale" />
        </div>

        <div className=" absolute bottom-0 right-6 hidden md:block">
          <img src={dottedBg} alt="" className="w-96 "/>
         
      
        </div>
      </div>
    </section>
  );
}

export default Hero;
