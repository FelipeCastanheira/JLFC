import styled from "styled-components";

const AboutContainer = styled.div`
  background-color: var(--secondary);

  h2 {
    margin-top: 0;
    margin-bottom: 10px;
    font-size: 30px;
  }

  .circle {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: var(--primary);
    animation: ease-in;
    transition: 0.4s;
    border: solid 1px var(--tertiary);
  }

  .circle:hover {
    cursor: pointer;
  }

  .open {
    width: 400px;
    border-radius: 30px;
    transition: 0.4s;
    animation: ease-out;
  }

  .left {
    display: flex;
    justify-content: flex-start;
    width: 90vw;
    padding-left: 10vw;
  }

  .right {
    display: flex;
    justify-content: flex-end;
    width: 90vw;
  }

  h3 {
    font-size: 30px;
    margin: 5px;
  }

  @media screen and (max-width: 780px) {
    padding-top: 15px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    h2 {
      font-size: 20px;
      margin-bottom: 20px;
    }

    .circle {
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }

    .circle:hover {
      cursor: pointer;
    }

    .open {
      width: 250px;
      border-radius: 30px;
      transition: 0.4s;
      animation: ease-out;
    }

    .left {
      display: flex;
      justify-content: flex-start;
      width: 90vw;
      padding-left: 0;
    }

    .right {
      display: flex;
      justify-content: flex-end;
      width: 95vw;
    }

    h3 {
      font-size: 20px;
      margin: 5px;
    }
  }

  @media screen and (max-width: 380px) {
  }
`;

export default AboutContainer;
