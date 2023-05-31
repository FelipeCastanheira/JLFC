import React, { useState } from "react";
import MainContainer from "./Main.styles";
import axios from "axios";

function Main() {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(event) {
    const inputname = event.target.name;
    setContact({ ...contact, [inputname]: event.target.value });
  }

  function handleClick(event) {
    event.preventDefault();
    const from_name = contact.name;
    const message = contact.message;
    const reply_to = contact.email;

    const data = {
      service_id: "service_ujkdmj1",
      template_id: "template_0wnpiak",
      user_id: process.env.REACT_APP_USER_ID,
      template_params: { from_name, message, reply_to },
    };

    axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
    setContact({ name: "", email: "", message: "" });
  }

  return (
    <MainContainer>
      <div className="left">
        <h1>
          Website development,
          <br></br>
          for businesses of all sizes.
        </h1>

        <p>
          We would love to get you know better, here at SOON, we are at team of
          international developers creating websites all over the globe, we work
          with businesses of all sizes to help solve their needs. Feel free to
          reach out to us using our form, and we will return to you shortly.{" "}
        </p>
      </div>

      <div className="right">
        <form>
          <label>Full Name:</label>
          <input
            onChange={handleChange}
            name="name"
            value={contact.name}
            type="text"
          ></input>
          <label>Email:</label>
          <input
            onChange={handleChange}
            name="email"
            value={contact.email}
            type="email"
          ></input>
          <label>Message:</label>
          <textarea
            onChange={handleChange}
            name="message"
            value={contact.message}
            rows="6"
            placeholder="Describe in detail what you have in mind for your website"
          />
          <button onClick={handleClick} className="btn">
            Submit
          </button>
        </form>
      </div>
    </MainContainer>
  );
}

export default Main;
