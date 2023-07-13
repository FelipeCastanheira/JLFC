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
    <ContactContainer id="contact">
      <h2>Get in Touch</h2>

      <div className="main">
        <div className="left">
          <img className="logo" src={logo} />
          <p>
            We would love to get to know you better, feel free to send us a
            detailed message with any questions or with anything you might need,
            and shortly we will be reaching out to you to figure out the best
            solution for your case.{" "}
          </p>
          <div className="icons">
            <p>
              {" "}
              <FaMailBulk className="icon" />    support@soonwebsolutions.com
            </p>
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
          <img className="logo2" src={logo} />
        </div>
      </div>
    </ContactContainer>
  );
}

export default Contact;
