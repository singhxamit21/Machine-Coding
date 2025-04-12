import React, { useState, useEffect, useRef } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0); // Time in milliseconds
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev + 10); // Update every 10ms
      }, 10);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const formatTime = (ms) => {
    const minutes = String(Math.floor(ms / 60000)).padStart(2, "0");
    const seconds = String(Math.floor((ms % 60000) / 1000)).padStart(2, "0");
    const milliseconds = String(Math.floor((ms % 1000) / 10)).padStart(2, "0");
    return `${minutes}:${seconds}:${milliseconds}`;
  };

  return (
    <div style={{ fontFamily: "monospace", textAlign: "center" }}>
      <h2>⏱ Stopwatch</h2>
      <h1>{formatTime(time)}</h1>
      <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        {!isRunning ? (
          <button onClick={() => setIsRunning(true)}>Start</button>
        ) : (
          <button onClick={() => setIsRunning(false)}>Stop</button>
        )}
        <button onClick={() => setTime(0)} disabled={isRunning}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
