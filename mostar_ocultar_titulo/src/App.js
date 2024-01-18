import React, { useState } from "react";
import TextContent from "./Components/Texto.js";
import Button from "./Components/Button.js";
import "./App.css";
import "./Style/Button.css"

const App = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible((visibility) => !visibility);
  };

  return (
    <div className="container">
        <Button onClick={toggleVisibility} label="Ver/Ocultar" />
        <TextContent isVisible={isVisible} />
    </div>
  );
};

export default App;