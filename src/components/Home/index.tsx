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
      <div className="content-wrap">
        <div className="column1">
          <h1>Welcome!</h1>
          <p>
            Welcome to my website! Here I showcase the various programming works I&rsquo;ve completed to improve my
            coding skill-set. This website was created using React, and developed by myself. Testing cross orphan branch
            deployment
          </p>
        </div>
        <div className="column2">
          <Card title="Portfolio" path="/portfolio" toggleHeader={props.toggleHeader} />
          <Card title="CV" path="/cv" toggleHeader={props.toggleHeader} />
          <Card title="About" path="/about" toggleHeader={props.toggleHeader} />
        </div>
      </div>
    </main>
  );
};

export default Home;
