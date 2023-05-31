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
import logo from "../../assets/logobranca.png";

function Contact() {
  return (
    <ContactContainer>
      <h2>Let's Talk</h2>

      <div className="main">
        <div className="left">
          <img className="logo" src={logo} />
          <p>
            We would love to get to know you better, don't be shy, feel free to send us a detailed message with any questions or with anything you might need, and shortly we will be reaching out to you to figure out the best solution for your case.
          </p>
          <div className="icons">
            <p>
              <FaPhone className="icon" /> Phone Number
            </p>
          </div>
          <div className="icons">
            <p>
              {" "}
              <FaMailBulk className="icon" /> Email
            </p>
          </div>
          <div className="icons">
            <a href="https://www.linkedin.com/in/joaobogoprofessional/">
              <FaLinkedin className="icona" />
            </a>
            <a href="https://github.com/joaobogo">
              <FaGithub className="icona" />
            </a>
            <a href="https://wa.me/5541996284949">
              <FaWhatsapp className="icona" />
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
