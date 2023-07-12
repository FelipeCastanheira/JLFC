import styled from "styled-components";

const MainContainer = styled.div`
  width: 100vw;
  height: 120vh;
  background: url(${(props) => props.main}) no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  flex-direction: column;

  .h1on {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
    height: 40%;
    margin-left: 28%;
    margin-right: 32%;
    margin-top: 25%;
    margin-bottom: 35%;
    font-size: 44px;
    animation-name: fadeIn;
    animation-duration: 1s;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  button {
    width: 40%;
    font-family: "Julius Sans One", sans-serif;
    font-size: 18px;
    margin-top: 10%;
    background: none;
  }

  button:hover {
    cursor: pointer;
    background-color: black;
    color: white;
    transition: 0.7s;
  }

  .modaloff {
    display: none;
  }

  .h1off {
    display: none;
  }

  .modalon {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
    height: 40%;
    margin-left: 28%;
    margin-right: 32%;
    margin-top: 25%;
    margin-bottom: 35%;
    transition: 1s;
    animation-name: fadeIn;
    animation-duration: 1s;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .closebutton {
    display: flex;
    justify-content: center;
    width: 10%;
    margin-left: 90%;
  }

  @media screen and (max-width: 768px) {
    background: url(${(props) => props.mainmobile}) no-repeat;
    background-size: contain;
    height: 50vh;
    overflow: hidden;

    .h1on {
      width: 80%;
      height: 40%;
      overflow: hidden;
      margin-left: 0;
      margin-right: 0;
      margin-bottom: 50%;
      margin-top: 15%;
      font-size: 30px;
    }

    button {
      margin-top: 5%;
      font-size: 14px;
      width: 60%;
  
    }

    .modalon {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 80%;
      height: 40%;
      margin-left: 10%;
      margin-right: 10%;
      margin-top: 10%;
      margin-bottom: 50%;
      font-size: 12px;
    }

    .closebutton {
      font-size: 8px;
      width: 7%;
    }
  }

  @media screen and (max-width: 380px) {
    .h1on {
      width: 80%;
      height: 55%;
      margin-bottom: 30%;
      margin-top: 12%;
      font-size: 28px;
    }
  }

  @media screen and (max-width: 355px) {
    h1 {
    }
  }
`;

export default MainContainer;
