import React from 'react'
import "./Navbar.css";
import { motion } from "framer-motion";


const Navbar = () => {
  return (
    <>
      <div className='bg-blue-500 justify-center flex '>
        <a className='w-11 h-12 rounded-3xl' href="">
          <img className='rounded-3xl' src="src\assets\vansh.png" alt="vansh" />
        </a>
        <nav>
          <ul className='flex gap-5'>
            <nav className="flex gap-6 ">
              <a className=' bg-cyan-400 rounded-2xl hover:text-2xl hover:font-bold' href="#home">Home</a>
              <a className=' bg-cyan-400 rounded-2xl hover:text-2xl hover:font-bold' href="#about">About</a>
              <a className=' bg-cyan-400 rounded-2xl hover:text-2xl hover:font-bold' href="#contact">Highlights</a>
              <a className=' bg-cyan-400 rounded-2xl hover:text-2xl hover:font-bold' href="#skills">Skills</a>
              <a className=' bg-cyan-400 rounded-2xl hover:text-2xl hover:font-bold' href="#projects">Project</a>
              <a className=' bg-cyan-400 rounded-2xl hover:text-2xl hover:font-bold' href="#contact">Contact</a>
            </nav>
          </ul>
        </nav>

      </div>
    </>
  )
}

export default Navbar
