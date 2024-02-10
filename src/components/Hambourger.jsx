import React, { useState } from "react";
import hambourgerIcon from "../assets/icons/hambourgerOne.svg";
// import hambourgerIcon from "../assets/icons/hambourgerTwo.svg";
// import hambourgerIcon from "../assets/icons/hambourgerAnime.svg";

function Hambourger() {
  return (
    <section className="lg:hidden">
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer" className="btn btn-primary drawer-button rounded-sm bg-inherit border-none shadow-none  text-white">
            <img src={hambourgerIcon} alt="" className="w-8"/>
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 min-h-full bg-base-200 text-base-content text-lg w-[70%]">
            {/* Sidebar content here */}
            <li className="font-medium text-2xl text-textMedium">
              <a> Osora. </a>
            </li>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#footer">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Hambourger;
