import styled from "styled-components";

const AdContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 15vh;
  background-color: var(--tertiary);

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    font-size: 40px;
    font-weight: bold;
    text-decoration: none;
    color: white;
  }
  @media screen and (max-width: 780px) {
  }
  @media screen and (max-width: 380px) {
  }
`;

export default AdContainer;
