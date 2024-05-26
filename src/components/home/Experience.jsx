import React, { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'

function Experience() {

  useEffect(()=> {
    AOS.init({ duration: 600 });
   }, []);

  const experienceData = [
    {title:"Frontend web Developer Trainee",
      pow: "Innovatespace acedemy",
      duration: "february 2024 - june 2024",
      'description-one': " completed an intensive training program in frontend web development, covering HTML,CSS,Javascript,typscript and popular frameworks like React,tailwind. ",
      'description-two': "Built multiple projects , including a responsive website ,a single-page application , and mobile-friendly website, demonstrating proficiency in:HTML5, CSS3,and Javascript(ES6+).",
      'description-three':"collaborated with fellow Trainees on groop project, honing teamwork and communication skills.",
      'description-four':"participated in code reviews , receiving constructive feedback and iterating on improvements."
    },

  ];
  return (
    <section className="text-textMedium dark:text-white relative bg-white dark:bg-darkBgLight" id="experience">
      {/* Floating Text 👇 */}
       <p className="hidden lg:block absolute top-[400px] -left-28 rotate-90 text-7xl font-semibold italic opacity-5">Experience</p>
      {/* Floating Text ☝ */}

      <div className="container mx-auto px-6 py-28">
        {/* <p className="">Experience</p> */}

        <p className="text-4xl pb-10 md:text-5xl text-textMedium dark:text-textLight">
          Experience
        </p>

        <div className="lg:px-48" data-aos = "fade-right">
          {experienceData.map((experience, index) => (
            <div key={index} className="border-t-[0.2px] border-borderColor py-5 lg:py-10">
              <div>
                <p className="sm:text-2xl">{experience.title}</p>
                <p className="text-end text-sm md:text-lg" style={{lineHeight: "0"}}>{`@${experience.pow}`}</p>
                <p className="py-4 text-textLight text-lg">{experience.duration}</p>
              </div >
              <ul className="text-xl flex flex-col gap-7">
                <hr />
                <li className="mb-3"> <span className="font-extrabold text-3xl">*</span>{experience["description-one"]}</li>
                <hr />
                <li><span className="font-extrabold text-3xl">*</span>{experience["description-two"]}</li>
                <hr />
                <li><span className="font-extrabold text-3xl">*</span>{experience["description-three"]}</li>
                <hr />
                <li><span className="font-extrabold text-3xl">*</span>{experience["description-four"]}</li>
                {/* ☝the square brackets is cos I wrapped the keys in qoutes */}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="text-base ">
              <p className="text-end"> <a href="" className="hover:text-mainBgColor text-xl "> <span className="text-black font-medium text-2xl">@</span>Innovatespace</a></p>
          </div>*/}

    </section>
  );
}

export default Experience;
