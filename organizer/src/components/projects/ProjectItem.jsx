import React from "react";
import { useDispatch } from "react-redux";
import {
  changeProject,
  removeProject,
  toggleComplete,
} from "../../store/projectSlice";
import s from "./project.module.css";

function ProjectItem({ id, text, completed }) {
  console.log(id + " " + text + " ");
  const dispatch = useDispatch();
  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={(e) => dispatch(toggleComplete({ id }))}
      />
      <input
        onChange={() => dispatch(changeProject({ id }))}
        value={text}
      ></input>
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
