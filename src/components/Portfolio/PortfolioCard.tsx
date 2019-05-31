import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  title: string;
  path: string;
  imgSrc: string;
}

const PortfolioCard: React.FC<Props> = (props: Props) => (
  <Link to={props.path}>
    <div className="portfolio-card">
      <img src={props.imgSrc} alt="portfolio-link" className="portfolio-image" />
      <p>{props.title}</p>
    </div>
  </Link>
);

export default PortfolioCard;
