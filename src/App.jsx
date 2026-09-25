import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/project";
import Contact from "./components/contact";
// import Photo from "./components/photo_card";
import Highlights from "./components/Highlights";
// import TextScramble from "./components/TextScramble";
import "./App.css";
import HelloIntro from "./components/hello";
import { useEffect, useState } from "react";
// EDITED LINE: Cleaned up unused import
import Background from "./components/Background";
import { SmoothCursor } from "./components/UI/SmoothCursor";

import Footer from "./components/Footer";
import IconCloud from "./components/UI/IconCloud";

const techIcons = [
  // Frontend
  "javascript",
  "react",
  "html5",
  "css3",
  "bootstrap",
  "three.js",
  "nodedotjs",
  "express",
  "nextdotjs",
  "mongodb",
  "postgresql",
  "sqlite",
  "vercel",
  "docker",
  "git",
  "github",
  "postman",
  "visualstudiocode",
  "figma",
  "cplusplus",
  "python",
  "jupyter",
  "numpy",
  "pandas",
  "matplotlib",
  "seaborn"
];

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // Intro timer
    const introTimer = setTimeout(() => {
      setShowIntro(false);
    }, 3000);

    // EDITED LINE: Lock zoom gestures (Pinch-to-zoom on iOS/trackpads)
    const handleGestureStart = (e) => e.preventDefault();

    // EDITED LINE: Lock Ctrl + Wheel scroll zoom on desktop
    const handleWheel = (e) => {
      if (e.ctrlKey) {
        e.preventDefault();
      }
    };

    // EDITED LINE: Lock Ctrl + '+' / '-' keyboard shortcuts
    const handleKeyDown = (e) => {
      if (
        (e.ctrlKey || e.metaKey) &&
        (e.key === "+" || e.key === "-" || e.key === "=" || e.key === "0")
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener("gesturestart", handleGestureStart);
    document.addEventListener("wheel", handleWheel, { passive: false });
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(introTimer);
      document.removeEventListener("gesturestart", handleGestureStart);
      document.removeEventListener("wheel", handleWheel);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      {showIntro ? (
        <HelloIntro />
      ) : (
        <div className="relative min-h-screen bg-[#030712] text-white">
          <SmoothCursor />
          <Background />

          {/* ✅ ONLY ONE BACKGROUND LAYER */}
          {/* <Particlesbg /> */}

          {/* ✅ CONTENT ABOVE BACKGROUND */}
          <div className="relative z-10">

            <Navbar />

            <section id="home" className="pt-20 pb-12 px-6 max-w-7xl mx-auto flex flex-col justify-start min-h-screen scroll-mt-24 bg-transparent text-white py-20">
              <Hero />
            </section>

            <section id="about" className="pt-20 pb-12 px-6 max-w-7xl mx-auto flex flex-col justify-start min-h-screen scroll-mt-24 bg-transparent text-white py-20">
              <About />
            </section>

            <section id="skills" className="pt-0 pb-12 px-6 max-w-7xl mx-auto flex flex-col justify-start min-h-screen scroll-mt-24 bg-transparent text-white py-20">
              <div className="justify-center flex flex-col lg:flex-row items-center gap-8">
                <IconCloud iconSlugs={techIcons} />
                <Skills />
              </div>
            </section>

            {/* EDITED LINE: Fixed overflow bug caused by px-60 on projects section (changed to responsive px-4 sm:px-6) */}
            <section id="projects" className="pt-0 pb-12 px-4 sm:px-6 max-w-7xl mx-auto flex flex-col justify-start min-h-screen scroll-mt-24 bg-transparent text-white py-20">
              <Projects />
            </section>

            <section id="highlights" className="pt-0 pb-12 px-6 max-w-7xl mx-auto flex flex-col justify-start min-h-screen scroll-mt-24 bg-transparent text-white py-20">
              <Highlights />
            </section>

            <section id="contact" className="pt-0 pb-12 px-6 max-w-7xl mx-auto flex flex-col justify-start min-h-screen scroll-mt-24 bg-transparent text-white py-20">
              <Contact />
            </section>
            
            <Footer />

          </div>
        </div>
      )}
    </>
  );
}

export default App;