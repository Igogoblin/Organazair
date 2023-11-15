import React from "react";
import ProjectList from "./ProjectList";
import s from "./project.module.css";
import { useDispatch, useSelector } from "react-redux";
import NewProjForm from "./NewProjForm";
import { showProject } from "../../store/showSlice";
import ProjectItem from "./ProjectItem";

function Projects() {
  const projects = useSelector((state) => state.project.projects);
  const showProj = useSelector((state) => state.showProject.showP);
  // const showProject = useSelector((state) => state.show.showProjectButton);
  const dispatch = useDispatch();
  console.log(projects);
  console.log(showProj[0].showProject);
  // function forMe(n) {
  //   console.log(n);
  // }
  return (
    <div className={s.main}>
      <div className={s.project}>
        <h2>this is projects</h2>
        <ul>
          {projects.map((project) => (
            <ProjectItem key={project.id} {...project} />
          ))}
        </ul>

        <div>
          {showProj[0].showProject ? (
            <div>
              <NewProjForm />
            </div>
          ) : (
            <button onClick={() => dispatch(showProject())}>
              if need new project
            </button>
          )}
        </div>
      </div>
      <ProjectList />
    </div>
  );
}

export default Projects;
