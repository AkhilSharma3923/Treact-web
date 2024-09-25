import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Hotel from './components/Hotel/Hotel'
import Trending from './components/Trending/Trending'
import Services from './components/services/Services'
import Question from './components/Question/Question'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Hotel />
      <Trending />
      <Services />
      <Question />
    </div>
  )
}

export default App
