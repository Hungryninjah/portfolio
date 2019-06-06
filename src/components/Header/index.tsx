import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

interface Props {
  atHome: boolean;
}

const Header: React.FC<Props> = (props: Props) => {
  if (props.atHome) {
    return (
      <header>
        <div className="header-home">
          <div className="full-name">
            <h1>Jude Michael Lim</h1>
          </div>
        </div>
      </header>
    );
  }
  return (
    <header>
      <div className="header-not-home">
        <Link to="/">
          <div className="full-name">
            <h1>Jude Michael Lim</h1>
          </div>
        </Link>
        <nav className="navbar">
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/about">About</Link>
          <Link to="/cv">CV</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
