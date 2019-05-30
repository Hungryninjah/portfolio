import React from 'react';
import PortfolioCard from './PortfolioCard';
import './Portfolio.css';
import img1 from './images/tile.png';

const Portfolio: React.FC = () => (
  <main className="portfolio">
    <div className="portfolio-wrap">
      <h1>Portfolio</h1>
      <PortfolioCard title="WebApps" path="/portfolio/webapps" imgSrc={img1} />
      <PortfolioCard title="Coding Challenges" path="/portfolio/coding-challenges" imgSrc={img1} />
      <PortfolioCard title="NativeApps" path="/portfolio/webapps" imgSrc={img1} />
      <PortfolioCard title="Server" path="/portfolio/webapps" imgSrc={img1} />
    </div>
  </main>
);

export default Portfolio;
