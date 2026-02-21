import React from "react";
import Navbar from "./components/ui/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Scene from "./components/canvas/Scene";

const App = () => {
  return (
    <div className="relative z-0">
      <Scene />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
      <Contact />
    </div>
  );
};

export default App;
