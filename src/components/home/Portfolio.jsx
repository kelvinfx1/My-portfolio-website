import React from "react";
import project1 from "../../assets/portfolioSite-img.png";
import myPhoto2 from "../../assets/osora-pressing-2.jpg";

function Portfolio() {
  return (
    <section className="p-28 relative">

      <p className="text-8xl text-gray-400 font-bold italic opacity-5 absolute top-60 -left-32 rotate-90">Portfolio</p>

      <div className="w-[50%]">
        <img src={project1} alt="" />
      </div>

      <div className="absolute w-[40%] top-[25%] left-[45%]"> {/* second column*/}

            <div className="flex flex-col items-end">
                <p>Featured Project</p>
                <p className="text-xl font-bold my-2">My Portfolio Website</p>
            </div>

            <div className="bg-black text-white text-xl py-6 px-4 rounded-lg">
                <p>
                    This is a challenge from frontend mentor. The web app basically
                    fetches a list of countries via an API call and then displays the
                    information to the user with ability to sort, search and also toggle
                    theme.
                </p>
            </div>

            <div className="flex gap-4 justify-end">
                <p>React</p>
                <p>Tailwind</p>
                <p>Daisy ui</p>
            </div>
      </div>
    </section>
  );
}

export default Portfolio;
