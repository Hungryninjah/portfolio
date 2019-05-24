import React, { useEffect } from 'react';
import Card from './Card';
import './Home.css';

interface Props {
  homeHeader(): void;
  awayHeader(): void;
}

const Home: React.FC<Props> = (props: Props) => {
  useEffect(() => {
    props.homeHeader();
    return () => {
      props.awayHeader();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <main className="home-page">
      <br />
      <div className="content-wrap">
        <Card title="Portfolio" path="/portfolio" />
        <Card title="About" path="/about" />
        <Card title="CV" path="/cv" />
      </div>
    </main>
  );
};

export default Home;
