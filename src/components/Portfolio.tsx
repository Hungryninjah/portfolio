import React from 'react';
import { NavLink } from 'react-router-dom';

const Portfolio: React.FC = () => (
  <main className="portfolio">
    <div className="content-wrap">
      <h1>My Portfolio</h1>
      <div className="page-link">
        <NavLink to="/Portfolio/WebApps">Web Apps</NavLink>
      </div>
    </div>
  </main>
);

export default Portfolio;
