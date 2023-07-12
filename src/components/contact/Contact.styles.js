import styled from "styled-components";

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 15vh;

  .logo {
    width: 100%;
  }

  .logo2{
    display: none;
  }

  .main {
    display: flex;
    width: 100%;
    justify-content: center;
  }

  .icons {
    display: flex;
    gap: 8px;
    width: 100%;
  }

  .icon {
    color: var(--tertiary);
  }

  .icona {
    color: var(--tertiary);
  }

  .icona:hover {
    cursor: pointer;
    color: black;
    transition: 0.3s;
  }

  .btn {
    margin-top: 5vh;
    text-align: center;
    background-color: black;
    border: black solid;
    color: white;
    width: 15vw;
    height: 5vh;
    font-size: 16px;
  }

  .btn:hover {
    cursor: pointer;
    background-color: white;
    color: black;
    transition: 0.8s;
  }

  .left {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 25vw;
    align-items: center;
  }

  .left p {
    text-align: justify;
  }

  .right {
    width: 40vw;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: center;
    align-items: center;
  }

  label {
    font-size: 16px;
    text-align: left;
    width: 35vw;
  }

  input {
    height: 6vh;
    width: 35vw;
    border-radius: 10px;
    background-color: rgb(255, 255, 255, 0.3);
  }

  textarea {
    width: 35vw;
    border-radius: 10px;
    background-color: rgb(255, 255, 255, 0.3);
  }

  h2 {
    margin-top: 5vh;
    font-size: 30px;
    text-align: center;
  }

  .main {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: black;
  }

  a:hover {
    color: orange;
    transition: 0.3s;
  }

  @media screen and (max-width: 780px) {
align-items: center;


    h2 {
      font-size: 28px;
    }
    .main {
      flex-direction: column;
    }

    .logo {
      margin-top: -10%;
      width: 60vw;
    }

    p {
      width: 90vw;
    }

    .icons {
      width: 90vw;
    }

    .right {
      width: 85vw;
      padding: 5%;
    }

    label {
      width: 100%;
    }

    input {
      width: 100%;
      height: 3vh;
    }

    textarea {
      width: 85vw;
    }


    .btn {
    margin-top: 2vh;
    width: 50vw;
    height: 5vh;
    font-size: 18px;
  }

  .logo{
    display: none;
  }

  .logo2{
    display: flex;
    width: 85vw;
    padding-top: 15%;
  }
  }
  @media screen and (max-width: 395px) {
  }

  @media screen and (max-width: 370px) {
  }
  @media screen and (max-width: 355px) {
  }
`;

export default ContactContainer;
