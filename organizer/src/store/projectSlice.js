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
      },
      {
        id: 2,
        text: "For exemple two",
        completed: false,
        theme: [],
      },
      {
        id: 3,
        text: "Project third so-so",
        completed: false,
        theme: [],
      },
    ],
    // show: [{ showProject: false }],
  },
  reducers: {
    addProject(state, action) {
      state.projects.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        completed: false,
        theme: [],
      });
    },
    toggleComplete(state, action) {
      const toggledProject = state.projects.find(
        (proj) => proj.id === action.payload.id
      );
    },
    removeProject(state, action) {
      state.projects.filter((proj) => proj.id !== action.payload.id);
    },
    changeProject(state, action) {
      const changeProd = state.projects.find(
        (proj) => proj.id === action.payload.id
      );
    },
  },
});

export const { addProject, toggleComplete, removeProject, changeProject } =
  projectSlice.actions;
export default projectSlice.reducer;
