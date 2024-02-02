import React from "react";
import myPhoto from "../../assets/myPhoto-rmbg.png";
import dottedBg from "../../assets/icons/bg-dottedsmall.svg"
// import myPhoto2 from '../../assets/osora-pressing-1.jpg'

function Hero() {
  // lg:px-20 xl:px-36 px-4
  return (
    <section className="bg-white text-textLight hero relative">
      <div className="container mx-auto px-6 pt-12 pb-32 lg:flex md:text-lg lg:text-xl lg:pl-28">
        {/* <p className="">Osora.</p> */}

         {/*👇hero column-1*/}
        <div className="lg:w-[50%] lg:pt-36">
          <div>
            <p className="right-anime">Hi, my name is</p>
            <p className="right-anime text-5xl text-textMedium font-semibold my-3 lg:text-7xl">
              Osorachukwu <br />  Ezewi
            </p>
            <div className="mb-5">
              <p className="left-anime">
                I'm a Frontend Web Developer <br /> building Industry Leading Web
                Solutions with next gen technologies.
              </p>
            </div>

            <button className="buttom-anime text-textLight mt-5 btn text-xl font-normal rounded-none bg-inherit border-textLight h-14
            px-20 md:btn-wide md:font-medium hover:text-white hover:bg-textLight lg:text-2xl">
              Hire Me
            </button>
            {/*      border-[1px]   md:h-16 */}
            {/* className="py-4 px-14 border-2 border-gray-500 text-xl font-bold overflow-hidden mybtn" */}
          </div>
        </div>

        <div className="hidden w-full lg:block lg:w-[50%]">
          {/*hero column-2*/}
          <img src={dottedBg} alt="" className="w-[500px]"/>
          {/* 💥💥💥‼❗❕ w-[500px] grayscale hover:grayscale-0*/}
          {/* ☝☝☝this style is for when I add my photo */}
        </div>

        <div>
          <img src={dottedBg} alt=""  className="absolute -top-20 -right-14 lg:hidden"/>
        </div>
      </div>
    </section>
  );
}

export default Hero;
