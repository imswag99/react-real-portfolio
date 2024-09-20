import React, { useContext } from "react";
import { hardSkills, softSkills } from "../assets/data";
import Card from "./Card";
import { DarkModeContext } from "../context/DarkModeContext";

const Skill = () => {
  const { skillRef } = useContext(DarkModeContext);

  return (
    <>
      <div ref={skillRef}></div>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="text-center">
          <h1 className="text-orange text-3xl font-bold">SKILLS</h1>
          <h3 className="text-gray-500">My hard and soft skills</h3>
        </div>
        <div className="text-4xl flex justify-center gap-4 mt-10">
          <i className="bx bxl-html5 text-html transition-all duration-300 hover:-translate-y-1.5 cursor-pointer"></i>
          <i className="bx bxl-css3 text-css transition-all duration-300 hover:-translate-y-1.5 cursor-pointer"></i>
          <i className="bx bxl-javascript text-javascript transition-all duration-300 hover:-translate-y-1.5 cursor-pointer"></i>
          <i className="bx bxl-react text-react transition-all duration-300 hover:-translate-y-1.5 cursor-pointer"></i>
          <i className="bx bxl-nodejs text-node transition-all duration-300 hover:-translate-y-1.5 cursor-pointer"></i>
          <i className="bx bxl-mongodb text-mongo transition-all duration-300 hover:-translate-y-1.5 cursor-pointer"></i>
          <i className="bx bxl-tailwind-css text-tailwind transition-all duration-300 hover:-translate-y-1.5 cursor-pointer"></i>
        </div>
        <div className="flex flex-col lg:flex-row lg:gap-x-20">
          <Card data={hardSkills} name="Hard skills" />
          <Card data={softSkills} name="Soft skills" />
        </div>
      </div>
    </>
  );
};

export default Skill;
