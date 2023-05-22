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
          Criação de sites profissionais.
          <br></br>
          Para negócios de todos os tamanhos.
        </h1>
      </div>

      <div className="right">
        <form>
          <label>Nome Completo:</label>
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
          <label>Messagem:</label>
          <textarea
            onChange={handleChange}
            name="message"
            value={contact.message}
            rows="6"
            placeholder="Descreve detalhadamente o que você tem em mente para o seu site"
          />
          <button onClick={handleClick} className="btn">
            Enviar
          </button>
        </form>
      </div>
    </MainContainer>
  );
}

export default Main;
