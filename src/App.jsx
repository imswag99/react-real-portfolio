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
    <div className={darkMode ? "dark overflow-hidden" : "" + "overflow-hidden"}>
      <div className="w-[100vw] min-h-[100vh] bg-light text-dark flex flex-col px-10 gap-10 dark:bg-dark dark:text-light md:px-20 lg:px-40">
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
