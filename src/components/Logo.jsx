import React from "react";
import logo from "../assets/logo-removebg-preview.png"


function Logo() {
  return (
    <div className="text-2xl font-medium md:text-3xl text-textMedium dark:text-textLight md:font-bold flex flex-row justify-center pt-[] translate-y-[30%] cursor-pointer py-2 hover:text-textLight  h-[100px]">
      <img src={logo} alt=""  className="h-[70%] w-[] ml-2 rounded-full hover:grayscale"/>
      <p className=""> Zephyr. </p>

    </div>
  );
}

export default Logo;
