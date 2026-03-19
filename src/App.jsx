import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Qualification from "./components/Qualification";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Footer from "./components/Footer";
import { DarkModeContext } from "./context/DarkModeContext";

const App = () => {
    const { darkMode } = useContext(DarkModeContext);

    return (
        <div className={`${darkMode ? "dark" : ""} overflow-hidden`}>
            <div className="w-full min-h-screen flex flex-col gap-10 px-3 md:px-20 lg:px-40 bg-backgroundLight text-textLight dark:bg-backgroundDark dark:text-textDark">
                <Navbar />
                <Hero />
                <About />
                <Qualification />
                <Skill />
                <Project />
            </div>

            <Footer />
        </div>
    );
};

export default App;
