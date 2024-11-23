import React from "react";
import Header from "./Components/Header/Header.js";
import About from "./Components/About/About.js";
import Projects from "./Components/Projects/Project.js";
import Contact from "./Components/Contact/Contact.js";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";


function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
