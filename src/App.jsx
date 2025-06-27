import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import About from './components/About'
import Membership from './components/Membership'
import Suppliments from './components/Suppliments'
import Testimonial from './components/Testimonial'
import Cta from './components/Cta'
import Footer from './components/Footer'
import Contact from './components/Contact'




function App() {
 

  return (
    <>
     <Navbar />
     <Hero />
     <Features />
     <About />
     <Membership />
     <Suppliments />
     <Testimonial />
     <Cta />
     <Contact />
     <Footer />

    </>
  )
}

export default App
