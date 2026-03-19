import React, { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";
import { motion } from "framer-motion";

const About = () => {
    const { aboutRef } = useContext(DarkModeContext);

    return (
        <>
            <div ref={aboutRef}></div>

            <motion.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="w-full flex flex-col items-center"
            >

                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-primary tracking-wide">
                        About Me
                    </h1>
                    <p className="text-mutedLight dark:text-mutedDark mt-2">
                        A little bit about who I am
                    </p>
                </div>


                <div className="flex flex-col md:flex-row items-center md:items-start gap-12 max-w-5xl w-full">

                    <div className="relative w-64 h-64 group">
                        <div className="absolute inset-0 bg-primary opacity-10 blur-2xl rounded-2xl"></div>

                        <div className="relative rounded-2xl overflow-hidden shadow-card border border-gray-200 dark:border-gray-800">
                            <img
                                src="/avatar.png"
                                alt="Swagat Talukdar"
                                className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                            />
                        </div>
                    </div>


                    <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 max-w-xl">
                        <p className="text-mutedLight dark:text-mutedDark leading-relaxed">
                            I'm{" "}
                            <span className="text-accent font-semibold">
                                Swagat Talukdar
                            </span>
                            , a{" "}
                            <span className="text-accent font-semibold">
                                full-stack developer
                            </span>{" "}
                            who enjoys building modern web applications that
                            combine clean user interfaces with reliable backend
                            systems.
                        </p>

                        <p className="text-mutedLight dark:text-mutedDark leading-relaxed">
                            I have developed several full-stack applications
                            including a real-time project management platform, a
                            knowledge tracking system for learning analytics,
                            and a learning management system. Through these
                            projects, I gained hands-on experience with
                            technologies such as React, Node.js, Express,
                            Django, MongoDB, and REST APIs.
                        </p>

                        <div className="grid grid-cols-3 gap-4 w-full max-sm:grid-cols-1">
                            <div className="bg-surfaceLight dark:bg-surfaceDark rounded-lg p-4 text-center shadow-card">
                                <h3 className="text-xl font-bold text-accent">
                                    4+
                                </h3>
                                <p className="text-sm text-mutedLight dark:text-mutedDark">
                                    Full-Stack Projects
                                </p>
                            </div>

                            <div className="bg-surfaceLight dark:bg-surfaceDark rounded-lg p-4 text-center shadow-card">
                                <h3 className="text-xl font-bold text-accent">
                                    MERN
                                </h3>
                                <p className="text-sm text-mutedLight dark:text-mutedDark">
                                    Primary Stack
                                </p>
                            </div>

                            <div className="bg-surfaceLight dark:bg-surfaceDark rounded-lg p-4 text-center shadow-card">
                                <h3 className="text-xl font-bold text-accent">
                                    REST
                                </h3>
                                <p className="text-sm text-mutedLight dark:text-mutedDark">
                                    API Development
                                </p>
                            </div>
                        </div>

                        <a
                            href="/Resume.pdf"
                            download
                            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-xl font-medium hover:shadow-glow transition"
                        >
                            Download Resume
                            <i className="bx bx-download"></i>
                        </a>
                    </div>
                </div>
            </motion.section>
        </>
    );
};

export default About;
