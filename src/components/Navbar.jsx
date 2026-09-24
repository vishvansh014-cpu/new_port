import React, { useState, useEffect } from "react";

const navItems = ["Home", "About", "Skills", "Projects", "Highlights", "Contact"];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

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
        threshold: 0.4, // Highlights when 40% of the section enters the screen
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* LOGO */}
        <a href="#home" className="flex items-center gap-2 rounded-2xl">
          <img
            src="/src/assets/vansh.png"
            alt="Vansh Vishwakarma"
            className="w-10 h-10 rounded-full object-cover transition duration-300 hover:scale-150"
          />
          <span className="text-white font-semibold text-m">
            Vansh Vishwakarma <br /> AIML Engineer
          </span>
        </a>

        {/* NAV LINKS */}
        <ul className="hidden md:flex items-center gap-3 text-gray-300">
          {navItems.map((item) => {
            const id = item.toLowerCase();
            const isActive = activeSection === id;

            return (
              <li key={item}>
                <a
                  href={`#${id}`}
                  className={`px-3 py-1.5 rounded-full transition duration-300 font-medium ${
                    isActive
                      ? "text-white bg-blue-600/30 border border-blue-500/50 shadow-[0_0_12px_rgba(59,130,246,0.3)]"
                      : "hover:text-white text-gray-400"
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
              className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-2xl transition duration-300 hover:scale-105 inline-block"
            >
              Resume
            </a>
          </li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;