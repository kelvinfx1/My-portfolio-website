import React, { useEffect } from "react";
import resume from '../../assets/docs/osorachukwu-ezewi-cv.pdf'
import AOS from 'aos'
import 'aos/dist/aos.css'


function About() {
  useEffect(()=> {
    AOS.init({ duration: 600 });
   }, []);

  return (
    <section
      className="text-center flex justify-center py-20 md:py-28 bg-altBg z-10 relative"
      id="about"
     
    >
      {/* Floating text 👇*/}
       <p className="hidden lg:block absolute top-32 -left-14 rotate-90 text-7xl font-semibold italic opacity-5">About</p>
      {/* Floating text ☝*/}

      <div className=" bg-white shadow-lg px-2 xl:px-20 rounded-md max-w-[93%] sm:w-[90%] md:max-w-[85%] lg:max-w-[80%] 2xl:max-w-[68%]">
        <div className="px-3 pt-12 sm:px-9 md:px-16">
          <div>
            <p className="text-xl text-textMedium font-semibold underline"> ABOUT MYSELF</p>
            <p className="py-5 text-2xl font-normal md:text-3xl lg:5xl" data-aos="fade-up">
              Hello! Thank you once again for making out time to visit my
              personal portfolio. My name is Ezewi Osorachukwu, I&#39;m a very
              dedicated and astute software engineer with the ambition for
              mental and moral distinction.
            </p>
            <a
              href={resume} download={resume}
              className="text-xl btn btn-lg btn-wide rounded-none bg-textLight text-white hover:bg-white hover:text-textLight hover:border-textLight"
              data-aos="fade-up"
            >
              Hire Me
            </a>
          </div>
        </div>

        <div className="h-[1px] bg-altBgMedium my-10"></div>
        {/* ☝Dividing line */}

        <div className="text-xl font-normal px-5 pb-12 grid grid-cols-1 gap-8 sm:px-9 md:px-10 md:grid-cols-2"  data-aos = "fade-up">
          <div>
            <p className="text-start font-medium">Figma</p>
            <div className="rounded-xl bg-altBgMedium mt-3">
              <div className="bg-textLight w-[60%] py-1 rounded-xl"></div>
            </div>
          </div>

          <div>
            <p className="text-start font-medium">HTML</p>
            <div className="rounded-xl bg-altBgMedium mt-2">
              <div className="bg-textLight w-[96%] py-1 rounded-xl"></div>
            </div>
          </div>

          <div>
            <p className="text-start font-medium">CSS</p>
            <div className="rounded-xl bg-altBgMedium mt-2">
              <div className="bg-textLight w-[90%] py-1 rounded-xl"></div>
            </div>
          </div>

          <div>
            <p className="text-start font-medium">Tailwind</p>
            <div className="rounded-xl bg-altBgMedium mt-2">
              <div className="bg-textLight w-[80%] py-1 rounded-xl"></div>
            </div>
          </div>

          <div>
            <p className="text-start font-medium">SCSS</p>
            <div className="rounded-xl bg-altBgMedium mt-2">
              <div className="bg-textLight w-[75%] py-1 rounded-xl"></div>
            </div>
          </div>

          <div>
            <p className="text-start font-medium">Javascript</p>
            <div className="rounded-xl bg-altBgMedium mt-2">
              <div className="bg-textLight w-[75%] py-1 rounded-xl"></div>
            </div>
          </div>

          <div>
            <p className="text-start font-medium">Typscript</p>
            <div className="rounded-xl bg-altBgMedium mt-2">
              <div className="bg-textLight w-[55%] py-1 rounded-xl"></div>
            </div>
          </div>

          <div>
            <p className="text-start font-medium">React.js</p>
            <div className="rounded-xl bg-altBgMedium mt-2">
              <div className="bg-textLight w-[75%] py-1 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
     
    </section>
   
  );
}
// h-[80%] w-[60%]

export default About;
