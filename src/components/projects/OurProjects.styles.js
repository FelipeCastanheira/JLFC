import styled from "styled-components";

const OurProjectContainer = styled.div`
  background-color: var(--secondary);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
padding-bottom:10vh;

  h2 {
    font-size: 30px;
  }

  .main {
    display: flex;
    flex-wrap: wrap;
    gap: 3vw;
  }

  @media screen and (max-width: 780px) {
  }
  @media screen and (max-width: 380px) {
  }
`;

export default OurProjectContainer;
