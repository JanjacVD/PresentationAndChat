import React from "react";
import { createRoot } from "react-dom/client";
import AppRouter from "./AppRouter.jsx";
import { BrowserRouter } from "react-router-dom";
import UserContextProvider from "./src/features/chat/UserContext.jsx";
function App() {
    return (
        <UserContextProvider>
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        </UserContextProvider>
    );
}
const domNode = document.getElementById("root") as HTMLElement;
const root = createRoot(domNode);
root.render(<App />);
