import React from "react";
import Logo from "../Logo";
import Nav from "./Nav";
import Hambourger from "../Hambourger";

function Header() {
  return (
    <section className="bg-green-300 border border-b-2 lg:h-20 xl:h-28">
      <div className="h-14 lg:flex lg:justify-between lg:px-24 lg:h-full lg:py-0 xl:px-14">
        <Logo />
        <Nav />
      </div>

      <Hambourger />
      
    </section>
  );
}

export default Header;
