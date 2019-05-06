import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

interface Props {
  atHome: boolean;
  toggleHeader(): void;
}

const Header: React.FC<Props> = (props: Props) => {
  if (props.atHome) {
    return (
      <header>
        <div className="header-home">
          <NavLink to="/">
            <div className="full-name">
              <h1>Jude Michael Lim</h1>
            </div>
          </NavLink>
        </div>
      </header>
    );
  }
  return (
    <header>
      <div className="header-not-home">
        <div className="full-name">
          <h1>Jude Michael Lim</h1>
        </div>
        <nav className="navbar">
          <NavLink to="/" onClick={() => props.toggleHeader()}>
            Home
          </NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
          <NavLink to="/cv">CV</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
