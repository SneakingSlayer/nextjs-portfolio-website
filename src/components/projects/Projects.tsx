import React from "react";
import style from "./projects.module.css";
import { Project } from "../project/Project";
import { myProjects } from "../../../fixtures/index.";
import { SectionContainer } from "../section/SectionContainer";
export const Projects = () => {
  return (
    <SectionContainer title="Projects" count="03" id="projects">
      {myProjects.map((project, key) => (
        <Project
          key={key}
          title={project.title}
          description={project.description}
          img={project.img}
          tags={project.tags}
          cta={project.cta}
          url={project.url}
          left={project.left}
        />
      ))}
    </SectionContainer>
  );
};
