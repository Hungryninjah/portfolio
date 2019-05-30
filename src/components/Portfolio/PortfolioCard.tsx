import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  title: string;
  path: string;
  imgSrc: string;
}

const PortfolioCard: React.FC<Props> = (props: Props) => (
  <div className="portfolio-card">
    <Link to={props.path}>
      <img src={props.imgSrc} alt="portfolio-link" className="portfolio-image" />
      <p>{props.title}</p>
    </Link>
  </div>
);

export default PortfolioCard;
