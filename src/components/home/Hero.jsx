import React from "react";
import myPhoto from "../../assets/myPhoto-rmbg.png";
// import myPhoto2 from '../../assets/osora-pressing-1.jpg'

function Hero() {
  return (
    <section className="flex flex-col px-5 py-5 pr-10 -z-20 sm:px-20 md:px-10 lg:flex-row lg:px-24 lg:py-0 bg-[rgb(90,255,128)] xl:px-36 relative">

      <p className="text-8xl text-gray-400 font-bold italic opacity-5 absolute top-52 -left-20 rotate-90">Osora.</p>

      <div className="w-full lg:py-10 xl:pt-36 xl:pb-0"> {/*hero column-1*/}
            <div>
                <p className="text-xl my-4">👋Hi, my name is</p>
                <p className="text-5xl font-medium md:text-6xl">Osorachukwu <br /> Ezewi</p>
                <div className="md:pr-36 my-5 md:my-10 lg:my-6">
                    <p className="text-2xl">
                        I'm a Frontend Web Developer
                          building Industry Leading Web Solutions
                          with next gen technologies.
                    </p>
                </div>

                <button className="mt-5 btn btn-lg btn-wide rounded-none border-[1px] border-black bg-inherit hover:text-white hover:bg-black">Hire Me</button>
                {/* className="py-4 px-14 border-2 border-gray-500 text-xl font-bold overflow-hidden mybtn" */}

            </div>
      </div>

      <div className="hidden w-full lg:block"> {/*hero column-2*/}
        <img src={myPhoto} alt="" className="w-[500px]" />
      </div>
    </section>
  );
}

export default Hero;
