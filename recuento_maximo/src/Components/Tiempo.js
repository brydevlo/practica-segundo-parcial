import React from 'react';

function Tiempo({ timeLeft }) {
  return <div>{timeLeft === 0 ? null : <p></p>}</div>;
}

export default Tiempo;