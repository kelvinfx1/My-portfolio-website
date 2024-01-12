import React from "react";
import myPhoto from "../../assets/osora-pressing-2.jpg";

function About() {
  return (
    <section className="px-4 pt-12 pb-20 text-xl font-medium">
      {/* <p className="text-8xl text-gray-400 font-bold italic opacity-5 absolute top-60 -left-20 rotate-90">About</p> */}

      <div>
        <div>

          <div className="flex justify-between items-center">
           <p className="text-green-500 text-2xl font-medium py-3 inline-block">
             <span>01.  </span>About me
           </p>
           <div className="h-[1px] w-[85%] bg-black"></div>

          </div>

          <p className="">
            Hello! Thank you once again for making out time to visit my personal
            portfolio. My name is Ezewi Osorachukwu, I&#39;m a very dedicated
            and astute software engineer with the ambition for mental and moral
            distinction. I&#39;m out to invest in an enduring software career
            and to seek self-development, advancement and improvement while
            enjoying job satisfaction. Well proven in, with the precision and
            loyalty required to excel.
            <p className="py-2 inline-block">
              My core area of Focus is on HTML 5, CSS, Tailwind, JavaScript &
              React.
            </p>
            <p className="py-2 inline-block">
              Below is a list of technologies, languages, frameworks and
              Libraries that I have a good command of:
            </p>
          </p>
        </div>

        <ul className="list-img font-medium grid grid-cols-2 gap-4 pt-5 pb-10">
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
      <div className="px-8">
        
        <div className="">
          {/* border thing */}
          <img src={myPhoto} alt="" className="rounded-2xl" />
          {/* <div className="border-[1px] border-[rgb(2,255,85)] h-80 w-60 rounded-lg absolute top-12 -right-16"></div> */}
        </div>
      </div>
    </section>
  );
}
// h-[80%] w-[60%]

export default About;
