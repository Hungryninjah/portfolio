import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  title: string;
  path: string;
  imgSrc: string;
}

const WebAppCard: React.FC<Props> = (props: Props) => (
  <Link to={props.path}>
    <div className="webapp-card">
      <img src={props.imgSrc} alt="webapp-link" className="webapp-image" />
      <p>{props.title}</p>
    </div>
  </Link>
);

export default WebAppCard;
