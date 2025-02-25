import React from "react";
import Landing from "./components/Landing";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Research from "./components/Research";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <Landing />
      <About />
      <Projects />
      <Skills />
      <Research />
      <Testimonials />
      <Contact />
    </main>
  );
}
