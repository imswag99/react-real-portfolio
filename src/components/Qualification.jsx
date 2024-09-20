import React, { useContext, useState } from "react";
import Education from "./Education";
import Experience from "./Experience";
import { DarkModeContext } from "../context/DarkModeContext";

const Qualification = () => {
  const [isActive, setIsActive] = useState("education");
  const { qualificationRef } = useContext(DarkModeContext);

  return (
    <>
      <div ref={qualificationRef}></div>
      <div className="w-full" id="qualification">
        <div className="text-center">
          <h1 className="text-orange text-3xl font-bold">QUALIFICATIONS</h1>
          <h3 className="text-gray-500">My personal journey</h3>
        </div>
        <div className="mt-10 flex justify-center gap-5">
          <div
            onClick={() => setIsActive("education")}
            className={
              isActive === "education"
                ? "text-orange flex items-center gap-2 text-xl cursor-pointer"
                : "flex items-center gap-2 text-xl cursor-pointer"
            }
          >
            <i className="bx bxs-graduation"></i>
            <h1 className="font-bold">Education</h1>
          </div>
          <div
            onClick={() => setIsActive("experience")}
            className={
              isActive === "experience"
                ? "text-orange flex items-center gap-2 text-xl cursor-pointer"
                : "flex items-center gap-2 text-xl cursor-pointer"
            }
          >
            <i className="bx bxs-briefcase"></i>
            <h1 className="font-bold">Experience</h1>
          </div>
        </div>
        {isActive === "education" && <Education />}

        {isActive === "experience" && <Experience />}
      </div>
    </>
  );
};

export default Qualification;
