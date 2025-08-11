import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import UserContext from "./contexts/UserContext";
import CaptainContext from "./contexts/CaptainContext";

createRoot(document.getElementById("root")).render(
    <CaptainContext>
        <UserContext>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </UserContext>
    </CaptainContext>
);
