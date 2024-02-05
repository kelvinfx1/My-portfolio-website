import React, { useEffect } from "react";
import myPhoto from "../../assets/osora-pressing-2.jpg";
import dottedSmall from "../../assets/icons/bg-dottedsmall.svg";
import quotes from "../../assets/icons/quotes.svg";
import dottedBg from '../../assets/icons/bg-dottedSmall.svg'
import Aos from 'aos'
import 'aos/dist/aos.css'


function MeCard() {
  useEffect(()=> {
    Aos.init( {duration: 1000 });
   }, []);
   
  return (
    <section className="pt-28" data-aos="fade-right">
      <div
        className="container mx-auto px-4 md:relative md:h-[70vh] bg-altBgMedium py-10 md:bg-white"
      >
        {/* First colum👇img */}
        <div className="mb-8 mx-auto overflow-hidden flex justify-center md:absolute right-[8%] md:top-[50%] md:translate-y-[-50%] z-50 lg:right-[18%] xl:right-[23%] rounded-lg md:shadow-2xl">
          <img src={myPhoto} alt="" className="max-h-[400px] rounded-lg " />
        </div>

        {/* Second colum👇text&qoute icon */}
        <div className="md:absolute md:top-[50%] md:translate-y-[-50%] md:left-0 md:h-full md:w-[60%] sm:bg-altBgMedium md:py-36 lg:py-44">
          {/* Qoute Icon👇 */}
          <div className="flex justify-center mb-3 h-12">
            <img src={quotes} alt="qoute-icon" />
          </div>

          {/* Second colum👇text*/}
          <div className="text-center text-textMedium">
            <p className="text-xl font-medium sm:px-20 md:text-2xl md:pl-10 md:pr-24 xl:text-3xl xl:px-48">
              "I&#39;m out to invest in an enduring software career and to seek
              self-development, advancement and improvement while enjoying job
              satisfaction."
            </p>
          </div>
        </div>
      </div>
      <div className="gap-4 absolute top-24 right-80 hidden md:block">
         
         <img src={dottedBg} alt="" />
        
       </div>
    </section>
  );
}

export default MeCard;
