import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  title: string;
  path: string;
  imgSrc: string;
}

const WebAppCard: React.FC<Props> = (props: Props) => (
  <div className="webapp-card">
    <Link to={props.path}>
      <img src={props.imgSrc} alt="webapp-link" className="webapp-image" />
      <p>{props.title}</p>
    </Link>
  </div>
);

export default WebAppCard;
