import React from "react";

const Text = ({ isVisible }) => {
  return (
    <div style={{ display: isVisible ? "block" : "none" }}>
      <h1>Bienvenido a React Desafios</h1>
    </div>
  );
};

export default Text;