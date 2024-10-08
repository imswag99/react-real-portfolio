import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { DarkModeContextProvider } from "./context/DarkModeContext.jsx";

createRoot(document.getElementById("root")).render(
  <DarkModeContextProvider>
    <App />
  </DarkModeContextProvider>
);
