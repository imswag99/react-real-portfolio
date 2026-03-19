import React, { useContext, useState } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { AiOutlineAppstore } from "react-icons/ai";
import { RiFileList3Line } from "react-icons/ri";
import { PiGraduationCapBold } from "react-icons/pi";
import { FaRegUser, FaRegImage } from "react-icons/fa";
import { BiHome } from "react-icons/bi";
import { DarkModeContext } from "../context/DarkModeContext";
import { motion } from "framer-motion";

const parent = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.2,
            staggerChildren: 0.08,
        },
    },
};

const children1 = {
    initial: { x: -40 },
    animate: {
        x: 0,
        transition: { duration: 0.4 },
    },
};

const children2 = {
    initial: { x: 40 },
    animate: {
        x: 0,
        transition: { duration: 0.4 },
    },
};

const Navbar = () => {
    const {
        darkMode,
        setDarkMode,
        homeRef,
        aboutRef,
        qualificationRef,
        skillRef,
        projectRef,
    } = useContext(DarkModeContext);

    const [menu, setMenu] = useState(false);

    const toggleDark = () => {
        localStorage.setItem("dark", JSON.stringify(!darkMode));
        setDarkMode(!darkMode);
    };

    const handleRef = (refValue) => {
        refValue.current?.scrollIntoView({ behavior: "smooth" });
        setMenu(false);
    };

    return (
        <>
            <motion.nav
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { delay: 1.2, duration: 0.8 },
                }}
                className="hidden lg:flex w-full justify-between items-center py-8"
            >
                <h1 className="text-xl font-bold tracking-widest uppercase text-primary">
                    Swagat
                </h1>

                <ul className="flex items-center gap-4">
                    <li
                        onClick={() => handleRef(homeRef)}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer
            hover:bg-surfaceLight dark:hover:bg-surfaceDark transition"
                    >
                        <BiHome />
                        <span>Home</span>
                    </li>

                    <li
                        onClick={() => handleRef(aboutRef)}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer
            hover:bg-surfaceLight dark:hover:bg-surfaceDark transition"
                    >
                        <FaRegUser />
                        <span>About</span>
                    </li>

                    <li
                        onClick={() => handleRef(qualificationRef)}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer
            hover:bg-surfaceLight dark:hover:bg-surfaceDark transition"
                    >
                        <PiGraduationCapBold />
                        <span>Qualifications</span>
                    </li>

                    <li
                        onClick={() => handleRef(skillRef)}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer
            hover:bg-surfaceLight dark:hover:bg-surfaceDark transition"
                    >
                        <RiFileList3Line />
                        <span>Skills</span>
                    </li>

                    <li
                        onClick={() => handleRef(projectRef)}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer
            hover:bg-surfaceLight dark:hover:bg-surfaceDark transition"
                    >
                        <FaRegImage />
                        <span>Projects</span>
                    </li>

                    <li
                        className="p-2 rounded-lg cursor-pointer
            hover:bg-surfaceLight dark:hover:bg-surfaceDark transition"
                    >
                        {darkMode ? (
                            <BsFillSunFill
                                onClick={toggleDark}
                                className="text-xl"
                            />
                        ) : (
                            <BsFillMoonStarsFill
                                onClick={toggleDark}
                                className="text-xl"
                            />
                        )}
                    </li>
                </ul>
            </motion.nav>

            <motion.nav
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { delay: 1.2, duration: 0.8 },
                }}
                className="fixed bottom-0 left-0 w-full z-20 lg:hidden dark:bg-backgroundDark text-textLight bg-backgroundLight dark:text-textDark"
            >
                <div className="flex justify-between items-center p-5">
                    <h1 className="text-lg font-bold uppercase tracking-wide">
                        Swagat
                    </h1>

                    <div className="flex items-center gap-5">
                        {darkMode ? (
                            <BsFillSunFill
                                onClick={toggleDark}
                                className="text-xl cursor-pointer"
                            />
                        ) : (
                            <BsFillMoonStarsFill
                                onClick={toggleDark}
                                className="text-xl cursor-pointer"
                            />
                        )}

                        <button onClick={() => setMenu(true)}>
                            <AiOutlineAppstore size={28} />
                        </button>
                    </div>
                </div>

                {menu && (
                    <motion.div
                        initial={{ bottom: -200 }}
                        animate={{ bottom: 0 }}
                        transition={{ duration: 0.4 }}
                        className="fixed left-0 bottom-0 w-full h-[50vh] bg-backgroundDark dark:bg-backgroundLight text-textDark dark:text-textLight z-50 shadow-2xl border-t border-primary/20"
                    >
                        <div className="h-full flex justify-center items-center gap-12 p-6">
                            {/* Social Links */}

                            <motion.div
                                variants={parent}
                                initial="initial"
                                animate="animate"
                                className="flex flex-col gap-4 text-3xl text-gray-500"
                            >
                                <motion.a
                                    variants={children1}
                                    href="https://github.com/imswag99"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <i className="bx bxl-github"></i>
                                </motion.a>

                                <motion.a
                                    variants={children1}
                                    href="https://www.linkedin.com/in/swagattalukdar"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <i className="bx bxl-linkedin-square text-linkedin"></i>
                                </motion.a>

                                <motion.a
                                    variants={children1}
                                    href="https://www.facebook.com/swagat.talukdar.1"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <i className="bx bxl-facebook-square text-facebook"></i>
                                </motion.a>

                                <motion.a
                                    variants={children1}
                                    href="https://www.instagram.com/ig_swagattalukdar"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <i className="bx bxl-instagram"></i>
                                </motion.a>
                            </motion.div>

                            <motion.div
                                variants={parent}
                                initial="initial"
                                animate="animate"
                                className="flex flex-col gap-6 text-lg"
                            >
                                <motion.div
                                    variants={children2}
                                    onClick={() => handleRef(homeRef)}
                                    className="flex items-center gap-3 cursor-pointer"
                                >
                                    <BiHome />
                                    Home
                                </motion.div>

                                <motion.div
                                    variants={children2}
                                    onClick={() => handleRef(aboutRef)}
                                    className="flex items-center gap-3 cursor-pointer"
                                >
                                    <FaRegUser />
                                    About
                                </motion.div>

                                <motion.div
                                    variants={children2}
                                    onClick={() => handleRef(qualificationRef)}
                                    className="flex items-center gap-3 cursor-pointer"
                                >
                                    <PiGraduationCapBold />
                                    Qualifications
                                </motion.div>

                                <motion.div
                                    variants={children2}
                                    onClick={() => handleRef(skillRef)}
                                    className="flex items-center gap-3 cursor-pointer"
                                >
                                    <RiFileList3Line />
                                    Skills
                                </motion.div>

                                <motion.div
                                    variants={children2}
                                    onClick={() => handleRef(projectRef)}
                                    className="flex items-center gap-3 cursor-pointer"
                                >
                                    <FaRegImage />
                                    Projects
                                </motion.div>
                            </motion.div>

                            <button
                                onClick={() => setMenu(false)}
                                className="absolute bottom-4 right-6 text-4xl"
                            >
                                ×
                            </button>
                        </div>
                    </motion.div>
                )}
            </motion.nav>
        </>
    );
};

export default Navbar;
