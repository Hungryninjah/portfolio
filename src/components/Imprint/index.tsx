import React from 'react';
import HomeIcons from './HomeIcons';
import PortfolioIcons from './PortfolioIcons';
import WebappIcons from './WebappIcons';
import UniAssIcons from './UniProjectsIcons';

const Imprint = () => {
  return (
    <main className="imprint">
      <h1>Imprint</h1>
      <div className="content-wrap">
        <h2>Graphical Icon Acknowledgements</h2>
        <HomeIcons />
        <PortfolioIcons />
        <WebappIcons />
        <UniAssIcons />
      </div>
    </main>
  );
};

export default Imprint;
