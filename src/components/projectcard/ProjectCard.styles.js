import styled from "styled-components";

const ProjectCardContainer = styled.div`

  width: 30vw;
  border: solid 2px ;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img{
    width: 100%;
  }

  .button{
    border: solid var(--tertiary);
    border-radius: 10px;
    background-color:var(--tertiary) ;
    width: 10vw;
    margin-bottom: 5px;
  }

  .button:hover{
    cursor: pointer;
    border: solid black;
    transition: .3s ;
  }

  a{
    color: white;
    text-decoration: none;
  }
  @media screen and (max-width: 780px) {
  }
  @media screen and (max-width: 380px) {
  }
`;

export default ProjectCardContainer;
