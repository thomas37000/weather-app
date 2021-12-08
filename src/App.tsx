import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Search from "./components/Search";

function App(): React.ReactNode {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Search id={0} name={null} temp={null} />
    </div>
  );
}

export default App;
