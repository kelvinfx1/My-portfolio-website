import React from "react";
import myPhoto from "../../assets/myPhoto-rmbg.png";
// import myPhoto2 from '../../assets/osora-pressing-1.jpg'

function Hero() {
  // lg:px-20 xl:px-36 px-4
  return (
    <section className="bg-mainBgColor hero">
      <div className="container mx-auto px-6 text-xl pt-12 pb-20 sm:text-3xl lg:flex">
        {/* <p className="">Osora.</p> */}

         {/*👇hero column-1*/}
        <div className="lg:w-[50%] lg:pt-28">
          <div>
            <p className="right-anime">Hi, my name is</p>
            <p className="right-anime text-5xl font-medium my-6 sm:text-7xl">
              Osorachukwu <br />  Ezewi
            </p>
            <div className="mb-5">
              <p className="left-anime">
                I'm a Frontend Web Developer building Industry Leading Web
                Solutions with next gen technologies.
              </p>
            </div>

            <button className="buttom-anime mt-5 btn btn-lg btn-wide md:h-16 rounded-none border-[1px] border-black bg-inherit hover:text-white hover:bg-black text-2xl font-normal">
              Hire Me
            </button>
            {/* className="py-4 px-14 border-2 border-gray-500 text-xl font-bold overflow-hidden mybtn" */}
          </div>
        </div>

        <div className="hidden w-full lg:block lg:w-[50%]">
          {/*hero column-2*/}
          <img src={myPhoto} alt="" className="w-[500px]" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
