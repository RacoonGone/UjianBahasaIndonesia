import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from "./components/Hero"
import Specification from "./components/Specification"
import Gallery from "./components/Gallery"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Specification />
      <Gallery />
      <Footer />
    </>
  )
}

export default App
