import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Search temp={0}  />
    </div>
  );
}

export default App;
