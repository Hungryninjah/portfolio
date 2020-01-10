import React from 'react';
import { Link } from 'react-router-dom';
import './CardSmall.css';
interface Props {
  title: string;
  path: string;
  imgSrc: string;
}

const CardSmall: React.FC<Props> = (props: Props) => (
  <Link to={props.path}>
    <div className="small-card">
      <img src={props.imgSrc} alt="small-card-link" className="small-card-image" />
      <p>{props.title}</p>
    </div>
  </Link>
);

export default CardSmall;
