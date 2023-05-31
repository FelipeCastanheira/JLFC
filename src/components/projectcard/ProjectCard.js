import React from "react";
import ProjectCardContainer from "./ProjectCard.styles";

const ProjectCard = (props) => {
  return (
    <ProjectCardContainer>
      <img src={props.imgsrc} alt="image" />
      <h3>{props.title}</h3>
      <div>
        <div className="button">
          <a href={props.view}>View</a>
        </div>
      </div>
    </ProjectCardContainer>
  );
};

export default ProjectCard;
