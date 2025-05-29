import React, { useState, useEffect } from 'react';

//TODO : will do it with setinterval not with button controls
function ProgressBarTransition() {
  const [progress, setProgress] = useState(0);
  const [color, setColor] = useState('');

  const updateProgress = (progressPercentage) => {
    const value = progress + progressPercentage;
    if (value < 0) setProgress(0);
    else if (value > 100) setProgress(100);
    else setProgress(value);

    if (progress < 40) setColor('red');
    else if (progress >= 40 && progress < 80) setColor('orange');
    else setColor('green');
  };

  return (
    <div className="progress-bar">
      <h1> Progress Bar </h1>
      <div className="progress-bar-input">
        <div
          className="progress-color-bar"
          style={{
            width: `${progress}%`,
            backgroundColor: color,
            height: '100%',
            transition: 'width 0.3s ease-in-out',
            position: 'absolute',
          }}
        ></div>
        <span style={{ position: 'relative', padding: '2px' }}>
          {progress}%
        </span>
      </div>

      <div className="controls">
        <button
          onClick={() => {
            updateProgress(-10);
          }}
        >
          -10%
        </button>
        <button
          onClick={() => {
            updateProgress(10);
          }}
        >
          +10%
        </button>
      </div>
    </div>
  );
}

export default ProgressBarTransition;
