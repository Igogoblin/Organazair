import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  changeProject,
  changeStatus,
  removeProject,
  toggleComplete,
} from "../../store/projectSlice";
import s from "./project.module.css";

function ProjectItem({ id, text, completed }) {
  const [title, setTitle] = useState(text);
  const dispatch = useDispatch();

  function changeProjectText(e) {
    setTitle(e.target.value);
    dispatch(changeProject(title));
  }
  return (
    <li onClick={() => dispatch(changeStatus({ id }))}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleComplete({ id }))}
      />
      <input onChange={(e) => changeProjectText(e)} value={title}></input>
      <span
        className={s.forDell}
        onClick={() => dispatch(removeProject({ id }))}
      >
        &times;
      </span>
    </li>
  );
}

export default ProjectItem;
