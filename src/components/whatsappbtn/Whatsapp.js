import React from "react";
import WhatsApp from "../../assets/WhatsApp.jpg";
import WhatsAppContainer from "./Whatsapp.styles";



function WhatsappBtn() {
  return (
    <WhatsAppContainer>
      <a href="https://wa.me/554196078718" className="whatsappbtn">
        <img alt="Whatsapp Logo" src={WhatsApp} />
      </a>
    </WhatsAppContainer>
  );
}

export default WhatsappBtn;