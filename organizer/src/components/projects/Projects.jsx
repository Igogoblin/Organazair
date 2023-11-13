import React from "react";
import ProjectList from "./ProjectList";
import s from "./project.module.css";
import { useSelector } from "react-redux";

function Projects() {
  const projects = useSelector((state) => state.project.projects);
  console.log(projects);
  return (
    <div className={s.main}>
      <div className={s.project}>
        <h2>this is projects</h2>
        {projects.map((project) => (
          <input key={project.id} value={project.text}></input>
        ))}
      </div>
      <ProjectList />
    </div>
  );
}

export default Projects;
