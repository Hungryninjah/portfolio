import React, { useState, useEffect } from 'react';
import AdditionalInfo from '../AdditionalInfo';
import ClockDisplay from './ClockDisplay';
import './AnalogueClock.css';

const AnalogueClock: React.FC = () => {
  const [handPositions, setHandPositions] = useState({
    hrPosition: 0,
    minPosition: 0,
    secPosition: 0,
  });

  const runTheClock = () => {
    setHandPositions(prevHandPositions => ({
      hrPosition: prevHandPositions.hrPosition + 3 / 360,
      minPosition: prevHandPositions.minPosition + 6 / 60,
      secPosition: prevHandPositions.secPosition + 6,
    }));
  };

  useEffect(() => {
    const date = new Date();
    const hr = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();
    setHandPositions({
      hrPosition: (hr * 360) / 12 + (min * (360 / 60)) / 12,
      minPosition: (min * 360) / 60 + (sec * (360 / 60)) / 60,
      secPosition: (sec * 360) / 60,
    });
    setInterval(runTheClock, 1000);
  }, []);

  return (
    <main className="analogue-clock-page">
      <AdditionalInfo>
        <p>Learning Objective: Refactor vanilla JS into React TS</p>
        <p>TODO additional animation to show whether it‘s day or night, implement timezone calls</p>
        <p>
          Learning Resource:{' '}
          <a
            href="https://www.lynda.com/JavaScript-tutorials/JavaScript-Essential-Training/574716-2.html"
            className="external-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.lynda.com/JavaScript-tutorials/JavaScript-Essential-Training/574716-2.html
          </a>{' '}
        </p>
      </AdditionalInfo>
      <h1>Analogue Clock</h1>
      <ClockDisplay time={handPositions} />
    </main>
  );
};
export default AnalogueClock;
