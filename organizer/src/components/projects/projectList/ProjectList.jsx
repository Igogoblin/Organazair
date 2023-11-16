import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ThemeItem from "./ThemeItem";
import s from "./theme.module.css";
import NewThemeForm from "./NewThemeForm";
import { addTheme } from "../../../store/projectSlice";

function ProjectList() {
  const themes = useSelector((state) => state.project.themes);
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  // console.log("out theme", themes);
  const addThemeText = () => {
    dispatch(addTheme({ text }));
    setText("");
  };
  return (
    <div className={s.main}>
      <h3>this description theme</h3>
      <ul>
        {themes.length > 0 ? (
          themes.map((theme) => (
            <ThemeItem key={theme.id} {...theme}></ThemeItem>
          ))
        ) : (
          <div>epmty themas</div>
        )}
      </ul>
      <div>
        <NewThemeForm
          text={text}
          handleInput={setText}
          handleSubmit={addThemeText}
        />
      </div>
    </div>
  );
}

export default ProjectList;
