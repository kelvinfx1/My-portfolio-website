import React from "react";

function Experience() {
  // pb-20 sm:px-9
  return (
    <section className="" id="experience">
      <div className="container mx-auto px-6 py-28">
        {/* <p className="">Experience</p> */}

        <p className="text-4xl pb-10 md:text-5xl">
          <span className="text-mainBgColor">02. </span>Experience
        </p>

        <div className="lg:px-48">
          <div className="border-t-[0.5px] border-borderColor py-4 lg:py-10">
            <p className="text-xl sm:text-2xl">Software Engineer(contract)</p>
            <p className="py-4 text-xl">March 2020 - Present</p>
            <ul className="">
              <li>
                Part time Code instructor and mentorship program at the software
                training academy
              </li>
              <li>
                Part time Code instructor and mentorship program at the software
                training academy
              </li>
            </ul>
          </div>

          <div className="border-t-[0.5px]  border-b-[1px] border-borderColor py-4 lg:py-10">
            <p className="text-xl sm:text-2xl">Software Engineer(contract)</p>
            <p className="py-4 text-xl">March 2020 - Present</p>
            <ul className="">
              <li>
                Part time Code instructor and mentorship program at the software
                training academy
              </li>
              <li>
                Part time Code instructor and mentorship program at the software
                training academy
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
