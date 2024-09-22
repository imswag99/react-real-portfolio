import React, { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

const Footer = () => {
  const { homeRef, aboutRef, qualificationRef, skillRef, projectRef } =
    useContext(DarkModeContext);

  const handleRef = (refValue) => {
    refValue.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-[100vw] bg-light text-dark text-center flex flex-col p-10 border-t border-gray-300 dark:bg-dark dark:text-light">
      <a onClick={() => handleRef(homeRef)} className="text-orange text-3xl font-bold">SWAGAT</a>
      <div className="flex flex-col justify-center gap-5 my-5 font-semibold md:flex-row">
        <a className="cursor-pointer" onClick={() => handleRef(aboutRef)}>About</a>
        <a className="cursor-pointer" onClick={() => handleRef(qualificationRef)}>Qualifications</a>
        <a className="cursor-pointer" onClick={() => handleRef(skillRef)}>Skills</a>
        <a className="cursor-pointer" onClick={() => handleRef(projectRef)}>Projects</a>
      </div>
      <div className="text-3xl text-gray-500 flex justify-center gap-5 my-5">
        <a href="https://github.com/imswag99" target="_blank">
          <i className="bx bxl-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/swagattalukdar"
          target="_blank"
        >
          <i className="bx bxl-linkedin-square"></i>
        </a>
        <a href="https://www.facebook.com/swagat.talukdar.1" target="_blank">
          <i className="bx bxl-facebook-square"></i>
        </a>
        <a href="https://www.instagram.com/ig_swagattalukdar" target="_blank">
          <i className="bx bxl-instagram-alt"></i>
        </a>
      </div>
      <p className="text-gray-500 text-sm my-20 lg:my-10">
        &copy; SwagatTalukdar. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
