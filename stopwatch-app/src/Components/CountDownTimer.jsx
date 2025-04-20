import { useEffect, useRef, useState } from "react";

const CountDownTimer = () => {
  const [time, setTime] = useState({ hour: "", minute: "", second: "" });
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prev) => {
          let hour = +prev.hour || 0;
          let minute = +prev.minute || 0;
          let second = +prev.second || 0;

          if (hour === 0 && minute === 0 && second === 0) {
            clearInterval(intervalRef.current);
            setIsRunning(false);
            return { hour: "", minute: "", second: "" };
          }

          if (second === 0) {
            if (minute === 0) {
              if (hour > 0) {
                hour--;
              } else {
                hour = 0;
              }
              minute = 59;
            } else {
              minute--;
            }
            second = 59;
          } else {
            second--;
          }

          return { hour, minute, second };
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const handleChange = (ev, field) => {
    const { value } = ev.target;
    if (value === "" || /^\d+$/.test(value)) {
      setTime((prev) => ({ ...prev, [field]: value }));
    }
  };

  const handleStart = () => {
    const total = +time.hour + +time.minute + +time.second;
    if (total === 0) return;

    setTime(normalizeTime());
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime({ hour: "", minute: "", second: "" });
  };

  const normalizeTime = () => {
    let hour = +time.hour || 0;
    let minute = +time.minute || 0;
    let second = +time.second || 0;

    minute += Math.floor(second / 60);
    second %= 60;

    hour += Math.floor(minute / 60);
    minute %= 60;

    return { hour, minute, second };
  };

  const pad = (val) => String(val).padStart(2, "0");

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        textAlign: "center",
        fontFamily: "sans-serif",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h1 style={{ marginBottom: "20px" }}>Count Down Timer</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <input
          type="text"
          placeholder="HH"
          value={time.hour}
          onChange={(ev) => handleChange(ev, "hour")}
          style={{
            width: "60px",
            height: "40px",
            textAlign: "center",
            fontSize: "18px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <input
          type="text"
          placeholder="MM"
          value={time.minute}
          onChange={(ev) => handleChange(ev, "minute")}
          style={{
            width: "60px",
            height: "40px",
            textAlign: "center",
            fontSize: "18px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <input
          type="text"
          placeholder="SS"
          value={time.second}
          onChange={(ev) => handleChange(ev, "second")}
          style={{
            width: "60px",
            height: "40px",
            textAlign: "center",
            fontSize: "18px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <button
          onClick={handleStart}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#4CAF50",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Start
        </button>
        <button
          onClick={handleStop}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#f0ad4e",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Stop
        </button>
        <button
          onClick={handleReset}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#d9534f",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Reset
        </button>
      </div>

      {isRunning && (
        <h2 style={{ marginTop: "30px", fontSize: "24px", color: "#333" }}>
          CountDown: {pad(time.hour || 0)}:{pad(time.minute || 0)}:
          {pad(time.second || 0)}
        </h2>
      )}
    </div>
  );
};

export default CountDownTimer;
