import React from "react";
import ContactContainer from "./Contact.styles";
import {
  FaGithub,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";

function Contact() {
  return (
    <ContactContainer>
      <h2>Let's Talk</h2>

      <div className="main">
        <div className="left">
          <h4>JLFC LOGO</h4>
          <div className="icons">
             <p><FaHome className="icon"/>  Brazil</p>
          </div>
          <div className="icons">
             <p><FaPhone className="icon" />  Phone Number</p>
          </div>
          <div className="icons">
            <p> <FaMailBulk className="icon"/>  Email</p>
          </div>
          <div className="icons">
            <a href="https://www.linkedin.com/in/joaobogoprofessional/">
              <FaLinkedin className="icona"/>
            </a>
            <a href="https://github.com/joaobogo">
              <FaGithub className="icona"/>
            </a>
            <a href="https://wa.me/5541996284949">
              <FaWhatsapp className="icona"/>
            </a>
          </div>
        </div>

        <div className="right">
          <form>
            <label>Your Name:</label>
            <input name="name" type="text"></input>
            <label>Email:</label>
            <input name="email" type="email"></input>
            <label>Subject:</label>
            <input name="subject" type="text"></input>
            <label>Message:</label>
            <textarea
              name="message"
              rows="6"
              placeholder="Type your message here:"
            />
            <button className="btn">Submit</button>
          </form>
        </div>
      </div>
    </ContactContainer>
  );
}

export default Contact;
