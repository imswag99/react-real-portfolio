import React, { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

const Footer = () => {
    const { homeRef, aboutRef, qualificationRef, skillRef, projectRef } =
        useContext(DarkModeContext);

    const handleRef = (refValue) => {
        refValue.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <footer className="w-full border-t border-gray-200 dark:border-white/10 bg-backgroundLight dark:bg-backgroundDark text-textLight dark:text-textDark">
            <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col gap-10">

                <div className="flex flex-col md:flex-row justify-between items-center gap-8">

                    <div
                        onClick={() => handleRef(homeRef)}
                        className="cursor-pointer text-2xl font-bold text-primary"
                    >
                        Swagat
                    </div>

                    <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
                        <span
                            onClick={() => handleRef(aboutRef)}
                            className="cursor-pointer hover:text-primary transition"
                        >
                            About
                        </span>

                        <span
                            onClick={() => handleRef(qualificationRef)}
                            className="cursor-pointer hover:text-primary transition"
                        >
                            Education
                        </span>

                        <span
                            onClick={() => handleRef(skillRef)}
                            className="cursor-pointer hover:text-primary transition"
                        >
                            Skills
                        </span>

                        <span
                            onClick={() => handleRef(projectRef)}
                            className="cursor-pointer hover:text-primary transition"
                        >
                            Projects
                        </span>
                    </div>

                    <div className="flex gap-5 text-xl text-gray-500">
                        <a
                            href="https://github.com/imswag99"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition transform hover:scale-110"
                        >
                            <i className="bx bxl-github"></i>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/swagattalukdar"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition transform hover:scale-110"
                        >
                            <i className="bx bxl-linkedin-square"></i>
                        </a>

                        <a
                            href="https://www.instagram.com/ig_swagattalukdar"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition transform hover:scale-110"
                        >
                            <i className="bx bxl-instagram-alt"></i>
                        </a>
                    </div>
                </div>

                <div className="w-full h-px bg-gray-200 dark:bg-white/10"></div>

                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-3">
                    <p>
                        © {new Date().getFullYear()} Swagat Talukdar. All rights
                        reserved.
                    </p>

                    <p>Built with MERN & Tailwind CSS</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
