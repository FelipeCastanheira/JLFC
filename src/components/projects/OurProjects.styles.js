import styled from "styled-components";

const OurProjectContainer = styled.div`
  h2 {
    margin-top: 10vh;
    font-size: 26px;
  }

  img {
    width: 30vw;
    border: solid black;
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 5%;
    margin-top: 2%;
  }

  .slides {
    display: flex;
  }

  button {
    margin-top: 5%;
    background-color: black;
    color: white;
    border: solid black;
    width: 30%;
    height: 20%;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  button:hover {
    cursor: pointer;
    background-color: white;
    color: black;
    transition: 0.8s;
  }

  a {
    text-decoration: none;
    color: white;
  }

  .mobile{
    display: none;
  }


  @media screen and (max-width: 780px) {
    h2 {
      font-size: 28px;
    }

    .desktop{
      display: none;
    }

    .mobile{
      display: flex;
    }

    img{
      width: 90vw;
    }

    button{
      height: 10%;
      margin-bottom: 10%;
    }
  }
  @media screen and (max-width: 395px) {
  }

  @media screen and (max-width: 370px) {
  }
  @media screen and (max-width: 355px) {
  }
`;

export default OurProjectContainer;
