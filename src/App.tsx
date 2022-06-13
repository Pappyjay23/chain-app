import React from 'react'
import Navbar from './components/Navbar'
import "./App.css"
import HeroSection from './components/HeroSection'
import Services from './components/Services'
import About from './components/About'

const App = () => {
  return (
    <div>
        <Navbar />
        <HeroSection />
        <Services />
        <About />
    </div>
  )
}

export default App