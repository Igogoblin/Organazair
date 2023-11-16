import React from "react";
import { useSelector } from "react-redux";

function ProjectList() {
  const project = useSelector((state) => state.project.projects);

  //   const prod = project.find(checkTheme);
  //   function checkTheme(status) {
  //     if (project.statusShow) return project.theme;
  //   }
  //   const prod = project.map((prod) => {
  //     if (prod.statusShow) return prod.theme;
  //   });
  console.log("our project", project);
  // console.log(project);
  return (
    <div>
      <h3>this description theme</h3>
      {}
    </div>
  );
}

export default ProjectList;
