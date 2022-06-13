import React from 'react'
import Navbar from './components/Navbar'
import "./App.css"
import HeroSection from './components/HeroSection'
import Services from './components/Services'

const App = () => {
  return (
    <div>
        <Navbar />
        <HeroSection />
        <Services />
    </div>
  )
}

export default App