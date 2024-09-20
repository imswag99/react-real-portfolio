import { createContext, useEffect, useRef, useState } from "react";

export const DarkModeContext = createContext();

export const DarkModeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);
  const homeRef = useRef();
  const aboutRef = useRef();
  const qualificationRef = useRef();
  const skillRef = useRef();
  const projectRef = useRef();

  useEffect(() => {
    setDarkMode(JSON.parse(localStorage.getItem("dark")));
  }, []);

  return (
    <DarkModeContext.Provider
      value={{
        darkMode,
        setDarkMode,
        homeRef,
        aboutRef,
        qualificationRef,
        skillRef,
        projectRef,
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};
