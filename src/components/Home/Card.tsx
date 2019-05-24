import React from 'react';
import { Link } from 'react-router-dom';
import image1 from './images/image1.png';

interface Props {
  title: string;
  path: string;
}

const Card: React.FC<Props> = (props: Props) => (
  <div className="card">
    <div className="front center">
      <Link to={props.path}>
        <img src={image1} alt="test-image1" className="home-image" />
        <h3>{props.title}</h3>
      </Link>
    </div>
  </div>
);

export default Card;
