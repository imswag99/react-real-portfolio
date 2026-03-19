import React from "react";
import { motion } from "framer-motion";

const Card = ({ title, skills }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
            viewport={{ once: true }}
            className="bg-surfaceLight dark:bg-surfaceDark rounded-xl p-6 shadow-sm hover:shadow-md transition hover:-translate-y-1"
        >
            <h3 className="text-lg font-semibold text-primary mb-4">{title}</h3>

            <ul className="space-y-3 text-sm text-mutedLight dark:text-mutedDark">
                {skills.map((skill, index) => (
                    <li key={index} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        {skill}
                    </li>
                ))}
            </ul>
        </motion.div>
    );
};

export default Card;
