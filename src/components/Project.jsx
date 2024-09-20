import React, { useContext } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../assets/data";
import { DarkModeContext } from "../context/DarkModeContext";

const Project = () => {
  const { projectRef } = useContext(DarkModeContext);

  return (
    <>
      <div ref={projectRef}></div>
      <div className="w-full mb-10" id="project">
        <div className="text-center">
          <h1 className="text-orange text-3xl font-bold">PROJECTS</h1>
          <h3 className="text-gray-500">My best works</h3>
        </div>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-x-20">
          {projects.map((project) => (
            <ProjectCard key={project.id} data={project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Project;
