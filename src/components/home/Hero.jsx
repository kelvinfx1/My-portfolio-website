import React from "react";
import myPhoto from "../../assets/myPhoto-rmbg.png";
// import myPhoto2 from '../../assets/osora-pressing-1.jpg'

function Hero() {
  return (
    <section className="text-xl font-medium px-4 pt-12 pb-20 bg-green-400 sm:px-10 sm:text-2xl lg:flex lg:px-20 xl:px-36">

      {/* <p className="">Osora.</p> */}

      <div className="lg:w-[50%] lg:pt-20"> {/*hero column-1*/}
            <div>
                <p className="">Hi, my name is</p>
                <p className="text-5xl font-medium my-6 sm:text-6xl">Osorachukwu <br /> Ezewi</p>
                <div className="mb-5">
                    <p className="">
                        I'm a Frontend Web Developer
                          building Industry Leading Web Solutions
                          with next gen technologies.
                    </p>
                </div>

                <button className="mt-5 btn btn-lg btn-wide rounded-none border-[1px] border-black bg-inherit hover:text-white hover:bg-black">Hire Me</button>
                {/* className="py-4 px-14 border-2 border-gray-500 text-xl font-bold overflow-hidden mybtn" */}

            </div>
      </div>

      <div className="hidden w-full lg:block lg:w-[50%]"> {/*hero column-2*/}
        <img src={myPhoto} alt="" className="w-[500px]" />
      </div>
    </section>
  );
}

export default Hero;
