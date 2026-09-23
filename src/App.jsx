import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/project";
import Contact from "./components/contact";
import Photo from "./components/photo_card";
import Highlights from "./components/Highlights";
import TextScramble from "./components/TextScramble";
import "./App.css";
import HelloIntro from "./components/hello"
import { useEffect, useState } from "react";
import { section } from "framer-motion/client";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowIntro(false);
    }, 3000);
  }, []);

  return (
    <>
      {showIntro ? (
        <HelloIntro />
      ) : (
        
    <div className="cursor">

      <div className="cursor-follower">

        <div className="relative min-h-screen overflow-hidden">

          {/* 🌌 GLOBAL BACKGROUND */}
          <div className="fixed inset-0 -z-10 bg-gradient-to-br from-black via-blue-900 to-black animate-gradient"></div>

          <Navbar />

          <section id="home" className="min-h-screen scroll-mt-24">
            <Hero />
          </section>

          <section id="about" className="min-h-screen scroll-mt-24">
            <About />
          </section>

          <section id="skills" className="min-h-screen scroll-mt-24">
            <Skills />
          </section>

          <section id="projects" className="min-h-screen scroll-mt-24">
            <Projects />
          </section>

          <section id="highlights" className="min-h-screen scroll-mt-24">
            <Highlights />
          </section>

          <section id="contact" className="min-h-screen scroll-mt-24">
            <Contact />
          </section>

        </div>
      </div>
      </div>
      )}
    </>
  );
}
export default App;