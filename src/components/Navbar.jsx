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
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.2,
      staggerChildren: 0.08,
    },
  },
};

const children1 = {
  initial: {
    opacity: 1,
    x: -50,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const children2 = {
  initial: {
    opacity: 1,
    x: 50,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
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

  const dark = () => {
    localStorage.removeItem("dark");
    setDarkMode(!darkMode);
    localStorage.setItem("dark", JSON.stringify(!darkMode));
  };

  const handleRef = (refValue) => {
    refValue.current?.scrollIntoView({ behavior: "smooth" });
    setMenu(false);
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1.5, duration: 1 } }}
        className="w-full justify-between py-10 hidden md:hidden lg:flex gap-10"
      >
        <h1 className="text-xl font-bold uppercase">swagat</h1>
        <ul className="flex items-center gap-8">
          <li className="flex items-center gap-1 cursor-pointer">
            <BiHome />
            <a onClick={() => handleRef(homeRef)}>Home</a>
          </li>
          <li className="flex items-center gap-1 cursor-pointer">
            <FaRegUser />
            <a onClick={() => handleRef(aboutRef)}>About</a>
          </li>
          <li className="flex items-center gap-1 cursor-pointer">
            <PiGraduationCapBold />
            <a onClick={() => handleRef(qualificationRef)}>Qualifications</a>
          </li>
          <li className="flex items-center gap-1 cursor-pointer">
            <RiFileList3Line />
            <a onClick={() => handleRef(skillRef)}>Skills</a>
          </li>
          <li className="flex items-center gap-1 cursor-pointer mr-5">
            <FaRegImage />
            <a onClick={() => handleRef(projectRef)}>Projects</a>
          </li>
          <li>
            {darkMode ? (
              <BsFillSunFill
                onClick={dark}
                className="bx bxs-moon text-2xl cursor-pointer"
              />
            ) : (
              <BsFillMoonStarsFill
                onClick={dark}
                className="bx bxs-moon text-2xl cursor-pointer"
              />
            )}
          </li>
        </ul>
      </motion.nav>

      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1.5, duration: 1 } }}
        className="fixed left-0 bottom-0 z-10 w-full bg-dark text-light dark:bg-light dark:text-dark lg:hidden"
      >
        <div className="w-full flex justify-between items-center p-5">
          <h1 className="text-xl font-bold uppercase">swagat</h1>
          <div className="flex items-center gap-5">
            <ul className="flex items-center">
              <li>
                {darkMode ? (
                  <BsFillSunFill
                    onClick={dark}
                    className="bx bxs-moon text-2xl cursor-pointer"
                  />
                ) : (
                  <BsFillMoonStarsFill
                    onClick={dark}
                    className="bx bxs-moon text-2xl cursor-pointer"
                  />
                )}
              </li>
            </ul>
            <button onClick={() => setMenu(true)}>
              <AiOutlineAppstore size={30} />
            </button>
          </div>
        </div>
        {menu && (
          <motion.div
            initial={{ opacity: 0, bottom: -100 }}
            animate={{ opacity: 1, bottom: 0, transition: { duration: 0.5 } }}
            viewport={{ once: true }}
            className="fixed left-0 bottom-0 z-99 w-full h-[50vh] bg-dark dark:bg-light dark:text-dark"
          >
            <div className="h-full p-5 flex justify-center items-center gap-10">
              <motion.div
                variants={parent}
                initial="initial"
                animate="animate"
                viewport={{ once: true }}
                className="text-4xl text-gray-500 flex flex-col justify-center gap-4 mt-5"
              >
                <motion.a
                  variants={children1}
                  onClick={() => setMenu(false)}
                  href="https://github.com/imswag99"
                  target="_blank"
                >
                  <i className="bx bxl-github text-black"></i>
                </motion.a>
                <motion.a
                  variants={children1}
                  onClick={() => setMenu(false)}
                  href="https://www.linkedin.com/in/swagattalukdar"
                  target="_blank"
                >
                  <i className="bx bxl-linkedin-square text-linkedin"></i>
                </motion.a>
                <motion.a
                  variants={children1}
                  onClick={() => setMenu(false)}
                  href="https://www.facebook.com/swagat.talukdar.1"
                  target="_blank"
                >
                  <i className="bx bxl-facebook-square text-facebook"></i>
                </motion.a>
                <motion.a
                  variants={children1}
                  onClick={() => setMenu(false)}
                  href="https://www.instagram.com/ig_swagattalukdar"
                  target="_blank"
                >
                  <i className="bx bxl-instagram-alt bg-gradient-to-br from-instagram to-red-500 bg-clip-text text-transparent"></i>
                </motion.a>
              </motion.div>
              <motion.div
                variants={parent}
                initial="initial"
                animate="animate"
                viewport={{ once: true }}
                className="flex flex-col gap-5 text-lg"
              >
                <motion.div
                  variants={children2}
                  className="flex items-center gap-2"
                >
                  <BiHome />
                  <a onClick={() => handleRef(homeRef)}>Home</a>
                </motion.div>
                <motion.div
                  variants={children2}
                  className="flex items-center gap-2"
                >
                  <FaRegUser />
                  <a onClick={() => handleRef(aboutRef)}>About</a>
                </motion.div>
                <motion.div
                  variants={children2}
                  className="flex items-center gap-2"
                >
                  <PiGraduationCapBold />
                  <a onClick={() => handleRef(qualificationRef)}>
                    Qualifications
                  </a>
                </motion.div>
                <motion.div
                  variants={children2}
                  className="flex items-center gap-2"
                >
                  <RiFileList3Line />
                  <a onClick={() => handleRef(skillRef)}>Skills</a>
                </motion.div>
                <motion.div
                  variants={children2}
                  className="flex items-center gap-2"
                >
                  <FaRegImage />
                  <a onClick={() => handleRef(projectRef)}>Projects</a>
                </motion.div>
              </motion.div>
              <div className="w-full text-right absolute bottom-3 right-4">
                <i
                  className="bx bx-x text-4xl"
                  onClick={() => setMenu(false)}
                ></i>
              </div>
            </div>
          </motion.div>
        )}
      </motion.nav>
    </>
  );
};

export default Navbar;
