import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Services from './components/Services'
import Project from './components/Project'
import Contact from './components/Contact'

const App = () => {
  return (
    <>
      <Navbar/>
      <Header/>
      <About/>
      <Services/>
      <Project/>
      <Contact/>
    </>
  )
}

export default App
