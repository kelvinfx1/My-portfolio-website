import React from "react";
import Logo from "../Logo";
import Nav from "./Nav";
import Hambourger from "../Hambourger";

function Header() {
  return (
    <section className="bg-mainBgColor border border-b-borderColor lg:h-20 xl:h-24 sticky w-full top-0">
      <div className=" lg:flex lg:justify-between lg:px-24 lg:h-full lg:py-0 xl:px-20">
        <Logo />
        <Nav />
      </div>

      <Hambourger />
      
    </section>
  );
}

export default Header;
