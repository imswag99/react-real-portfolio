import React, { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

const About = () => {
  const { aboutRef } = useContext(DarkModeContext);

  return (
    <>
      <div ref={aboutRef}></div>
      <div className="w-full">
        <div className="text-center">
          <h1 className="text-orange text-3xl font-bold">ABOUT ME</h1>
          <h3 className="text-gray-500">My introduction</h3>
          <div className="flex flex-col justify-center items-center md:flex-row md:gap-20">
            <div className="w-full flex justify-center items-center md:justify-end">
              <div className="bg-orange rounded-md w-60 h-60 flex justify-center items-center mt-10 overflow-hidden">
                <img
                  className="w-[100%] h-[100%] object-cover"
                  src="/avatar.png"
                  alt=""
                />
              </div>
            </div>
            <div className="flex flex-col justify-between md:items-start">
              <p className="text-justify mt-10">
                Hi, I'm Swagat Talukdar, an aspiring web developer with a
                passion for creating beautiful, functional, and user-centered
                digital experiences. I look forward to the opportunity to make
                my skills useful for your project.
              </p>
              <div className="flex justify-center items-center mt-10">
                <a
                  className="font-bold flex items-center gap-2 bg-dark text-light px-10 py-3 rounded-2xl dark:bg-light dark:text-dark"
                  href="/Resume.pdf"
                  download={true}
                >
                  <span>Resume</span>
                  <i className="bx bx-download text-xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
