import React from "react";
import myPhoto from "../../assets/osora-pressing-2.jpg";
import dottedSmall from '../../assets/icons/bg-dottedsmall.svg'

function MeCard() {
  return (
    <section
      className="text-textMedium bg-altBg mb-10 rounded-lg shadow-lg max-w-full mx-auto px-4 lg:bg-white lg:relative lg:h-[86vh]"
      // style={{ border: "2px solid black" }}
      // container relative h-[85vh] -z-10 text-center
    >
       <div className="h-96 pt-5 z-10 lg:absolute lg:pt-0 lg:h-[450px] lg:right-[30%] lg:top-[13%]">
      {/* absolute top-10 right-64 */}
        <img src={myPhoto} alt="" className="h-full mx-auto rounded-lg" style={{}} />
        {/* h-[550px] w-[400px] */}
      </div>

      <div className="text-2xl text-center py-20 px-8 lg:text-3xl lg:absolute lg:h-full lg:w-[55vw] lg:left-0 lg:bg-altBg lg:pt-44 lg:pr-[25%] xl:pr-[15%]">
        {/* h-full w-[900px] */}
        <div className="">
          {/* text-4xl pt-36 px-52 */}
          <p>
            "I&#39;m out to invest in an enduring software career and to seek
            self-development, advancement and improvement while enjoying job
            satisfaction."
            {/* Well proven in, with the precision and loyalty
            required to excel. */}
          </p>
        </div>
      </div>

      <img src={dottedSmall} alt="bg" className="absolute top-5 right-[400px] hidden lg:block animate-pulse"/>
      <img src={dottedSmall} alt="bg" className="absolute top-5 right-[500px] hidden lg:block"/>
      <img src={dottedSmall} alt="bg" className="absolute top-36 right-[400px] hidden lg:block"/>
      

     
    </section>
  );
}

export default MeCard;
