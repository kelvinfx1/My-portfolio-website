import React, { useState } from "react";
import hambourgerIcon from "../assets/hambourgerOne.svg";

function Hambourger() {
  const [isOpen, setIsOpen] = useState(false);

  function handeToggle() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="bg-[rgb(76,76,76)] h-14 relative text-white lg:hidden" onClick={handeToggle}>
      <div className="text-xl font-bold py-1 px-2 rounded flex align-middle bg-black absolute right-3 top-[50%] -translate-y-[50%]">
        <p>Menu</p>
        <img src={hambourgerIcon} alt="" className="w-7"/>
      </div>

      {isOpen && (
        <nav className="bg-[#4c4c4c]">
          <ul>
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
