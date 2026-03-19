import React from "react";
import { motion } from "framer-motion";

const ProjectItem = ({ project, index }) => {
    const isReverse = index % 2 !== 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`grid md:grid-cols-2 gap-8 items-center ${
                isReverse ? "md:grid-flow-dense" : ""
            }`}
        >

            <div className={`relative ${isReverse ? "md:col-start-2" : ""}`}>
                <div className="relative rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-surfaceLight dark:bg-surfaceDark">
                    <img
                        src={`/${project.image}.png`}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                </div>
            </div>

            <div
                className={`flex flex-col gap-4 ${
                    isReverse ? "md:col-start-1" : ""
                }`}
            >

                <div>
                    <h3 className="text-xl font-semibold text-accent">
                        {project.title}
                    </h3>
                    <p className="text-sm text-mutedLight dark:text-mutedDark">
                        {project.subtitle}
                    </p>
                </div>

                <p className="text-sm text-textLight dark:text-textDark leading-relaxed">
                    {project.description}
                </p>

                <ul className="flex flex-col gap-2">
                    {project.highlights.slice(0, 3).map((item, i) => (
                        <li
                            key={i}
                            className="text-sm text-mutedLight dark:text-mutedDark flex items-start gap-2"
                        >
                            <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary"></span>
                            {item}
                        </li>
                    ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-2">
                    {project.tech.map((tech, i) => (
                        <span
                            key={i}
                            className="text-xs px-2 py-1 rounded-md bg-surfaceLight dark:bg-surfaceDark border border-gray-200 dark:border-gray-700 text-mutedLight dark:text-mutedDark"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="flex gap-4 mt-2">
                    {project.live && (
                        <a
                            href={project.live}
                            target="_blank"
                            className="text-sm text-primary hover:underline"
                        >
                            Live
                        </a>
                    )}

                    <a
                        href={project.github}
                        target="_blank"
                        className="text-sm text-mutedLight dark:text-mutedDark hover:text-textLight dark:hover:text-textDark transition"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectItem;
