import "./App.css";
import React from "react";
import Navbar from "./components/header/Navbar";
import Main from "./components/main/Main";
import About from "./components/about/About";
import OurProjects from "./components/projects/OurProjects";
import Ad from "./components/ad/Ad";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <About />
      <OurProjects />
      <Ad/>
      <Contact/>
    </div>
  );
}

export default App;
