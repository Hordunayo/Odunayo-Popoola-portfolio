import React from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import ProjectSec from "./components/sections/ProjectSec";
import Services from "./components/sections/Services";
import Testimonial from "./components/sections/Testimonial";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
const App = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <ProjectSec />
        <Services />
        <Testimonial />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
