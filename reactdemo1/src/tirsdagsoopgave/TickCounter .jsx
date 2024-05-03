import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // Effect to handle the timer logic
  useEffect(() => {
    let intervalId;

    // Start the timer when isRunning is true
    if (isRunning) {
      intervalId = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else {
          if (minutes > 0) {
            setMinutes(minutes - 1);
            setSeconds(59);
          } else {
            clearInterval(intervalId);
            setIsRunning(false);
          }
        }
      }, 1000); // Update every second
    }

    // Clean up function to clear the interval when component unmounts or isRunning becomes false
    return () => clearInterval(intervalId);
  }, [isRunning, minutes, seconds]);

  // Function to start or stop the timer
  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  // Function to reset the timer
  const resetTimer = () => {
    clearInterval();
    setIsRunning(false);
    setMinutes(0);
    setSeconds(0);
  };

  // Helper function to format the time as MM:SS
  const formatTime = (value) => {
    return value < 10 ? `0${value}` : `${value}`;
  };

  return (
    <div style={styles.timerContainer}>
      <h2>Timer</h2>
      <div style={styles.timerInputs}>
        <input
          type="number"
          value={minutes}
          onChange={(e) => setMinutes(parseInt(e.target.value))}
          placeholder="Minutes"
          style={styles.input}
          disabled={isRunning}
        />
        <span>:</span>
        <input
          type="number"
          value={seconds}
          onChange={(e) => setSeconds(parseInt(e.target.value))}
          placeholder="Seconds"
          style={styles.input}
          disabled={isRunning}
        />
      </div>
      <div>
        <button style={styles.button} onClick={toggleTimer}>
          {isRunning ? 'Pause' : 'Start'}
        </button>
        <button style={styles.button} onClick={resetTimer} disabled={isRunning}>
          Reset
        </button>
      </div>
      <div style={styles.timerDisplay}>
        Time Remaining: {formatTime(minutes)}:{formatTime(seconds)}
      </div>
    </div>
  );
};

// Inline styles object
const styles = {
  timerContainer: {
    maxWidth: '300px',
    margin: '0 auto',
    textAlign: 'center',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  timerInputs: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px',
  },
  input: {
    width: '50px',
    textAlign: 'center',
    margin: '0 5px',
  },
  button: {
    padding: '10px 20px',
    marginRight: '10px',
    fontSize: '16px',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#007bff',
    color: '#fff',
  },
  timerDisplay: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
};

export default Timer;
