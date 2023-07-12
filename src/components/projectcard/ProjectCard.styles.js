import styled from "styled-components";

const ProjectCardContainer = styled.div`
  width: 28vw;
  
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5vh;

  img {
    width: 100%;
    border-radius: 5px;
  }

  h3{
    margin: 3%;
  }
  .button {
    border: solid var(--tertiary);
    border-radius: 10px;
    background-color: var(--tertiary);
    width: 10vw;
    margin-bottom: 5px;
  }

  .button:hover {
    cursor: pointer;
    border: solid black;
    transition: 0.3s;
  }

  a {
    color: white;
    text-decoration: none;
  }
  @media screen and (max-width: 780px) {
  }
  @media screen and (max-width: 380px) {
  }
`;

export default ProjectCardContainer;
