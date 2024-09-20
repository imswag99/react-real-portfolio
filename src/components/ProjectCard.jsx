import React, { useState } from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ data }) => {
  const [show, setShow] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      viewport={{ once: true }}
      className="w-full rounded-md p-5 mt-10 shadow-md flex flex-col overflow-hidden"
    >
      <div className="mb-5">
        <img
          onClick={() => setShow(true)}
          className="shadow-sm rounded-sm transition-all hover:scale-105"
          src={`/${data.image}.png`}
          alt=""
        />
      </div>
      <div>
        <h1 className="font-bold truncate mb-3">{data.title}</h1>
        <div className="flex justify-between items-center">
          <button
            className="cursor-pointer bg-transparent"
            onClick={() => setShow(true)}
          >
            Learn more ⟶
          </button>
          <a href={data.github} target="_blank">
            <i className="bx bxl-github text-2xl"></i>
          </a>
          {show && (
            <div className="w-[100vw] h-[100vh] bg-transparent backdrop-blur-md fixed inset-0 flex justify-center items-center">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
                viewport={{ once: true }}
                className="w-[80%] h-[60%] bg-dark rounded-md text-light p-5 flex flex-col gap-10 overflow-auto dark:bg-light dark:text-dark md:p-10 lg:w-[40%] lg:h-[80%]"
              >
                <div className="w-full text-right">
                  <i
                    className="bx bx-x text-4xl text-orange cursor-pointer"
                    onClick={() => setShow(false)}
                  ></i>
                </div>
                <div>
                  <img
                    className="rounded-sm shadow-sm"
                    src={`/${data.image}.png`}
                    alt=""
                  />
                </div>
                <div>
                  <h1 className="text-xl mb-2 text-orange tracking-wide ">
                    TITLE
                  </h1>
                  <h3>{data.title}</h3>
                </div>
                <div>
                  <h1 className="text-xl mb-2 text-orange tracking-wide">
                    DESCRIPTION
                  </h1>
                  <p className="text-justify">{data.description}</p>
                </div>
                <a href={data.github} target="_blank">
                  <i className="bx bxl-github text-3xl text-orange"></i>
                </a>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
