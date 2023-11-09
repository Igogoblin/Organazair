import React from "react";
import ProjectList from "./ProjectList";
import s from "./project.module.css";

function Projects() {
  return (
    <div className={s.main}>
      <div className={s.project}>this is projects </div>
      <ProjectList />
    </div>
  );
}

export default Projects;
