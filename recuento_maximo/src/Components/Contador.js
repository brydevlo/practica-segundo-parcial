import React from 'react';

function Contador({ count, setCount, timeLeft }) {
  return (
    <div>
      <h1>{count}</h1>
      <h3>Tiempo restante: {timeLeft} segundos</h3>
      {timeLeft === 0 ? null : (
        <button onClick={() => setCount((c) => c + 1)}>+</button>
      )}
    </div>
  );
}

export default Contador;