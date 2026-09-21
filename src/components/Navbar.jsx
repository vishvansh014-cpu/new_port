import React from 'react'
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className='bg-slate-800 justify-center flex'>
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
  )
}

export default Navbar
