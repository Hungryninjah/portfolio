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
        <NavLink to="/" onClick={() => props.toggleHeader()}>
          <div className="full-name">
            <h1>Jude Michael Lim</h1>
          </div>
        </NavLink>
        <nav className="navbar">
          <NavLink to="/portfolio">Portfolio</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/cv">CV</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
