import React from "react";
import { motion } from "framer-motion";

const Card = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      viewport={{ once: true }}
      className="rounded-md p-5 mt-10 shadow-md"
    >
      <div className="grid grid-cols-2 grid-rows-4 gap-x-10 gap-y-10 pr-5">
        {data.map((item, index) => (
          <div key={index} className="flex gap-2">
            <i className="bx bxs-badge-check"></i>
            <div>
              <h2 className="font-bold text-sm">{item.skill}</h2>
              {item.level ? (
                <h3 className="text-sm text-gray-500">{item.level}</h3>
              ) : (
                <></>
              )}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Card;
