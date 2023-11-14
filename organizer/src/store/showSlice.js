import { createSlice } from "@reduxjs/toolkit";

const showSlice = createSlice({
  name: "show",
  initialState: {
    showP: [{ showProject: false }],
  },
  reducers: {
    showProject(state) {
      //   console.log(state.showP.showProject);
      //   console.log(state.showP[0].showProject);
      state.showP[0].showProject = true;
    },
    hideProject(state) {
      state.showProject = false;
    },
  },
});

export const { showProject, hideProject } = showSlice.actions;
export default showSlice.reducer;
