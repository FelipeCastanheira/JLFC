import React, { useState } from "react";
import NavbarContainer from "./Navbar.styles";
import logo from '../../assets/logobranca.png'
import { Link } from "react-scroll";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <NavbarContainer>
      <img className="logo" src={logo}/>

      <div className="desktopmenu">
        <a href="/">Home</a>
        <a href="/">
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            className="buttons"
          >
            Projects
          </Link>
          </a>
        <a href="/">   
        <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="buttons"
          >
            Contact Us
          </Link>
          </a>
      </div>

      <div
        className={`hamburger ${isMenuOpen ? "open" : ""}`}
        onClick={handleMenuClick}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`menu-container ${isMenuOpen ? "open" : ""}`}>
        <ul className="menu">
          <button className="closebutton" onClick={handleMenuClick}>X</button>
          <li>
            <a>Home</a>
          </li>
          <li>
          <a href="/">
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            className="buttons"
          >
            Projects
          </Link>
          </a>
          </li>
          <li>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="buttons"
          >
            Contact Us
          </Link>
          </li>
        </ul>
      </div>
    </NavbarContainer>
  );
}

export default Navbar;
