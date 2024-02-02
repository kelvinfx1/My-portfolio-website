import React from "react";
import project1 from "../../assets/portfolioSite-img.png";
import myPhoto2 from "../../assets/osora-pressing-2.jpg";

function Portfolio() {
  return (
    <section className="container mx-auto px-4 lg:relative mb-10 py-10">
      <div className="shadow-lg mb-8">
        <div className="lg:max-w-[650px]">
          <img src={project1} alt="" className="h-full w-full " />
        </div>

        <div className="text-textMedium px-3 py-5 lg:text-end lg:absolute lg:rounded-md lg:w-[40%] lg:top-24 lg:right-0 xl:right-36 xl:text-lg 2xl:right-60 3xl:right-80">
          <div className="">
            <p className="font-bold">Portfolio Website</p>
            <p className="font-medium my-2 lg:bg-altBg lg:shadow-lg lg:py-4 rounded-md lg:rounded-md lg:pr-6 xl:py-10">
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

        
        {/* <div className="">
          <p>github</p>
          <p>link</p>
        </div> */}
      </div>

      

     
    </section>
  );
}

export default Portfolio;
