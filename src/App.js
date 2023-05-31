import "./App.css";
import React from "react";
import Navbar from "./components/header/Navbar";
import Main from "./components/main/Main";
import About from "./components/about/About";
import OurProjects from "./components/projects/OurProjects";
import Ad from "./components/ad/Ad";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <About />
      <OurProjects />
      <Ad/>
    </div>
  );
}

export default App;
