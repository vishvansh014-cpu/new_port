import React, { useState, useEffect } from "react";
// EDITED LINE: Fixed asset pathing for Vite bundled builds
import avatarImg from "../assets/vansh.png";

const navItems = ["Home", "About", "Skills", "Projects", "Highlights", "Contact"];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  // EDITED LINE: Added state to track mobile drawer open/close status
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.toLowerCase());

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      {/* EDITED LINE: Adjusted padding for mobile screens (px-4 sm:px-6) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        
        {/* LOGO */}
        <a href="#home" className="flex items-center gap-3 group">
          {/* EDITED LINE: Used imported image asset and tuned hover scale */}
          <img
            src={avatarImg}
            alt="Vansh Vishwakarma"
            className="w-10 h-10 rounded-full object-cover transition-transform duration-300 group-hover:scale-110 border border-[#b5f442]/30"
          />
          {/* EDITED LINE: Made subtitle responsive */}
          <span className="text-white font-semibold text-sm leading-tight">
            Vansh Vishwakarma
            <span className="block text-xs font-mono text-[#b5f442]">AIML Engineer</span>
          </span>
        </a>

        {/* DESKTOP NAV LINKS */}
        <ul className="hidden md:flex items-center gap-2 text-gray-300">
          {navItems.map((item) => {
            const id = item.toLowerCase();
            const isActive = activeSection === id;

            return (
              <li key={item}>
                <a
                  href={`#${id}`}
                  
                  className={`px-3.5 py-1.5 rounded-full transition-all duration-300 text-sm font-medium ${
                    isActive
                      ? "text-black bg-[#b5f442] font-semibold shadow-[0_0_15px_rgba(181,244,66,0.4)]"
                      : "hover:text-white text-gray-400 hover:bg-white/5"
                  }`}
                >
                  {item}
                </a>
              </li>
            );
          })}

          <li>
            <a
              href="/new_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              
              className="ml-2 px-4 py-1.5 border border-[#b5f442] text-[#b5f442] hover:bg-[#b5f442] hover:text-black rounded-full transition-all duration-300 text-sm font-semibold inline-block"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* EDITED LINE: Mobile Menu Toggle Button (Using Pure Inline SVG) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-gray-300 hover:text-white focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? (
            /* Close Icon (X) */
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            /* Hamburger Icon */
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

      </div>

      
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#080808]/95 backdrop-blur-xl border-b border-white/10 px-6 py-4 transition-all">
          <ul className="flex flex-col gap-3">
            {navItems.map((item) => {
              const id = item.toLowerCase();
              const isActive = activeSection === id;

              return (
                <li key={item}>
                  <a
                    href={`#${id}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block py-2 text-base font-medium transition-colors ${
                      isActive ? "text-[#b5f442] font-semibold" : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {item}
                  </a>
                </li>
              );
            })}
            
            <li className="pt-2">
              <a
                href="/new_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center py-2.5 border border-[#b5f442] text-[#b5f442] rounded-xl font-semibold text-sm"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;