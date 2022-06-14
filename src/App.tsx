import React from 'react'
import "./App.css"
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Services from './components/Services'
import About from './components/About'
import Clients from './components/Clients'
import Prices from './components/Prices'
import Mailing from './components/Mailing'

const App = () => {
  return (
    <div>
        <Navbar />
        <HeroSection />
        <Services />
        <About />
        <Clients />
        <Prices />
        <Mailing />
    </div>
  )
}

export default App