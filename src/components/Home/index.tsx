/* eslint-disable max-len */
import React from 'react';
import Card from './Card';
import './Home.css';

interface Props {
  toggleHeader(): void;
}

const Home: React.FC<Props> = (props: Props) => {
  return (
    <main className="home-page">
      <br />
      <div className="content-wrap">
        <Card title="Portfolio" path="/portfolio" toggleHeader={props.toggleHeader} />
        <Card title="About" path="/about" toggleHeader={props.toggleHeader} />
        <Card title="CV" path="/cv" toggleHeader={props.toggleHeader} />
      </div>
    </main>
  );
};

export default Home;
