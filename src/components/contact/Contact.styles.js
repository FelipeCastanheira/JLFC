import styled from "styled-components";

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 15vh;

  .main {
    display: flex;
    width: 100%;
    justify-content: center;
  }

  .icons {
    display: flex;
    gap: 8px;
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
    border-radius: 20px;
    background-color: var(--tertiary);
    color: white;
    width: 15vw;
    height: 5vh;
    font-size: 16px;
  }

  .btn:hover {
    cursor: pointer;
    background-color: var(--tertiary);
    color: white;
  }

  .left {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 25vw;
    margin-top: -20vh;
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
    font-size: 40px;
    font-family: "Times New Roman", Times, serif;
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
  }
`;

export default ContactContainer;
