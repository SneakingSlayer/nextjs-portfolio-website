import React, { useRef } from "react";
import style from "./projects.module.css";
import { Row, Col } from "react-bootstrap";
import { CgArrowLongRight } from "react-icons/cg";
import { Project } from "../project/Project";
import { myProjects } from "../myProjects";
export const Projects = () => {
  return (
    <div className={style.projects} id="projects">
      <main className="content">
        <h1 className={style.title}>
          <span className={style.highlight + " fs-4"}>03.</span> Featured
          Projects
        </h1>
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
      </main>
    </div>
  );
};
