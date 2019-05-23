import React from 'react';
import PortfolioCard from './PortfolioCard';
import './Portfolio.css';

const Portfolio: React.FC = () => (
  <main className="portfolio">
    <div className="portfolio-wrap">
      <h1>Portfolio</h1>
      <PortfolioCard title="WebApps" path="/portfolio/webapps" />
      <PortfolioCard title="WebApps" path="/portfolio/webapps" />
      <PortfolioCard title="WebApps" path="/portfolio/webapps" />
      <PortfolioCard title="WebApps" path="/portfolio/webapps" />
    </div>
  </main>
);

export default Portfolio;
