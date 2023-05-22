import React, { useState } from "react";
import AboutContainer from "./About.styles";

function About() {
const [isOpen,setIsOpen] = useState(false)
const [isOpen2,setIsOpen2] = useState(false)
const [isOpen3,setIsOpen3] = useState(false)

  return (
    <AboutContainer>
      <h2>How does it work?</h2>

      <div className="left">
        <h3>1º</h3>
        <div className={`circle ${isOpen ? "open" : ""}`} onClick={()=>setIsOpen(!isOpen)}></div>
      </div>

      <div className="right">
      <h3>2º</h3>
        <div className={`circle ${isOpen2 ? "open" : ""}`} onClick={()=>setIsOpen2(!isOpen2)}></div>
      </div>

      <div className="left">
      <h3>3º</h3>
        <div className={`circle ${isOpen3 ? "open" : ""}`} onClick={()=>setIsOpen3(!isOpen3)}></div>
      </div>
    </AboutContainer>
  );
}

export default About;
