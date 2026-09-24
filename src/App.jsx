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
import HelloIntro from "./components/hello"
import { useEffect, useState } from "react";
import { section } from "framer-motion/client";
// import Particlesbg from "./components/ParticlesBg"
import Background from "./components/Background"
import { SmoothCursor } from "./components/UI/SmoothCursor";
import Footer from "./components/Footer"


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
        <div className="relative min-h-screen bg-[#030712] text-white">
          <SmoothCursor />
          <Background />

          {/* ✅ ONLY ONE BACKGROUND LAYER */}
          {/* <Particlesbg /> */}

          {/* ✅ CONTENT ABOVE BACKGROUND */}
          <div className="relative z-10 ">

            <Navbar />

            <section id="home" className=" pt-20 pb-12 px-6 max-w-7xl mx-auto flex flex-col justify-start min-h-screen scroll-mt-24 bg-transparent text-white py-20">
              <Hero />
            </section>

            <section id="about" className=" pt-20 pb-12 px-6 max-w-7xl mx-auto flex flex-col justify-start min-h-screen scroll-mt-24 bg-transparent text-white py-20">
              <About />
            </section>

            <section id="skills" className=" pt-20 pb-12 px-6 max-w-7xl mx-auto flex flex-col justify-start min-h-screen scroll-mt-24 bg-transparent text-white py-20">
              <Skills />
              
            </section>

            <section id="projects" className=" pt-0 pb-12 px-60 max-w-7xl mx-auto flex flex-col justify-start min-h-screen scroll-mt-24  bg-transparent text-white py-20">
              <Projects />
            </section>

            <section id="highlights" className=" pt-0 pb-12  max-w-7xl mx-auto flex flex-col justify-start min-h-screen scroll-mt-24 bg-transparent text-white py-20">
              <Highlights />
            </section>

            <section id="contact" className=" pt-0 pb-12 px-6 max-w-7xl mx-auto flex flex-col justify-start min-h-screen scroll-mt-24 bg-transparent text-white py-20">
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