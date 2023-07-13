import styled from "styled-components";

const WhyContainer = styled.div`
  h2 {
    font-size: 30px;
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 22vw;
    border: solid;
  }

  .card p {
    text-align: justify;
    width: 80%;
  }

  .main{
    display: flex;
    justify-content: space-evenly;
  }

  @media screen and (max-width: 780px) {
  }
  @media screen and (max-width: 380px) {
  }
`;

export default WhyContainer;
