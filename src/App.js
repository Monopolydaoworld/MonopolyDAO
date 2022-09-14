import React from "react";
import UseRedirectToHttps from "./hook/useRedirectToHttps";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar.component";
export default function App() {
  UseRedirectToHttps();
  return (
    <Routes>
      <Route path="/" element={<Navbar />} />
    </Routes>
  );
}
