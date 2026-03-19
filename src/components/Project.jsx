import React, { useContext } from "react";
import { projects } from "../assets/data";
import { DarkModeContext } from "../context/DarkModeContext";

import FeaturedProject from "./FeaturedProject";
import ProjectItem from "./ProjectItem";

const Project = () => {
    const { projectRef } = useContext(DarkModeContext);

    // Separate TaskPilot (flagship)
    const featuredProject = projects.find((p) => p.title === "TaskPilot");

    // Remaining projects
    const otherProjects = projects.filter((p) => p.title !== "TaskPilot");

    return (
        <section
            ref={projectRef}
            id="project"
            className="w-full py-20 bg-backgroundLight dark:bg-backgroundDark"
        >

            <div className="max-w-6xl mx-auto px-5 mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-primary text-center">
                    Projects
                </h2>
                <p className="text-mutedLight dark:text-mutedDark mt-2 text-center">
                    A collection of projects focused on building scalable and
                    efficient systems.
                </p>
            </div>

            <div className="max-w-6xl mx-auto px-5 mb-24">
                <FeaturedProject project={featuredProject} />
            </div>

            <div className="max-w-5xl mx-auto px-5 flex flex-col gap-20">
                {otherProjects.map((project, index) => (
                    <ProjectItem
                        key={project.id}
                        project={project}
                        index={index}
                    />
                ))}
            </div>
        </section>
    );
};

export default Project;
