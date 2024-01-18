import React from "react";
import "../Style/Boton.css";

const Boton = ({ onIniciar, onDetener, onReiniciar, estaCorriendo }) => {
  return (
    <div className="contenedor-botones">
      <button onClick={onIniciar} className="boton-iniciar" disabled={estaCorriendo}>
        Start
      </button>
      <button onClick={onDetener} className="boton-detener" disabled={!estaCorriendo}>
        Stop
      </button>
      <button onClick={onReiniciar} className="boton-reiniciar">
        Reset
      </button>
    </div>
  );
};

export default Boton;