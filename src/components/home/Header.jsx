import React from "react";
import Logo from "../Logo";
import Nav from "./Nav";
import Hambourger from "../Hambourger";

function Header() {
  return (
    <section className="border bg-white border-b-borderColor z-40 lg:h-20 xl:h-24 sticky w-full top-0" id="home">
      <div className="flex justify-between px-10 overflow-hidden lg:flex lg:justify-between lg:px-24 lg:h-full lg:py-0 xl:px-20">
        <Logo />
        <Nav />
        <Hambourger />
      </div>

      
      
    </section>
  );
}

export default Header;
