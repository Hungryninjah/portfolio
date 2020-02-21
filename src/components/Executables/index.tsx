import React from 'react';
import CardSmall from '../CardSmall';
import flareDetectorImg from './images/flare_detector.png';

const Executables = () => {
  return (
    <main className="uniprojects-page">
      <div className="small-card-wrap">
        <h1>Executables</h1>
        <CardSmall imgSrc={flareDetectorImg} path="/portfolio/executables/flare-detector" title="Lens Flare Detector" />
      </div>
    </main>
  );
};

export default Executables;
