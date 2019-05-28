import React, { useEffect } from 'react';
import HomeCard from './HomeCard';
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
        <HomeCard title="Portfolio" path="/portfolio" />
        <HomeCard title="About" path="/about" />
        <HomeCard title="CV" path="/cv" />
      </div>
    </main>
  );
};

export default Home;
