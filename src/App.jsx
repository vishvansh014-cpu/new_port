import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/project";
import Contact from "./components/contact";
import Highlights from "./components/Highlights";
import "./App.css";
import HelloIntro from "./components/hello";
import { useEffect, useState } from "react";
import Background from "./components/Background";
import { SmoothCursor } from "./components/UI/SmoothCursor";

import Footer from "./components/Footer";
import IconCloud from "./components/UI/IconCloud";
import Github from "./components/GithubGraph";

const techIcons = [
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
    const introTimer = setTimeout(() => {
      setShowIntro(false);
    }, 3000);

    const handleGestureStart = (e) => e.preventDefault();
    const handleWheel = (e) => {
      if (e.ctrlKey) {
        e.preventDefault();
      }
    };

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

          <div className="relative z-10">
            <Navbar />

            {/* HERO SECTION - Fixed top spacing */}
            <section
              id="home"
              className="pt-28 pb-12 px-6 max-w-7xl mx-auto flex flex-col justify-center min-h-[calc(100vh-80px)] scroll-mt-24 text-white"
            >
              <Hero />
            </section>

            {/* ABOUT SECTION */}
            <section
              id="about"
              className="py-12 px-6 max-w-7xl mx-auto flex flex-col justify-center min-h-screen scroll-mt-24 text-white"
            >
              <About />
            </section>

            {/* GITHUB GRAPH SECTION */}
            <section className="py-12 px-6 max-w-7xl mx-auto text-white">
              <Github />
            </section>

            {/* SKILLS SECTION */}
            <section
              id="skills"
              className="py-12 px-6 max-w-7xl mx-auto flex flex-col justify-center min-h-screen scroll-mt-24 text-white"
            >
              <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
                <IconCloud iconSlugs={techIcons} />
                <Skills />
              </div>
            </section>

            {/* PROJECTS SECTION */}
            <section
              id="projects"
              className="py-12 px-4 sm:px-6 max-w-7xl mx-auto flex flex-col justify-center min-h-screen scroll-mt-24 text-white"
            >
              <Projects />
            </section>

            {/* HIGHLIGHTS SECTION */}
            <section
              id="highlights"
              className="py-12 px-6 max-w-7xl mx-auto flex flex-col justify-center min-h-screen scroll-mt-24 text-white"
            >
              <Highlights />
            </section>

            {/* CONTACT SECTION */}
            <section
              id="contact"
              className="py-12 px-6 max-w-7xl mx-auto flex flex-col justify-center min-h-screen scroll-mt-24 text-white"
            >
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