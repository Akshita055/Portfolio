import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";


import App from "./App";
import Certificates from "./certificates";
import Projects from "./projects";
import ContactUs from "./contactus";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
