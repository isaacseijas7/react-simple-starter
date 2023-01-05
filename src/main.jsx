import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import "./app/assets/scss/main.scss";
import { BrowserRouter } from "react-router-dom";
import { TodoContextProvider } from "./app/context/TodoContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <TodoContextProvider>
        <App />
      </TodoContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
