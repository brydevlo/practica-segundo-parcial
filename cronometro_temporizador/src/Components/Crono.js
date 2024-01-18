import React, { useState, useEffect } from "react";
import Botones from "./Boton";
import "../Style/Crono.css";

const Crono = () => {
  const [estaCorriendo, setEstaCorriendo] = useState(false);
  const [tiempoTranscurrido, setTiempoTranscurrido] = useState(0);

  useEffect(() => {
    let intervaloId;

    if (estaCorriendo) {
      intervaloId = setInterval(() => {
        setTiempoTranscurrido((tiempoPrevio) => tiempoPrevio + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervaloId);
    };
  }, [estaCorriendo]);

  const iniciar = () => {
    setEstaCorriendo(true);
  };

  const detener = () => {
    setEstaCorriendo(false);
  };

  const reiniciar = () => {
    setEstaCorriendo(false);
    setTiempoTranscurrido(0);
  };

  const formatearTiempo = (tiempoEnSegundos) => {
    const minutos = Math.floor(tiempoEnSegundos / 60);
    const segundos = tiempoEnSegundos % 60;
    return `${minutos} min ${segundos} seg`;
  };

  return (
    <div className="contenedor-cronometro">
      <h2>{formatearTiempo(tiempoTranscurrido)}</h2>
      <Botones onIniciar={iniciar} onDetener={detener} onReiniciar={reiniciar} estaCorriendo={estaCorriendo} />
    </div>
  );
};

export default Crono;