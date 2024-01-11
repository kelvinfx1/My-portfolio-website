import { useState } from 'react'
import Header from './components/home/Header'
import Hero from './components/home/Hero'
import About from './components/home/About'
import Experience from './components/home/Experience'
import Footer from './components/home/Footer'
import Portfolio from './components/home/Portfolio'
import Hambourger from './components/Hambourger'


function App() {

  return (
    <section>
      <Header />
      <Hambourger />
      <Hero />
      <About />
      <Experience />
      <Portfolio />
      <Footer />
     
    </section>
  )
}

export default App
