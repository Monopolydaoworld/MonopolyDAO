import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./components/navbar/navbar.component";
export default function App () {
  return(
    <Routes>
      <Route path="/" element={<Navbar />}/>
    </Routes>
  )
}