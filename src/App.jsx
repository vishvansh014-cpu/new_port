import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/project";
import Contact from "./components/contact";
import Photo from "./components/photo_card";
import Highlights from "./components/Highlights";

function App() {
  return (
    <>
      <Navbar />

      <section id="home" className="min-h-screen">
        <Hero />
      </section>

      <section id="about" className="min-h-screen">
      <a href="#about"></a>
        <About />
      </section>

      <section id="skills" className="min-h-screen">
      <a href="#skills"></a>
        <Skills />
      </section>

      <section id="projects" className="min-h-screen">
      <a href="#projects"></a>
        <Projects />
      </section>

      <section id="highlights" className="min-h-screen">
      <a href="#highlights"></a>
        <Highlights />
      </section>
      
      <section id="contact" className="min-h-screen">
      <a href="#contact"></a>
        <Contact />
      </section>
    </>
  );
}

export default App;