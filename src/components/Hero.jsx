import React, { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";
import { delay, motion } from "framer-motion";

const parent = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 1.5,
      staggerChildren: 0.5,
    },
  },
};

const children = {
  initial: {
    opacity: 1,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const Hero = () => {
  const { homeRef } = useContext(DarkModeContext);

  return (
    <>
      <div ref={homeRef}></div>
      <div className="w-full flex flex-col justify-center items-center gap-10 lg:flex-row lg:gap-20">
        <div className="flex justify-center items-center lg:flex-1 lg:justify-end">
          <motion.div
            initial={{ x: 500 }}
            animate={{ x: 0, transition: { delay: 0.5, duration: 0.8 } }}
            className="w-full h-full bg-orange rounded-xl flex justify-center items-center overflow-hidden lg:min-h-80"
          >
            <img
              className="w-[100%] h-[100%] object-cover"
              src="/hero.png"
              alt=""
            />
          </motion.div>
        </div>
        <motion.div
          variants={parent}
          initial="initial"
          animate="animate"
          className="flex flex-col gap-7 justify-center items-start lg:flex-1"
        >
          <motion.h1
            variants={children}
            className="uppercase text-[1.6rem] text-orange font-fullName font-bold md:text-5xl lg:text-4xl"
          >
            swagat talukdar
          </motion.h1>
          <motion.div variants={children} className="flex items-center gap-3">
            <span className="block w-10 h-[1px] bg-dark dark:bg-light md:w-20"></span>
            <h3 className="text-md font-semibold md:text-lg lg:text-md xl:text-xl">
              Developer and designer.
            </h3>
          </motion.div>
          <motion.p
            variants={children}
            className="text-gray-500 text-md leading-8"
          >
            As an aspiring full-stack developer, I am trying to turning ideas
            into innovative web applications. Explore my projects showcasing my
            effort in React.js and web development.
          </motion.p>
          <motion.div variants={children} className="flex">
            <a
              className="font-bold flex items-center gap-2 bg-dark text-light px-10 py-3 rounded-2xl dark:bg-light dark:text-dark"
              href="mailto:swagattalukdar007@gmail.com@gmail.com"
            >
              <span>Contact</span>
              <i className="bx bx-paper-plane text-xl"></i>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
