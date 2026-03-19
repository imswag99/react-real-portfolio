import React, { useContext } from "react";
import Education from "./Education";
import { DarkModeContext } from "../context/DarkModeContext";

const Qualification = () => {
    const { qualificationRef } = useContext(DarkModeContext);

    return (
        <>
            <div ref={qualificationRef}></div>

            <section className="w-full py-20" id="qualification">
                <div className="max-w-4xl mx-auto px-6">

                    <div className="text-center">
                        <h1 className="text-3xl text-primary md:text-4xl font-bold">
                            Qualification
                        </h1>
                        <p className="text-mutedLight dark:text-mutedDark mt-2">
                            My academic background
                        </p>
                    </div>

                    <div className="mt-12">
                        <Education />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Qualification;
