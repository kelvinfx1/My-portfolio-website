import { useState } from 'react'
import Header from './components/home/Header'
import Hero from './components/home/Hero'
import About from './components/home/About'
import Experience from './components/home/Experience'
import Footer from './components/home/Footer'
import Portfolio from './components/home/Portfolio'


function App() {

  return (
    <section className='w-ful'>
      <Header />
      <Hero />
      <About />
      <Experience />
      {/* <Portfolio /> */}
      <Footer />
     
    </section>
  )
}

export default App
