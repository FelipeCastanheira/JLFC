import styled from "styled-components";

const WhatsAppContainer = styled.div`
  .whatsappbtn {
    position: fixed;
    right: 15px;
    top: 80vh;
    z-index: 5;
    -webkit-animation: pulsate-fwd 1.5s ease-in-out infinite both;
    animation: pulsate-fwd 1.5s ease-in-out infinite both;
  }

  @-webkit-keyframes pulsate-fwd {
  0% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    -webkit-transform: scale(1.1);
            transform: scale(1.1);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}
@keyframes pulsate-fwd {
  0% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    -webkit-transform: scale(1.1);
            transform: scale(1.1);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}


  .whatsappbtn img {
    width: 60px;
    transition: 0.4s;
    border-radius: 50%;
    border: solid black 2px;
  }

  .whatsappbtn img:hover {
    transform: scale(1.2);
  }

  @media screen and (max-width: 640px) {
    .whatsappbtn {
      position: fixed;
      right: 20px;
      top: 88vh;
      z-index: 5;
    }
  }

  @media screen and (max-width: 640px) {
    .whatsappbtn {
 
    }
  }
`;

export default WhatsAppContainer;
