import React, { useState } from "react";
import ProjectList from "./ProjectList";
import s from "./project.module.css";
import { useDispatch, useSelector } from "react-redux";
import NewProjForm from "./NewProjForm";
import { hideProject, showProject } from "../../store/showSlice";
import ProjectItem from "./ProjectItem";
import { addProject } from "../../store/projectSlice";

function Projects() {
  const projects = useSelector((state) => state.project.projects);
  const showProj = useSelector((state) => state.showProject.showP);
  const [text, setText] = useState("");
  // const showProject = useSelector((state) => state.show.showProjectButton);
  const dispatch = useDispatch();
  console.log(projects);
  console.log(showProj[0].showProject);
  const addTask = () => {
    dispatch(addProject({ text }));
    setText("");

    dispatch(hideProject());
  };
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
              <NewProjForm
                text={text}
                handleInput={setText}
                handleSubmit={addTask}
              />
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
