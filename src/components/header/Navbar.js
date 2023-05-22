import React, { useState } from "react";
import NavbarContainer from "./Navbar.styles";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <NavbarContainer>
      <h1>JLFC</h1>

      <div className="desktopmenu">
        <a href="/">Home</a>
        <a href="/">About Us</a>
        <a href="/">Projects</a>
        <a href="/">Contact Us</a>
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
            <a>About</a>
          </li>
          <li>
            <a>Services</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
    </NavbarContainer>
  );
}

export default Navbar;
