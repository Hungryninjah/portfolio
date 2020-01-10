import React from 'react';
import CardSmall from '../CardSmall';
import clockImg from './images/clock.png';
import masksImg from './images/masks.png';
import todoListImg from './images/todo-list.png';

const WebApps: React.FC = () => (
  <main className="webapp-page">
    <div className="small-card-wrap">
      <h1>Web Apps</h1>
      <CardSmall imgSrc={todoListImg} path="/portfolio/web-apps/todo-list" title="TODO List" />
      <CardSmall imgSrc={masksImg} path="/portfolio/web-apps/meme-generator" title="Meme Generator" />
      <CardSmall imgSrc={clockImg} path="/portfolio/web-apps/analogue-clock" title="Analogue Clock" />
    </div>
  </main>
);

export default WebApps;
