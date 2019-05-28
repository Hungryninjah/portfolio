import React from 'react';
import { Link } from 'react-router-dom';
import image1 from './images/tile.png';

interface Props {
  title: string;
  path: string;
}

const PortfolioCard: React.FC<Props> = (props: Props) => (
  <div className="portfolio-card-container">
    <div className="portfolio-card">
      <Link to={props.path}>
        <img src={image1} alt="portfolio-link" className="portfolio-image" />
        <p>{props.title}</p>
      </Link>
    </div>
  </div>
);

export default PortfolioCard;
