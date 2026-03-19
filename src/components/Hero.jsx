import React, { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const Hero = () => {
    const { homeRef, projectRef } = useContext(DarkModeContext);

    const scrollToProjects = () => {
        projectRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <div ref={homeRef}></div>

            <section className="relative rounded-3xl w-full min-h-[90vh] flex items-center px-6 lg:px-16 overflow-hidden">

                <div className="absolute top-[-80px] left-[-80px] w-96 h-96 bg-primary/10 blur-3xl"></div>

                <div className="w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col gap-6"
                    >

                        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                            I build{" "}
                            <span className="text-primary">
                                full-stack web applications
                            </span>{" "}
                            designed for performance and scalability.
                        </h1>

                        <p className="text-mutedLight dark:text-mutedDark max-w-lg">
                            Hi, I'm Swagat — a full-stack developer.
                        </p>

                        <div className="flex gap-4">
                            <button
                                onClick={scrollToProjects}
                                className="bg-primary text-white px-6 py-3 rounded-xl shadow-glow transition transform hover:scale-105 active:scale-95"
                            >
                                View Projects
                            </button>

                            <a
                                href="mailto:swagattalukdar007@gmail.com"
                                className="border border-primary text-primary px-6 py-3 rounded-xl transition hover:bg-primary hover:text-white"
                            >
                                Contact
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="relative flex justify-center"
                    >

                        <div className="absolute w-80 h-80 bg-primary/10 blur-3xl"></div>

                        <Tilt
                            tiltMaxAngleX={6}
                            tiltMaxAngleY={6}
                            glareEnable={true}
                            glareMaxOpacity={0.08}
                            scale={1.02}
                        >

                            <div className="absolute inset-0 translate-x-4 translate-y-4 bg-primary/10 rounded-xl blur-xl"></div>

                            <div className="relative bg-surfaceDark rounded-xl shadow-card overflow-hidden font-mono text-sm">

                                <div className="flex items-center justify-between px-4 py-2 bg-[#1e1e1e] text-gray-300 text-xs">
                                    <span>system.js</span>
                                    <div className="flex gap-4 text-sm">
                                        <span>—</span>
                                        <span>□</span>
                                        <span>✕</span>
                                    </div>
                                </div>

                                <div className="p-5 text-mutedDark leading-7">
                                    <p>
                                        <span className="text-purple-400">
                                            async function
                                        </span>{" "}
                                        <span className="text-blue-400">
                                            buildApplication
                                        </span>
                                        () {"{"}
                                    </p>
                                    <p className="pl-5">
                                        const auth = await handleAuth();
                                    </p>
                                    <p className="pl-5">
                                        const data = await manageDatabase();
                                    </p>
                                    <p className="pl-5">
                                        const realtime = enableLiveUpdates();
                                    </p>
                                    <p className="pl-5">
                                        return {"{ auth, data, realtime }"};
                                    </p>
                                    <p>{"}"}</p>
                                </div>

                                <div className="bg-black/40 p-4 text-green-400">
                                    <p>&gt; npm run build</p>
                                    <p>✔ Compiled successfully</p>
                                    <p>✔ API connected</p>
                                    <p>✔ Ready for production</p>
                                </div>
                            </div>
                        </Tilt>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default Hero;
