import React from "react";
import { motion } from "framer-motion";

const Education = () => {
    return (
        <div className="flex flex-col items-center gap-12">
            <div className="w-full flex justify-center gap-10">
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.5 },
                    }}
                    viewport={{ once: true }}
                    className="flex-1 flex flex-col gap-2 text-sm md:text-base text-right items-end transition hover:-translate-y-1"
                >
                    <h3 className="font-semibold text-lg text-primary">BCA</h3>

                    <p className="text-mutedLight dark:text-mutedDark">
                        Lalit Chandra Bharali College
                    </p>

                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <i className="bx bxs-calendar"></i>
                        <span>2019 – 2022</span>
                    </div>
                </motion.div>

                <div className="flex flex-col items-center">
                    <span className="w-4 h-4 rounded-full bg-primary"></span>
                    <span className="w-[2px] h-24 bg-primary/30"></span>
                </div>

                <div className="flex-1"></div>
            </div>

            <div className="w-full flex justify-center gap-10">
                <div className="flex-1"></div>

                <div className="flex flex-col items-center">
                    <span className="w-4 h-4 rounded-full bg-primary"></span>
                    <span className="w-[2px] h-24 bg-primary/30"></span>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.5, delay: 0.2 },
                    }}
                    viewport={{ once: true }}
                    className="flex-1 flex flex-col gap-2 text-sm md:text-base transition hover:-translate-y-1"
                >
                    <h3 className="font-semibold text-lg text-primary">
                        Higher Secondary (XII)
                    </h3>

                    <p className="text-mutedLight dark:text-mutedDark">
                        Cotton University
                    </p>

                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <i className="bx bxs-calendar"></i>
                        <span>2016 – 2019</span>
                    </div>
                </motion.div>
            </div>

            <div className="w-full flex justify-center gap-10">
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.5, delay: 0.3 },
                    }}
                    viewport={{ once: true }}
                    className="flex-1 flex flex-col gap-2 text-sm md:text-base text-right items-end transition hover:-translate-y-1"
                >
                    <h3 className="font-semibold text-lg text-primary">
                        Secondary (X)
                    </h3>

                    <p className="text-mutedLight dark:text-mutedDark">
                        Angels' English High School
                    </p>

                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <i className="bx bxs-calendar"></i>
                        <span>2015 – 2016</span>
                    </div>
                </motion.div>

                <div className="flex flex-col items-center">
                    <span className="w-4 h-4 rounded-full bg-primary"></span>
                    <span className="w-[2px] h-24 bg-primary/30"></span>
                </div>

                <div className="flex-1"></div>
            </div>
        </div>
    );
};

export default Education;
