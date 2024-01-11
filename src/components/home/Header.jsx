import React from "react";
import Logo from "../Logo";
import Nav from "./Nav";
// import Hambourger from "../Hambourger";

function Header() {
  return (
    <section className="bg-[rgb(90,255,128)] px-6 border-gray-700 border-b-[1px] overflow-hidden md:px-10 lg:px-24 lg:h-24">
      <div className="flex justify-between ">
        <Logo />
        <Nav />
      </div>
      {/* <Hambourger /> */}
    </section>
  );
}

export default Header;
