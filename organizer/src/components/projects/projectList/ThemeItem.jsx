import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  changeTheme,
  removeTheme,
  toggleCompleteTheme,
} from "../../../store/projectSlice";

function ThemeItem({ id, text, completed }) {
  const [title, setTitle] = useState(text);
  const dispatch = useDispatch();
  function changeThemeText(e) {
    console.log(e.target.value);
    setTitle(e.target.value);
    dispatch(changeTheme(title));
  }
  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleCompleteTheme({ id }))}
      ></input>
      <input onChange={(e) => changeThemeText(e)} value={title}></input>
      <span onClick={() => dispatch(removeTheme({ id }))}>&times;</span>
    </li>
  );
}

export default ThemeItem;
