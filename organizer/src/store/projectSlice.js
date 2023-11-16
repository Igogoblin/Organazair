import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
  name: "project",
  initialState: {
    projects: [
      {
        id: 1,
        text: "exemple 1",
        completed: false,
        theme: ["busines 1", "busines 2", "busines 3"],
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
      console.log(state);
      console.log(action);
      state.projects.map((proj) =>
        proj.id === action.payload.id
          ? (proj.statusShow = true)
          : (proj.statusShow = false)
      );
      console.log(state);
    },
    changeProject(state, action) {
      console.log("when we try change input by project, action - ", action);
      // const changeText = state.projects.find((proj)=>proj.id===action.payload.id);
      // changeText.text= action.payload.text;
      state.projects.map((proj) =>
        proj.statusShow ? (proj.text = action.payload) : ""
      );
    },
  },
});

export const {
  addProject,
  toggleComplete,
  removeProject,
  changeProject,
  changeStatus,
} = projectSlice.actions;
export default projectSlice.reducer;
