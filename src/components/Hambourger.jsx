import React, { useState } from "react";
// import hambourgerIcon from "../assets/icons/hambourgerOne.svg";
import hambourgerIcon from "../assets/icons/hambourgerTwo.svg";
// import hambourgerIcon from "../assets/icons/hambourgerAnime.svg";

function Hambourger() {
  return (
    <section className="bg-textMedium py-1 grid justify-end lg:hidden px-5">
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer" className="btn btn-primary drawer-button rounded-sm bg-textLight border-none text-white">
            <img src={hambourgerIcon} alt="" />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li className="font-medium text-2xl text-textMedium">
              <a> Osora. </a>
            </li>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Experience</a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Hambourger;
