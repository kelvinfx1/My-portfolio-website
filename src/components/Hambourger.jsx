import React, { useState } from "react";
import hambourgerIcon from "../assets/hambourgerOne.svg";

function Hambourger() {
  const [isOpen, setIsOpen] = useState(false);

  function handeToggle() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="bg-red-500 h-8 min-w-fit relative" onClick={handeToggle}>
            <div className="flex gap-1 text-xl font-medium">
            <p>Menu</p>
            <img src={hambourgerIcon} alt="" />
            </div>

            {isOpen && (
            <nav className="bg-blue-800 z-50 ">
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
