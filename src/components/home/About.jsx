import React from "react";
import myPhoto from "../../assets/osora-pressing-2.jpg";

function About() {
  // px-4
  return (
    <section className="" id="about">
      <div className="container mx-auto px-4 py-28 font-medium md:flex">
        {/* <p className="text-8xl text-gray-400 font-bold italic opacity-5 absolute top-60 -left-20 rotate-90">About</p> */}

        {/* 👇first column👇 */}
        <div className="md:w-[50%]">
          <div>
            <div className="flex justify-between items-center gap-3 md:pb-4">
              <p className="text-mainBgColor text-xl md:text-3xl font-medium py-3 inline-block whitespace-nowrap">
                <span>01. </span>About me
              </p>
              <div className="h-[0.5px] bg-borderColor w-full "></div>
            </div>

            <p className="">
              Hello! Thank you once again for making out time to visit my
              personal portfolio. My name is Ezewi Osorachukwu, I&#39;m a very
              dedicated and astute software engineer with the ambition for
              mental and moral distinction. I&#39;m out to invest in an enduring
              software career and to seek self-development, advancement and
              improvement while enjoying job satisfaction. Well proven in, with
              the precision and loyalty required to excel.
            </p>
            <p className="py-2 inline-block md:py-4">
              My core area of Focus is on HTML 5, CSS, Tailwind, JavaScript &
              React.
            </p>
            <p className="py-2 inline-block md:py-4">
              Below is a list of technologies, languages, frameworks and
              Libraries that I have a good command of:
            </p>
          </div>

          <ul className="list-img font-medium grid grid-cols-2 gap-1 pb-10">
            <li>HTML 5</li>
            <li>CSS 3</li>
            <li>Tailwind</li>
            <li>SCSS</li>
            <li>JavaScript</li>
            <li>Typescript</li>
            <li>React</li>
            <li>Redux</li>
            {/* <li>Next JS</li> */}
          </ul>
        </div>

        {/* 👇second column👇 */}
        <div className="flex justify-center items-center md:w-[50%]">
          <div className="">
            {/* border thing */}
            <img src={myPhoto} alt="" className="rounded-2xl w-96" />
            {/* <div className="border-[1px] border-[rgb(2,255,85)] h-80 w-60 rounded-lg absolute top-12 -right-16"></div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
// h-[80%] w-[60%]

export default About;
