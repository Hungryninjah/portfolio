import React from 'react';
import PortfolioCard from './PortfolioCard';
import './Portfolio.css';
import img1 from './images/tile.png';
import webAppImg from './images/web-apps.png';
import codingChallengesImg from './images/coding-challenges.png';

const Portfolio: React.FC = () => (
  <main className="portfolio">
    <div className="portfolio-wrap">
      <h1>Portfolio</h1>
      <PortfolioCard title="WebApps" path="/portfolio/webapps" imgSrc={webAppImg} />
      <PortfolioCard title="Coding Challenges" path="/portfolio/coding-challenges" imgSrc={codingChallengesImg} />
      <PortfolioCard title="NativeApps" path="/portfolio/webapps" imgSrc={img1} />
      <PortfolioCard title="Server" path="/portfolio/webapps" imgSrc={img1} />
    </div>
  </main>
);

export default Portfolio;
