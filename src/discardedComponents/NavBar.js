import React from 'react';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return ( 
        <header className="header">
            <div className="full-name">
                <h1>Jude Michael Lim</h1>
            </div>
            <nav className="navbar">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/portfolio">Portfolio</NavLink>
                <NavLink to="/cv">CV</NavLink>
                <NavLink to="/about">About</NavLink>
            </nav>
        </header> 
     );
}
 
export default NavBar;
