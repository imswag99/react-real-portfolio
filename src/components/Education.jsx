import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <div className="flex flex-col items-center mt-10">
      <div className="w-full flex justify-center gap-10">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          viewport={{ once: true }}
          className="flex-1 flex flex-col gap-1 text-xs text-right items-end"
        >
          <h1 className="font-bold text-orange">BCA</h1>
          <p>Lalit Chandra Bharali College</p>
          <div className="flex items-center gap-2 text-gray-500">
            <i className="bx bxs-calendar"></i>
            <h3>2019 - 2022</h3>
          </div>
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
          <h1 className="font-bold text-orange">XII</h1>
          <p>Cotton University</p>
          <div className="flex items-center gap-2 text-gray-500">
            <i className="bx bxs-calendar"></i>
            <h3>2016 - 2019</h3>
          </div>
        </motion.div>
      </div>

      <div className="w-full flex justify-center gap-10">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 1, delay: 1 },
          }}
          viewport={{ once: true }}
          className="flex-1 flex flex-col gap-1 text-xs text-right items-end"
        >
          <h1 className="font-bold text-orange">X</h1>
          <p>Angels' English High School</p>
          <div className="flex items-center gap-2 text-gray-500">
            <i className="bx bxs-calendar"></i>
            <h3>2015 - 2016</h3>
          </div>
        </motion.div>
        <div className="flex flex-col items-center">
          <span className="inline-block w-4 h-4 rounded-full bg-orange"></span>
          <span className="inline-block w-0.5 h-20 bg-orange"></span>
        </div>
        <div className="inline-block flex-1"></div>
      </div>
    </div>
  );
};

export default Education;
