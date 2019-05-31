import React from 'react';
import WebAppCard from './WebAppCard';
import './WebApps.css';
import image1 from './images/tile.png';
import clockImg from './images/clock.png';
import masksImg from './images/masks.png';
import todoListImg from './images/todo-list.png';

const WebApps: React.FC = () => (
  <main className="webapp-page">
    <div className="webapp-wrap">
      <h1>Web Apps</h1>
      <WebAppCard imgSrc={todoListImg} path="/portfolio/webapps/todolist" title="TODO List" />
      <WebAppCard imgSrc={masksImg} path="/portfolio/webapps/memegenerator" title="Meme Generator" />
      <WebAppCard imgSrc={clockImg} path="/portfolio/webapps/analogueclock" title="Analogue Clock" />
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
