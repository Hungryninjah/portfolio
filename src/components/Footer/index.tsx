import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer>
    <h2>Let‘s keep in Touch!</h2>
    <p>Email: judemlim@gmail.com</p>
    <p>Mobile: 0426219951</p>
    <p>Copyright Jude Michael Lim</p>
    <Link to="/imprint">Imprint</Link>
  </footer>
);

export default Footer;
