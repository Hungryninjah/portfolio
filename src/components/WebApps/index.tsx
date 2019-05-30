import React from 'react';
import WebAppCard from './WebAppCard';
import './WebApps.css';
import image1 from './images/tile.png';

const WebApps: React.FC = () => (
  <main className="webapp-page">
    <div className="webapp-wrap">
      <h1>Web Apps</h1>
      <WebAppCard imgSrc={image1} path="/portfolio/webapps/todolist" title="TODO List" />
      <WebAppCard imgSrc={image1} path="/portfolio/webapps/memegenerator" title="Meme Generator" />
      <WebAppCard imgSrc={image1} path="/portfolio/webapps/analogueclock" title="Analogue Clock" />
      <WebAppCard imgSrc={image1} path="/portfolio/webapps/analogueclock" title="Analogue Clock" />
      <WebAppCard imgSrc={image1} path="/portfolio/webapps/analogueclock" title="Analogue Clock" />
      <WebAppCard imgSrc={image1} path="/portfolio/webapps/analogueclock" title="Analogue Clock" />
      <WebAppCard imgSrc={image1} path="/portfolio/webapps/analogueclock" title="Analogue Clock" />
      <WebAppCard imgSrc={image1} path="/portfolio/webapps/analogueclock" title="Analogue Clock" />
      <WebAppCard imgSrc={image1} path="/portfolio/webapps/analogueclock" title="Analogue Clock" />
    </div>
  </main>
);

export default WebApps;
