import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="flex flex-col items-center mt-10 ">
      <div className="w-full flex justify-center gap-10">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          viewport={{ once: true }}
          className="flex-1 flex flex-col gap-1 text-xs text-right items-end"
        >
          <h1 className="font-bold text-orange">Fresher</h1>
          <p>Looking for opportinities</p>
        </motion.div>
        <div className="flex flex-col items-center">
          <span className="inline-block w-4 h-4 rounded-full bg-orange"></span>
          <span className="inline-block w-0.5 h-20 bg-orange"></span>
        </div>
        <div className="inline-block flex-1"></div>
      </div>

      <div className="w-full flex justify-center gap-10">
        <div className="inline-block flex-1"></div>
        <div className="flex flex-col items-center">
          <span className="inline-block w-4 h-4 rounded-full bg-orange"></span>
          <span className="inline-block w-0.5 h-20 bg-orange"></span>
        </div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 1, delay: 0.5 },
          }}
          viewport={{ once: true }}
          className="flex-1 flex flex-col gap-1 text-xs"
        >
          <h1 className="font-bold text-orange">Gaining Skills</h1>
          <p>Self learned</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
