 // 07058825172
    // Dabaluchukwu

Issues, on the desktop, fix your photo.
work on you logo... !!!!!!!!!!Very importatnt
ALso that logo section on mobile should match the hambouger section in height
Fix the hambourger menu
Review the social media icons size and make sure they are properly linked
Make use of gooogle fonts.. try finding put the one used in the template, genrally have a look at typography
Complete the liking, make sure all the buttons are working
Vertical scroll animations
build one more section (carousel)
Review about page...
Have a general look at typography
do the back-to-top botton


!!!!!!!!!!!!!!> Chekout hoe to use rem & mediaquery to contol text <!!!!!!!!!!!!!!!!!!!!!!
      XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
      XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
 
import React, { useState } from "react";
import hambourgerIcon from "../assets/hambourgerOne.svg";

function Hambourger() {
  const [isOpen, setIsOpen] = useState(false);

  function handeToggle() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="bg-textMedium h-14 relative text-white lg:hidden" onClick={handeToggle}>
      <div className="text-lg font-bold py-1 px-2 rounded flex align-middle bg-textLight absolute right-3 top-[50%] -translate-y-[50%]">
        <p>Menu</p>
        <img src={hambourgerIcon} alt="" className="w-6"/>
      </div>

      {isOpen && (
        <nav className="bg-[#4c4c4c] absolute mt-14 w-full opacity-70">
          <ul className="flex flex-col gap-8">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Portfolio</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default Hambourger;
