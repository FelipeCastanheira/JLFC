import React from "react";
import ProjectData from "./ProjectData";
import ProjectCard from "../projectcard/ProjectCard";
import OurProjectContainer from "./OurProjects.styles";


const OurProjects = () => {
  return (
    <OurProjectContainer>
        <h2>Our Latest Projects</h2>
        <div className="main">
           {ProjectData.map((props, ind) => {
            return  (
                <ProjectCard 
                key={ind}
                imgsrc={props.imgsrc}
                title={props.title}
                view={props.view}
                />
            );
           })}
        </div>
    </OurProjectContainer>
  )
}

export default OurProjects