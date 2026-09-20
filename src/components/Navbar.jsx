import React from 'react'
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className='bg-slate-800 justify-center flex'>
      <nav>
        <ul className='flex gap-5'>
          <li className='bg-lime-400 rounded-2xl hover:bg-lime-100-600 hover:text-emerald-700 hover:text-xl'>Home</li>
          <li className='bg-lime-400 rounded-2xl hover:bg-lime-100-600 hover:text-emerald-700 hover:text-xl'>Highlight</li>
          <li className='bg-lime-400 rounded-2xl hover:bg-lime-100-600 hover:text-emerald-700 hover:text-xl'>About</li>
          <li className='bg-lime-400 rounded-2xl hover:bg-lime-100-600 hover:text-emerald-700 hover:text-xl'>Stack</li>
          <li className='bg-lime-400 rounded-2xl hover:bg-lime-100-600 hover:text-emerald-700 hover:text-xl'>Project</li>
          <li className='bg-lime-400 rounded-2xl hover:bg-lime-100-600 hover:text-emerald-700 hover:text-xl'>Contact</li>
        </ul>
      </nav>

    </div>
  )
}

export default Navbar
