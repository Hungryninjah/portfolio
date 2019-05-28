import React from 'react';
import WebAppCard from './WebAppCard';
import './WebApps.css';

const WebApps: React.FC = () => (
  <main className="webapp-page">
    <div className="webapp-wrap">
      <h1>Web Apps</h1>
      <WebAppCard path="/portfolio/webapps/todolist" title="TODO List" />
      <WebAppCard path="/portfolio/webapps/memegenerator" title="Meme Generator" />
      <WebAppCard path="/portfolio/webapps/analogueclock" title="Analogue Clock" />
      <WebAppCard path="/portfolio/webapps/analogueclock" title="Analogue Clock" />
      <WebAppCard path="/portfolio/webapps/analogueclock" title="Analogue Clock" />
      <WebAppCard path="/portfolio/webapps/analogueclock" title="Analogue Clock" />
      <WebAppCard path="/portfolio/webapps/analogueclock" title="Analogue Clock" />
      <WebAppCard path="/portfolio/webapps/analogueclock" title="Analogue Clock" />
      <WebAppCard path="/portfolio/webapps/analogueclock" title="Analogue Clock" />
    </div>
  </main>
);

export default WebApps;
