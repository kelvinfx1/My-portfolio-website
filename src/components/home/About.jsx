import React from "react";
import myPhoto from "../../assets/osora-pressing-2.jpg";

function About() {
  return (
    <section className="flex flex-col relative py-20 px-5 bg-white md:flex-row md:px-10 lg:py-32 lg:px-24 xl:xl:px-36">

    <p className="text-8xl text-gray-400 font-bold italic opacity-5 absolute top-60 -left-20 rotate-90">About</p>


      <div className="w-full pr-8 text-lg">
        <div className="mb-8">
          <p className="font-medium text-2xl mb-5 text-[rgb(90,255,128)]">ABOUT ME</p>
          <p className="mb-5">
            Hello! Thank you once again for making out time to visit my personal
            portfolio. My name is Ezewi Osorachukwu, I&#39;m a very dedicated
            and astute software engineer with the ambition for mental and moral
            distinction. I&#39;m out to invest in an enduring software career
            and to seek self-development, advancement and improvement while
            enjoying job satisfaction. Well proven in, with the precision and
            loyalty required to excel.
          </p>
          <p className="my-5">
            My core area of Focus is on HTML 5, CSS, Tailwind, JavaScript &
            React.
          </p>
          <p>
            Below is a list of technologies, languages, frameworks and Libraries
            that I have a good command of:
          </p>
        </div>

        <ul className="grid grid-cols-2 gap-4 pr-64 text-lg">
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

      <div className="w-full bg-gray-500 overflow-hidden flex justify-center"> {/* second column */}
       
         <div className="relative top-[100px] bg-gray"> {/* border thing */}

          <img
              src={myPhoto}
              alt=""
              className="w-64 rounded-lg relative z-50"
            />

          <div className="border-[1px] border-[rgb(2,255,85)] h-80 w-60 rounded-lg absolute top-12 -right-16"></div>

         </div>

      </div>
    </section>
  );
}
// h-[80%] w-[60%]

export default About;
