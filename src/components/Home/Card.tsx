import React from 'react';
import { Link } from 'react-router-dom';
import image1 from './images/image1.png';

interface Props {
  title: string;
  path: string;
  toggleHeader(): void;
}

const Card: React.FC<Props> = (props: Props) => (
  <div className="card">
    <Link to={props.path} onClick={() => props.toggleHeader()}>
      <div className="front">
        <img src={image1} alt="test-image1" className="home-image" />
        <h3>{props.title}</h3>
        {/* <div className="container">
                    <h3><span className="price"> $something here</span></h3>
                    <p>description</p>
        </div> */}
      </div>
    </Link>
  </div>
);

export default Card;
