import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import AiChatBot from "./components/AiChatBot";


function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Home />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Skills />
        <Contact />
      </main>
      <AiChatBot/>
    </div>
  );
}

export default App;