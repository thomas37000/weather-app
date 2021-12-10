import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Nav from "../components/Nav/Nav";
import Search from "../components/Search";

const Routter = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home main={undefined!} weather={undefined!} id={0} name={""}  />} />
        <Route
          path="/temps"
          element={<Search main={undefined!} weather={undefined!} id={0} name={""}  />}
        />
      </Routes>
    </Router>
  );
};

export default Routter;
