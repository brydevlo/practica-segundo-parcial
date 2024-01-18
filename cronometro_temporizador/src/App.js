import React from "react";
import Cronometro from "./Components/Crono";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <div className="centered-content">
        <h1>React Timer</h1>
        <Cronometro />
      </div>
    </div>
  );
};

export default App;