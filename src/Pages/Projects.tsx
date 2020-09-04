import React from "react";
import DisplayProducts from "../Components/DisplayProjects";
import projectData from "../utilities/ProjectData";
import { projectContent } from "../utilities/Strings";

const Projects = () => {
  const gridNum = Math.floor(projectData.length / 13);
  const arr = Array.from(Array(gridNum).keys());
  return (
    <div className="products">
      <h2 className="title">{projectContent.heading}</h2>
      {arr.map((i) => (
        <DisplayProducts
          products={projectData.slice(i * 13, (i + 1) * 13)}
          key={i}
        />
      ))}
      <DisplayProducts
        products={projectData.slice(gridNum * 13, projectData.length)}
        key={"last"}
      />
    </div>
  );
};

export default Projects;
