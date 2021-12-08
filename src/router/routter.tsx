import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Search from "../components/Search";



const Routter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home main={undefined!} id={0} name={""} />} />
        <Route path="/search" element={<Search main={undefined!} id={0} name={""} />} />
      </Routes>
    </Router>
  );
};

export default Routter;