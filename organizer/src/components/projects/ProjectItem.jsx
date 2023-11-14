import React from "react";
import { useDispatch } from "react-redux";
import {
  changeProject,
  removeProject,
  toggleComplete,
} from "../../store/projectSlice";

function ProjectItem({ id, text, completed }) {
  const dispatch = useDispatch();
  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={(e) => dispatch(toggleComplete({ id }))}
      ></input>
      <input onChange={() => dispatch(changeProject({ id }))}>{test}</input>
      <span onClick={() => dispatch(removeProject({ id }))}>&times;</span>
    </li>
  );
}

export default ProjectItem;
