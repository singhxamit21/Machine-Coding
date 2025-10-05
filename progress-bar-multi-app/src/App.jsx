import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [progressBars, setProgressBars] = useState([]);
  const [queue, setQueue] = useState([]);
  const maxConcurrent = 3;

  const addProgressBar = () => {
    const id = Date.now();
    if (progressBars.length < maxConcurrent) {
      setProgressBars((prev) => [...prev, { id, progress: 0 }]);
    } else {
      setQueue((prev) => [...prev, id]);
    }
  };

  // Progress update
  useEffect(() => {
    const interval = setInterval(() => {
      setProgressBars((bars) =>
        bars.map((bar) => ({
          ...bar,
          progress: Math.min(bar.progress + 5, 100),
        }))
      );
    }, 100); // ~2 seconds total

    return () => clearInterval(interval);
  }, []);

  // When a bar finishes, start next in queue
  useEffect(() => {
    const completed = progressBars.filter((b) => b.progress >= 100);
    if (completed.length > 0) {
      setProgressBars((bars) => bars.filter((b) => b.progress < 100));

      if (queue.length > 0) {
        const [next, ...rest] = queue;
        setQueue(rest);
        setProgressBars((bars) => [...bars, { id: next, progress: 0 }]);
      }
    }
  }, [progressBars, queue]);

  return (
    <div className="container">
      <button onClick={addProgressBar} className="btn">
        Add Progress Bar
      </button>

      <div className="bars">
        {progressBars.map((bar) => (
          <div className="bar" key={bar.id}>
            <div
              className="fill"
              style={{ width: `${bar.progress}%` }}
            ></div>
          </div>
        ))}
      </div>

      {queue.length > 0 && <p className="queue">Queued: {queue.length}</p>}
    </div>
  )
}

export default App
