import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Card from './components/Card'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
function App() {

  return (
    <div>
      <Navbar/>
      <Hero/>
      <Card/>
    </div>
  )
}

export default App
