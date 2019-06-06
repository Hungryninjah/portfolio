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
      <PortfolioCard title="Web Apps" path="/portfolio/web-apps" imgSrc={webAppImg} />
      <PortfolioCard title="Coding Challenges" path="/portfolio/coding-challenges" imgSrc={codingChallengesImg} />
      <PortfolioCard title="Website Information" path="/portfolio/website-information" imgSrc={domainImg} />
      <PortfolioCard title="Uni Projects" path="/portfolio/uni-projects" imgSrc={uniImg} />
    </div>
  </main>
);

export default Portfolio;
