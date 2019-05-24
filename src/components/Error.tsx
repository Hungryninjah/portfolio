import React from 'react';
import { Link } from 'react-router-dom';

const Error: React.FC = () => (
  <main className="center">
    <h1>404</h1>
    <h2>Path not found</h2>
    <h4>
      Please return to the{' '}
      <Link to="/" className="external-link">
        homepage
      </Link>
    </h4>
  </main>
);

export default Error;
