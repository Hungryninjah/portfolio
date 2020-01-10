import React from 'react';
import CardSmall from '../CardSmall';
import romanNumeralImg from './images/roman-numerals.png';

const UniProjects = () => {
  return (
    <main className="uniprojects-page">
      <div className="small-card-wrap">
        <h1>University Assignments</h1>
        <CardSmall imgSrc={romanNumeralImg} path="/portfolio/web-apps/analogue-clock" title="Roman Numerals" />
      </div>
    </main>
  );
};

export default UniProjects;
