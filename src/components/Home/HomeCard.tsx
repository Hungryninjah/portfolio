import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  title: string;
  path: string;
  imgPath: string;
}

const HomeCard: React.FC<Props> = (props: Props) => (
  <Link to={props.path}>
    <div className="home-card">
      <div className="col1">
        <img src={props.imgPath} alt="home-link" className="home-image" />
      </div>
      <div className="col2">
        <h2>{props.title}</h2>
      </div>
    </div>
  </Link>
);

export default HomeCard;
