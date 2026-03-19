import React, { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";
import Card from "./Card";

const Skill = () => {
    const { skillRef } = useContext(DarkModeContext);

    return (
        <>
            <div ref={skillRef}></div>

            <section className="w-full py-20">
                <div className="max-w-5xl mx-auto px-6">

                    <div className="text-center">
                        <h1 className="text-3xl text-primary md:text-4xl font-bold">
                            Skills & Technologies
                        </h1>
                        <p className="text-mutedLight dark:text-mutedDark mt-2">
                            Technologies I use to build full-stack applications
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mt-12">
                        <Card
                            title="Frontend"
                            skills={[
                                "React",
                                "JavaScript",
                                "Tailwind CSS",
                                "HTML",
                                "CSS",
                            ]}
                        />

                        <Card
                            title="Backend"
                            skills={[
                                "Node.js",
                                "Express.js",
                                "Django",
                                "REST APIs",
                                "JWT Authentication",
                            ]}
                        />

                        <Card
                            title="Database & Tools"
                            skills={[
                                "MongoDB",
                                "MySQL",
                                "Git",
                                "GitHub",
                                "Vercel",
                            ]}
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Skill;
