import styled from "styled-components";

const AboutContainer = styled.div`
  display: flex;
  justify-content: space-evenly;

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25vw;
    height: 40vh;
    border: solid 1px;
    background-color: black;
    color: white;
  }

  p {
    font-size: 28px;
    padding: 5%;
  }
  .circle {
    border: solid 2px black;
    border-radius: 50%;
    width: 30%;
    height: 40%;
    margin-top: -18%;
    margin-bottom: -5%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 100%;
    height: 100%;
  }

  .google {
    width: 90%;
    height: 90%;
  }

  @media screen and (max-width: 780px) {
    flex-direction: column;
    align-items: center;

    .card {
      width: 85vw;
      height: 230px;
      margin-bottom: 20%;
      margin-top: 4%;
    }

    .circle {
      width: 95px;
      height: 90px;
      margin-top: -14%;
      margin-bottom: -8%;
    }

    p {
      padding: 10%;
      font-size: 34px;
    }
  }

  @media screen and (max-width: 395px) {
    .card {
      width: 85vw;
      height: 200px;
      margin-top: 6%;
      margin-bottom: 9%;
    }

    .circle {
      width: 90px;
      height: 80px;
      margin-top: -14%;
      margin-bottom: -12%;
    }

    p {
      font-size: 32px;
    }
  }

  @media screen and (max-width: 376px) {
    .card {
      width: 85vw;
      height: 180px;
      margin-top: 14%;
      margin-bottom: 8%;
    }

    .circle {
      width: 80px;
      height: 80px;
      margin-top: -14%;
      margin-bottom: -12%;
    }

    p {
      font-size: 30px;
    }
  }

  @media screen and (max-width: 361px) {
    .card {
      width: 85vw;
      height: 180px;
      margin-top: 14%;
      margin-bottom: 8%;
    }

    .circle {
      width: 80px;
      height: 75px;
      margin-top: -14%;
      margin-bottom: -12%;
    }

    p {
      font-size: 30px;
    }
  }

  @media screen and (max-width: 355px) {
    .card {
      width: 85vw;
      height: 180px;
      margin-top: 8%;
      margin-bottom: 8%;
    }

    p {
      font-size: 28px;
    }
  }
`;

export default AboutContainer;
