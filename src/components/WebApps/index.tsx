import React from 'react';
import WebAppCard from './WebAppCard';
import './WebApps.css';
import clockImg from './images/clock.png';
import masksImg from './images/masks.png';
import todoListImg from './images/todo-list.png';

const WebApps: React.FC = () => (
  <main className="webapp-page">
    <div className="webapp-wrap">
      <h1>Web Apps</h1>
      <WebAppCard imgSrc={todoListImg} path="/portfolio/web-apps/todo-list" title="TODO List" />
      <WebAppCard imgSrc={masksImg} path="/portfolio/web-apps/meme-generator" title="Meme Generator" />
      <WebAppCard imgSrc={clockImg} path="/portfolio/web-apps/analogue-clock" title="Analogue Clock" />
    </div>
  </main>
);

export default WebApps;
