import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import projectOne from "../../assets/my-port-pro.png";
import projectTwo from "../../assets/rest-countries-project.png";
import projectThree from "../../assets/project-two.png";
import linkIcon from "../../assets/icons/link-icon.svg";
import githubIcon from "../../assets/icons/github-black.svg";
import MeCard from "../features/portfolio/MeCard";

function Portfolio() {
  const projectsDetails = [
    {
      image: projectThree,
      header: "A Travel list",
      description:
        "a kinda to-do list web app.it is actually one of the project i built during my training  ",
      technologies: ["React", "CSS", "Javascript", ""],
      siteLink: null,
      githubLink: null,
      githubIcon: null,
      linkIcon: linkIcon,
    },
    {
      image: projectTwo,
      header: "Rest Countries App",
      description:
        "This is a challenge from frontend mentor. The web app basically fetches a list of countries via an API call and then displays the information to the user with the ability to sort, search and also toggle theme.",
      technologies: ["React", "Tailwind", "Daisy UI"],
      siteLink: null,
      githubLink:null,
      githubIcon: githubIcon,
      linkIcon: linkIcon,
    },
    {
      image: projectOne,
      header: "My Portfolio Website",
      description:
        " My Portfolio Website pretty much the same website you are on at the moment. I guess it's all part of what I've built after all",
      technologies: ["React","javascript",   "Tailwind", "Daisy UI"],
      siteLink: null,
      githubLink: null,
      githubIcon: githubIcon,
      linkIcon: linkIcon,
    }

  ];

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <section
      className="container mx-auto px-4 lg:relative mb-10 py-10 bg-altBg dark:bg-darkBgLight"
      id="portfolio"
    >
      {/* Floating text 👇*/}
      <p className="hidden lg:block absolute top-[450px] -left-64 rotate-90 text-7xl font-semibold italic opacity-5 dark:text-white" style={{letterSpacing: '25px'}}>
        Portfolio
      </p>
      {/* Floating text ☝*/}
      <p className="text-2xl text-textMedium mt-8 mb-16 pl-2 md:text-4xl lg:font-medium  border-l-8 border-textLight dark:text-textLight">
        SOME THINGS I'VE BUILT
      </p>

      <div className="lg:pl-32 flex flex-col gap-16 lg:gap-32">
        {/* ☝the projects container */}
        {projectsDetails.map((project, index) => (
          <div key={index} className="w-full shadow-2xl lg:shadow-none" data-aos="fade-up">
            {/* Project img👇 */}
            <div className="lg:max-w-[650px]">
              <img src={project.image} alt="" className="h-full w-full rounded-3xl " /> 
              {/* ☝images */}
            </div>

            {/* Description👇 */}
            <div className="text-textMedium dark:text-white px-3 py-5 lg:text-end lg:absolute lg:pl-10 lg:top-24 lg:right-0 lg:rounded-md lg:w-[40%] xl:right-36 2xl:right-60 3xl:right-80">
              <div className="">
                <p className="font-bold dark:text-white">{project.header}</p>
                <p className="my-2 lg:bg-altBgMedium lg:dark:bg-darkBgMedium lg:font-medium lg:shadow-lg lg:py-3 rounded-md lg:rounded-xl lg:pr-6 2xl:pr-3">
                  {project.description}
                </p>
              </div>

              {/* Technologies used👇 */}
              <div className="flex gap-4 lg:justify-end text-textLight">
                {project.technologies.map((_, idx) => {
                  return <p key={idx}>{_}</p>;
                })}
              </div>

              {/* 👇Links */}
              <div className="flex gap-5 pt-3 lg:justify-end">
                <a href={project.githubLink} target="_blank">
                  <img src={project.githubIcon} alt="" className="w-6" />
                </a>
                <a href={project.siteLink} target="_blank">
                  <img src={project.linkIcon} alt="" className="w-6" />
                </a>
              </div>
            </div>
          </div>
        ))}
        ;
      </div>

    </section>
  );
}

export default Portfolio;
