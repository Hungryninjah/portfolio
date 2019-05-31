import React from 'react';
import PortfolioCard from './PortfolioCard';
import './Portfolio.css';
import webAppImg from './images/web-apps.png';
import codingChallengesImg from './images/coding-challenges.png';
import domainImg from './images/domain.png';
import uniImg from './images/uni-student.png';

const Portfolio: React.FC = () => (
  <main className="portfolio">
    <div className="portfolio-wrap">
      <h1>Portfolio</h1>
      <PortfolioCard title="This Website" path="/portfolio/website" imgSrc={domainImg} />
      <PortfolioCard title="Coding Challenges" path="/portfolio/coding-challenges" imgSrc={codingChallengesImg} />
      <PortfolioCard title="WebApps" path="/portfolio/webapps" imgSrc={webAppImg} />
      <PortfolioCard title="Uni Projects" path="/portfolio/uni-projects" imgSrc={uniImg} />
    </div>
  </main>
);

export default Portfolio;
