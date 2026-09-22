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


function App() {
  return (

    <div className="relative min-h-screen overflow-hidden">

      {/* 🌌 GLOBAL BACKGROUND */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-black via-blue-900 to-black animate-gradient"></div>

      <Navbar />
      <section id="home" className="min-h-screen scroll-mt-24">
        <Hero />
      </section>

      <section id="about" className="min-h-screen scroll-mt-24">
        <a href="#about"></a>
        <About />
      </section>

      <section id="skills" className="min-h-screen scroll-mt-24">
        <a href="#skills"></a>
        <Skills />
      </section>

      <section id="projects" className="min-h-screen scroll-mt-24">
        <a href="#projects"></a>
        <Projects />
      </section>

      <section id="highlights" className="min-h-screen scroll-mt-24">
        <a href="#highlights"></a>
        <Highlights />
      </section>

      <section id="contact" className="min-h-screen scroll-mt-24">
        <a href="#contact"></a>
        <Contact />
      </section>
    </div>
  );
}

export default App;