import React from "react";

const Navbar = () => {
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
        <ul className="hidden md:flex gap-8 text-gray-300">

          {["Home", "About", "Highlights", "Skills", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-white transition duration-300"
              >
                {item}
              </a>
            </li>
          ))}

        </ul>

      </div>
    </nav>
  );
};

export default Navbar;