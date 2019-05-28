import React from 'react';
import { Link } from 'react-router-dom';
import image1 from './images/tile.png';

interface Props {
  title: string;
  path: string;
}

const WebAppCard: React.FC<Props> = (props: Props) => (
  <div className="webapp-card-container">
    <Link to={props.path}>
      <img src={image1} alt="webapp-link" className="webapp-image" />
      <p>{props.title}</p>
    </Link>
  </div>
);

export default WebAppCard;
