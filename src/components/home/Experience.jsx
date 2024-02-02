import React, { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'

function Experience() {

  useEffect(()=> {
    AOS.init({ duration: 600 });
   }, []);

  const experienceData = [
    {
      title: "Software Engineer(contract)",
      pow: "Innovatespace",
      duration: "October 2020 - Present",
      'description-one': "  Part time Code instructor and mentorship program at the software training academy ",
      'description-two': "  Part time Code instructor and mentorship program at the software training academy ",
    },

    {
      title: "Software Engineer(contract)",
      pow: "Innovatespace",
      duration: "October 2020 - Present",
      'description-one': "  Part time Code instructor and mentorship program at the software training academy ",
      'description-two': "  Part time Code instructor and mentorship program at the software training academy ",
    },
  ];
  return (
    <section className="text-textMedium" id="experience">
      <div className="container mx-auto px-6 py-28">
        {/* <p className="">Experience</p> */}

        <p className="text-4xl pb-10 md:text-5xl">
          Experience
        </p>

        <div className="lg:px-48" data-aos = "fade-right">
          {experienceData.map((experience, index) => (
            <div key={index} className="border-t-[0.2px] border-textMedium py-5 lg:py-10">
              <div>
                <p className="sm:text-2xl">{experience.title}</p>
                <p className="text-end text-sm md:text-lg" style={{lineHeight: "0"}}>{`@${experience.pow}`}</p>
                <p className="py-4 text-textLight text-lg">{experience.duration}</p>
              </div>
              <ul>
                <li className="mb-3">{experience["description-one"]}</li>
                <li>{experience["description-two"]}</li>
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
