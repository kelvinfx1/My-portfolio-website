import { useEffect, useState } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from "./components/home/Header";
import Hero from "./components/home/Hero";
import About from "./components/home/About";
import Experience from "./components/home/Experience";
import Footer from "./components/home/Footer";
import Portfolio from "./components/home/Portfolio";
import MeCard from "./components/home/MeCard";
import Gallery from "./components/Gallery";
import SpalshScreen from "./components/SpalshScreen";

function App() {
  
  return (
    <>
      <section className="w-full bg-white overflow-x-hidden">
        <SpalshScreen />
        <Header />
        <Hero />
        <About />
        <Experience />
        <Portfolio />
        <MeCard />
        <Gallery />
        <Footer />

      </section>
    </>
  );
}

export default App;
