import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import projectOne from "../../assets/portfolioSite-img.png";
import projectTwo from "../../assets/rest-countries-image.png";
import linkIcon from "../../assets/icons/link-icon.svg";
import githubIcon from "../../assets/icons/github-black.svg";

function Portfolio() {
  useEffect(() => {
    Aos.init({ duration: 400 });
  }, []);

  return (
    <section
      className="container mx-auto px-4 lg:relative mb-10 py-10 bg-altBg"
      id="portfolio"
    >
      {/* Floating text 👇*/}
      <p className="hidden lg:block absolute top-80 -left-32 rotate-90 text-7xl font-semibold italic opacity-5 ">
        Portfolio
      </p>
      {/* Floating text ☝*/}

      <p className="text-2xl text-textMedium my-10 pl-2 md:text-4xl lg:font-medium  border-l-8 border-textLight">
        SOME THINGS I'VE BUILT
      </p>

      {/* the projects container👇 */}
      <div className="lg:pl-32 flex flex-col gap-16 lg:gap-32">
        {/* project1👇 */}
        <div
          className="w-full shadow-2xl lg:shadow-none"
          data-aos="fade-up"
        >
          {/* Project img👇 */}
          <div className="lg:max-w-[650px]">
            <img src={projectOne} alt="" className="h-full w-full " />
          </div>

          {/* Project description👇 */}
          <div className="text-textMedium px-3 py-5 lg:text-end lg:absolute lg:pl-10 lg:top-24 lg:right-0 lg:rounded-md lg:w-[40%] xl:right-36 2xl:right-60 3xl:right-80">
            <div className="">
              <p className="font-bold">Portfolio Website</p>
              <p className="font-medium my-2 lg:bg-altBgMedium lg:shadow-lg lg:py-3 rounded-md lg:rounded-md lg:pr-6 2xl:pr-3">
                My Portfolio Website pretty much the same website you are on at
                the moment. I guess it's all part of what I've built after all
              </p>
            </div>

            <div className="flex gap-4 lg:justify-end text-textLight">
              <a href="">React</a>
              <a href="">Next js</a>
              <a href="">Daisy ui</a>
            </div>
            <div className="flex gap-5 pt-3 lg:justify-end lg:gap-10 ">
              <a href="https://osorachukwu.vercel.app/" target="_blank">
                <img src={linkIcon} alt="" className="w-6" />
              </a>
              <a href="https://github.com/Osorachukwu/my-portfolio-website.git" target="_blank">
                <img src={githubIcon} alt="" className="w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* 💥project2👇 */}
        <div className="w-full shadow-2xl lg:shadow-none" data-aos="fade-up">
          {/* Project img👇 */}
          <div className="lg:max-w-[650px]">
            <img src={projectTwo} alt="" className="h-full w-full " />
          </div>

          {/* Project description👇 */}
          <div className="text-textMedium px-3 py-5 lg:text-end lg:absolute lg:pl-10 lg:top-24 lg:right-0 lg:rounded-md lg:w-[40%] xl:right-36 2xl:right-60 3xl:right-80">
            <div className="">
              <p className="font-bold">Portfolio Website</p>
              <p className="font-medium my-2 lg:bg-altBgMedium lg:shadow-lg lg:py-3 rounded-md lg:rounded-md lg:pr-6 2xl:pr-3">
                This is a challenge from frontend mentor. The web app basically
                fetches a list of countries via an API call and then displays
                the information to the user with the ability to sort, search and
                also toggle theme.
              </p>
            </div>

            <div className="flex gap-4 lg:justify-end text-textLight">
              <a href="">React</a>
              {/* <a href="">Next js</a> */}
              <a href="">Daisy ui</a>
            </div>

            <div className="flex gap-5 pt-3 lg:justify-end lg:gap-10">
              <a href="https://rest-countries-six-sigma.vercel.app/" target="_blank">
                <img src={linkIcon} alt="" className="w-6" />
              </a>
              <a href="https://github.com/Osorachukwu/rest-countries-api-with-color-theme-switcher.git" target="_blank">
                <img src={githubIcon} alt="" className="w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;

{/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(255, 255, 255, 1);transform: ;msFilter:;"><path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path><path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path></svg> */}
