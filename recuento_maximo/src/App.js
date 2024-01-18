import React, { useState, useEffect, useRef } from 'react';
import Timer from './Components/Tiempo';
import Counter from './Components/Contador';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const id = useRef(null);

  const clear = () => window.clearInterval(id.current);

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimeLeft((time) => time - 1);
    }, 1000);

    return clear;
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      clear();
    }
  }, [timeLeft]);

  return (
    <div className="App">
      <Counter count={count} setCount={setCount} timeLeft={timeLeft} />
      <Timer timeLeft={timeLeft} />
    </div>
  );
}

export default App;