import React from "react";
import ReactDOM from "react-dom/client";
import DataProvider from "../provider/DataProvider";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <DataProvider>
         <App />
      </DataProvider>
   </React.StrictMode>
);
