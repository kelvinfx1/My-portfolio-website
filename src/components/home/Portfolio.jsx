import React, { useEffect } from "react";
import Aos from 'aos'
import 'aos/dist/aos.css'
import project1 from "../../assets/portfolioSite-img.png";
import myPhoto2 from "../../assets/osora-pressing-2.jpg";

function Portfolio() {

useEffect(()=> {
 Aos.init( {duration: 400 });
}, []);

  return (
    <section className="container mx-auto px-4 lg:relative mb-10 py-10 bg-altBg" id="portfolio">
      <p className="text-2xl text-textMedium my-10 md:text-4xl lg:font-medium">SOME THINGS I'VE BUILT</p>

      {/* the projects container👇 */}
     <div className="lg:pl-32 flex flex-col gap-16 lg:gap-32">

      {/* project1👇 */}
     <div className="w-full shadow-2xl lg:shadow-none" data-aos = "fade-up">
      {/* Project img👇 */}
        <div className="lg:max-w-[650px]">
          <img src={project1} alt="" className="h-full w-full " />
        </div>

      {/* Project description👇 */}
        <div className="text-textMedium px-3 py-5 lg:text-end lg:absolute lg:pl-10 lg:top-24 lg:right-0 lg:rounded-md lg:w-[40%] xl:right-36 xl:text-lg 2xl:right-60 3xl:right-80">
          <div className="">
            <p className="font-bold">Portfolio Website</p>
            <p className="font-medium my-2 lg:bg-altBgMedium lg:shadow-lg lg:py-4 rounded-md lg:rounded-md lg:pr-6 xl:py-5 2xl:pr-3">
              My Portfolio Website pretty much the same website you are on at
              the moment. I guess it's all part of what I've built after all
            </p>
          </div>

          <div className="flex gap-4 lg:justify-end text-textLight">
            <a href="">React</a>
            <a href="">Next js</a>
            <a href="">Daisy ui</a>
          </div>
        </div>
        
      </div>


       {/* 💥project2👇 */}
     <div className="w-full shadow-2xl lg:shadow-none" data-aos = "fade-up">
      {/* Project img👇 */}
        <div className="lg:max-w-[650px]">
          <img src={project1} alt="" className="h-full w-full " />
        </div>

      {/* Project description👇 */}
        <div className="text-textMedium px-3 py-5 lg:text-end lg:absolute lg:pl-10 lg:top-24 lg:right-0 lg:rounded-md lg:w-[40%] xl:right-36 xl:text-lg 2xl:right-60 3xl:right-80">
          <div className="">
            <p className="font-bold">Portfolio Website</p>
            <p className="font-medium my-2 lg:bg-altBgMedium lg:shadow-lg lg:py-4 rounded-md lg:rounded-md lg:pr-6 xl:py-5 2xl:pr-3">
              My Portfolio Website pretty much the same website you are on at
              the moment. I guess it's all part of what I've built after all
            </p>
          </div>

          <div className="flex gap-4 lg:justify-end text-textLight">
            <a href="">React</a>
            <a href="">Next js</a>
            <a href="">Daisy ui</a>
          </div>
        </div>
        
      </div>
     </div>

    </section>
  );
}

export default Portfolio;
