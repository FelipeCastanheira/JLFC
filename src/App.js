import "./App.css";
import React from "react";
import Navbar from "./components/header/Navbar";
import Main from "./components/main/Main";
import About from "./components/about/About";
import Ad from "./components/ad/Ad";
import Contact from "./components/contact/Contact";
import TypesWeb from "./components/webtypes/TypesWeb";
import OurProjects from './components/projects/OurProjects'
import WhatsappBtn from "./components/whatsappbtn/Whatsapp";

function App() {
  return (
    <div className="App">
      <Navbar /> 
      <Main />
      <About />
      <TypesWeb/>
      <OurProjects/>
      <Contact/>  
      <WhatsappBtn/>
    </div>
  );
}

export default App;
