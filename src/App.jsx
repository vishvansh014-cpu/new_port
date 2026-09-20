import { useState } from 'react'
import './assets/photo.png'
import './App.css'
import './index.css'
import Navbar from './components/Navbar'
import Photo_card from './components/photo_card'
function App() {

  return (
    <>
      <Navbar/>
      <Photo_card/>
    </>
  )
}

export default App
