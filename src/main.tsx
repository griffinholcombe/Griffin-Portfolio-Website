import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <main style={{ paddingTop: "80px" }}>
    <StrictMode>
      <App />
    </StrictMode>
  </main>
);
