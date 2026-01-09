import "./styles/theme.css";
import "./styles/glitch.css";
import "./styles/fonts.css";
import "./styles/index.css";
import { createRoot } from "react-dom/client";
import React from "react";
import App from "./app/App.tsx";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
  