import React from "react";

function Nav() {
  return (
    <nav className="hidden text-xl font-medium h-full lg:block">
      <ul className="flex h-full">
        <li className="border-l border-borderColor px-12 h-full hover:text-textLight flex flex-col justify-center lg:px-8">
          <a href="#home">Home</a>
        </li>
        <li className="border-l border-borderColor px-12 h-full hover:text-textLight flex flex-col justify-center">
          <a href="#about">About</a>
        </li>
        <li className="border-l border-borderColor px-12 h-full hover:text-textLight flex flex-col justify-center">
          <a href="#experience">Portfolio</a>
        </li>
        <li className="border-l border-borderColor px-12 h-full hover:text-textLight flex flex-col justify-center">
          <a href="#footer">Contact</a>
        </li>
        <li className="border-l border-borderColor px-12 h-full hover:text-textLight flex flex-col justify-center underline whitespace-nowrap">
          <a href="mailto:oezewi@gmail.com">Fire me an email</a>
        </li>

        {/* <li className=''>Fire an email</li> */}
      </ul>
    </nav>
  );
}

export default Nav;
