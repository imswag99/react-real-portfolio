import React from "react";
import { motion } from "framer-motion";

const FeaturedProject = ({ project }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-10 items-center"
        >

            <div className="flex flex-col gap-6">

                <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-accent">
                        {project.title}
                    </h3>
                    <p className="text-mutedLight dark:text-mutedDark mt-1">
                        {project.subtitle}
                    </p>
                </div>

                <p className="text-textLight dark:text-textDark leading-relaxed">
                    {project.description}
                </p>

                <div className="flex flex-col gap-3">
                    <h4 className="text-sm uppercase tracking-wide text-mutedLight dark:text-mutedDark">
                        Key Contributions
                    </h4>

                    <ul className="flex flex-col gap-2">
                        {project.highlights.map((item, index) => (
                            <li
                                key={index}
                                className="text-textLight dark:text-textDark text-sm flex items-start gap-2"
                            >
                                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary"></span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                        <span
                            key={index}
                            className="text-xs px-3 py-1 rounded-full bg-surfaceLight dark:bg-surfaceDark text-mutedLight dark:text-mutedDark border border-gray-200 dark:border-gray-700"
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
                            className="px-5 py-2 rounded-md bg-primary text-white text-sm hover:opacity-90 transition"
                        >
                            Live Demo
                        </a>
                    )}

                    <a
                        href={project.github}
                        target="_blank"
                        className="px-5 py-2 rounded-md border border-gray-300 dark:border-gray-700 text-textLight dark:text-textDark text-sm hover:bg-surfaceLight dark:hover:bg-surfaceDark transition"
                    >
                        GitHub
                    </a>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
            >

                <div className="absolute inset-0 bg-primary opacity-10 blur-2xl rounded-2xl"></div>

                <div className="relative rounded-2xl overflow-hidden shadow-card border border-gray-200 dark:border-gray-800 bg-surfaceLight dark:bg-surfaceDark">
                    <img
                        src={`/${project.image}.png`}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                </div>
            </motion.div>
        </motion.div>
    );
};

export default FeaturedProject;
