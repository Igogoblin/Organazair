import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const projectSlice = createSlice({
  name: "project",
  initialState: {
    projects: [
      {
        id: 1,
        text: "exemple 1",
        completed: false,
        theme: [
          {
            id: 11,
            text: "busines 1",
            completed: false,
          },
          {
            id: 12,
            text: "busines 2",
            completed: false,
          },
          {
            id: 13,
            text: "busines 3",
            completed: false,
          },
        ],
        statusShow: true,
      },
      {
        id: 2,
        text: "For exemple two",
        completed: false,
        theme: [],
        statusShow: false,
      },
      {
        id: 3,
        text: "Project third so-so",
        completed: false,
        theme: [],
        statusShow: false,
      },
    ],
    themes: [],
    indeficator: "",
  },
  reducers: {
    addProject(state, action) {
      state.projects.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        completed: false,
        theme: [],
        statusShow: false,
      });
    },
    toggleComplete(state, action) {
      // console.log("work toggleComplete - action: ", action);
      const toggledProject = state.projects.find(
        (proj) => proj.id === action.payload.id
      );
      toggledProject.completed = !toggledProject.completed;
    },
    removeProject(state, action) {
      // console.log("this is for delete project, action - ", action);
      // console.log(state.projects);
      state.projects = state.projects.filter(
        (proj) => proj.id !== action.payload.id
      );
    },
    changeStatus(state, action) {
      state.projects.map(
        (proj) => {
          if (proj.id === action.payload.id) {
            proj.statusShow = true;
            state.themes.length = 0;
            state.themes.push(...proj.theme);
            state.indeficator = action.payload.id;
          } else {
            proj.statusShow = false;
          }
        }
        // proj.id === action.payload.id
        //   ? (proj.statusShow = true)
        //   : (proj.statusShow = false)
      );
    },
    changeProject(state, action) {
      console.log("when we try change input by project, action - ", action);
      // const changeText = state.projects.find((proj)=>proj.id===action.payload.id);
      // changeText.text= action.payload.text;
      state.projects.map((proj) =>
        proj.statusShow ? (proj.text = action.payload) : ""
      );
    },
    // ----------------------------------------------------------------------------------
    addTheme(state, action) {
      state.themes.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        completed: false,
      });
      // state.projects.map((proj) => {
      //   if (proj.id === state.indeficator) {
      //     state.projects;
      //     proj.theme;
      //   }
      // });
    },
    toggleCompleteTheme(state, action) {
      const toggleTheme = state.themes.find(
        (theme) => theme.id === action.payload.id
      );
      toggleTheme.completed = !toggleTheme.completed;
    },
    removeTheme(state, action) {
      state.themes = state.themes.filter(
        (them) => them.id !== action.payload.id
      );
    },
    changeTheme(state, action) {
      console.log(state);
      console.log("action theme: ", action);
      state.themes.map((theme) => (theme.text = action.payload));
    },
    reloadState(state) {
      console.log(" test ");
    },
  },
});

export const {
  addProject,
  toggleComplete,
  removeProject,
  changeProject,
  changeStatus,
  addTheme,
  toggleCompleteTheme,
  removeTheme,
  changeTheme,
} = projectSlice.actions;
export default projectSlice.reducer;
