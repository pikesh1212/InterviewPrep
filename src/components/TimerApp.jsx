import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setSeconds((prev) => {
          if (prev > 0) return prev - 1;
          if (minutes > 0) {
            setMinutes((m) => m - 1);
            return 59;
          }
          if (hours > 0) {
            setHours((h) => h - 1);
            setMinutes(59);
            return 59;
          }
          return 0;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, hours, minutes]);

  const handleReset = () => {
    setIsRunning(false);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

  const handleInputChange = (setter) => (e) => {
    const value = Math.max(0, parseInt(e.target.value) || 0);
    setter(value);
  };

  return (
    <div className="p-4 text-center">
      <div className="mb-4">
        <input
          type="number"
          value={hours}
          onChange={handleInputChange(setHours)}
          disabled={isRunning}
          className="w-12 p-2 text-center border rounded"
          placeholder="HH"
        />
        :
        <input
          type="number"
          value={minutes}
          onChange={handleInputChange(setMinutes)}
          disabled={isRunning}
          className="w-12 p-2 text-center border rounded"
          placeholder="MM"
          max={59}
        />
        :
        <input
          type="number"
          value={seconds}
          onChange={handleInputChange(setSeconds)}
          disabled={isRunning}
          className="w-12 p-2 text-center border rounded"
          placeholder="SS"
          max={59}
        />
      </div>
      <div className="text-2xl mb-4">
        {String(hours).padStart(2, '0')}:{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </div>
      <div className="space-x-4">
        <button
          onClick={handleReset}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Reset
        </button>
        <button
          onClick={() => setIsRunning(!isRunning)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          {isRunning ? 'Pause' : 'Start'}
        </button>
      </div>
    </div>
  );
};

export default Timer;
