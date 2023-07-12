import styled from "styled-components";

const TypesWebContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 5vh;

  h2 {
    margin-top: 10vh;
    font-size: 26px;
  }

  h3 {
    font-size: 22px;
    
  }

  .card {
    background-color: black;
    color: white;
    width: 90vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .titlecard {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5%;
    width: 100%;
  }

  img {
    width: 2%;
    height: 3%;
    -webkit-animation: pulsate-fwd 1s ease-in-out infinite both;
    animation: pulsate-fwd 1s ease-in-out infinite both;
  }

  img:hover {
    cursor: pointer;
  }

  p {
    text-align: justify;
    margin: 2%;
    -webkit-animation: scale-in-ver-top 0.5s
      cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: scale-in-ver-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  
  
  }

  @-webkit-keyframes scale-in-ver-top {
    0% {
      -webkit-transform: scaleY(0);
      transform: scaleY(0);
      -webkit-transform-origin: 100% 0%;
      transform-origin: 100% 0%;
      opacity: 1;
    }
    100% {
      -webkit-transform: scaleY(1);
      transform: scaleY(1);
      -webkit-transform-origin: 100% 0%;
      transform-origin: 100% 0%;
      opacity: 1;
    }
  }
  @keyframes scale-in-ver-top {
    0% {
      -webkit-transform: scaleY(0);
      transform: scaleY(0);
      -webkit-transform-origin: 100% 0%;
      transform-origin: 100% 0%;
      opacity: 1;
    }
    100% {
      -webkit-transform: scaleY(1);
      transform: scaleY(1);
      -webkit-transform-origin: 100% 0%;
      transform-origin: 100% 0%;
      opacity: 1;
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    color: white;
    border: white solid;
  }

  button:hover {
    background-color: white;
    color: black;
    cursor: pointer;
    transition: 0.7s;
  }

  @media screen and (max-width: 780px) {
    margin-top: -10vh;

    h2 {
      padding-left: 5%;
      padding-right: 5%;
      font-size: 28px;
      margin-bottom: -2%;
    }

    h3 {
      font-size: 14px;
    }

    p {
      margin: 5%;
      font-size: 14px;
    }

    button {
      font-size: 12px;
    }
  }
  @media screen and (max-width: 395px) {
  }

  @media screen and (max-width: 370px) {
  }
  @media screen and (max-width: 355px) {
  }
`;

export default TypesWebContainer;
