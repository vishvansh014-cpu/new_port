import React from 'react'
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className='bg-slate-800 justify-center flex'>
      <nav>
        <ul className='flex gap-5'>
          <nav className="flex gap-6">
            <a className=' bg-cyan-400 rounded-2xl' href="#home">Home</a>
            <a className=' bg-cyan-400 rounded-2xl' href="#about">About</a>
            <a className=' bg-cyan-400 rounded-2xl' href="#skills">Stack</a>
            <a className=' bg-cyan-400 rounded-2xl' href="#projects">Project</a>
            <a className=' bg-cyan-400 rounded-2xl' href="#contact">Contact</a>
          </nav>
        </ul>
      </nav>

    </div>
  )
}

export default Navbar
