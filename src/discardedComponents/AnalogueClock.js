import React, { useState, useEffect } from 'react';
import ClockDisplay from './ClockDisplay';
import './AnalogueClock.css';

// The goal of this task is to translate existing JS code and convert it into
// the react library by myself

const AnalogueClock = () => {
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

  let content = (
    <main className="analogue-clock-page">
      <ClockDisplay time={handPositions} />
      <div className="content-wrap">
        <p>The goal of this task was to work with existing JS code and convert it into the react library</p>
      </div>
    </main>
  );
  return content;
};

export default AnalogueClock;
