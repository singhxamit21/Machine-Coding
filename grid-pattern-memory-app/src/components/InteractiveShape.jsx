import React, { useEffect, useState } from 'react';

const InteractiveShape = () => {
    const [grid, setGrid] = useState(Array.from({ length: 3 }, () => Array(3).fill(false)));
    const [clickQueue, setClickQueue] = useState([]);
    const [timerIds, setTimerIds] = useState([]);

    const handleOnClick = (rowIdx, colIdx) => {
        if (timerIds.length > 0) return;
        if (grid[rowIdx][colIdx]) return;


        setClickQueue((prev) => [...prev, [rowIdx, colIdx]]);


        setGrid((prevGrid) => {
            const updated = prevGrid.map((row) => [...row]);
            updated[rowIdx][colIdx] = true;
            return updated;
        });
    };

    useEffect(() => {
        if (clickQueue.length === 9) {
            const timers = clickQueue.map(([rowIdx, colIdx], idx) => {
                return setTimeout(() => {
                    setGrid((prevGrid) => {
                        const updated = prevGrid.map((row) => [...row]);
                        updated[rowIdx][colIdx] = false;
                        return updated;
                    });

                    if (idx === clickQueue.length - 1) {
                        setTimerIds([]);
                    }
                }, 1000 * (idx + 1));
            });

            setTimerIds(timers);
            setClickQueue([]);
        }
    }, [clickQueue]);

    useEffect(() => {
        return () => {
            timerIds.forEach((id) => clearTimeout(id));
        };
    }, [timerIds]);

    return (
        <div className='container'>
            {grid.map((row, rowIdx) =>
                row.map((cell, colIdx) => (
                    <div
                        className={`cell ${cell ? 'active' : ''}`}
                        key={`${rowIdx}-${colIdx}`}
                        onClick={() => handleOnClick(rowIdx, colIdx)}
                    />
                ))
            )}
        </div>
    );
};

export default InteractiveShape;
