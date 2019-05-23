import React from 'react';
import { NavLink } from 'react-router-dom';

const WebApps: React.FC = () => (
  <main className="web-app-page">
    <div className="content-wrap center">
      <h1>Web Apps</h1>
      <NavLink to="/portfolio/webapps/todolist">TODO List</NavLink>
      <br />
      <NavLink to="/portfolio/webapps/memegenerator">Meme Generator</NavLink>
      <br />
      <NavLink to="/portfolio/webapps/analogueclock">Analogue Clock</NavLink>
      <br />
    </div>
  </main>
);

export default WebApps;
