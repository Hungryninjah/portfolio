import React, { useState, useEffect } from 'react';
import HomeCard from './HomeCard';
import './Home.css';

interface Props {
  homeHeader(): void;
  awayHeader(): void;
}

const Home: React.FC<Props> = (props: Props) => {
  const [quote, setQuote] = useState();
  const [author, setAuthor] = useState();

  useEffect(() => {
    props.homeHeader();
    fetch('http://quotes.rest/qod.json')
      .then(response => response.json())
      .then(myJson => {
        console.log(myJson.contents.quotes[0]);
        setQuote(myJson.contents.quotes[0].quote);
        setAuthor(myJson.contents.quotes[0].author);
      });
    return () => {
      props.awayHeader();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const content = (
    <main className="home-page">
      <br />
      <div className="qod-wrap">
        <p className="qod-quote">”{quote}”</p>
        <p className="qod-author">~ {author}</p>
        <p className="qod-acknowledgement">
          Quotes of the day from{' '}
          <a href="https://theysaidso.com/api/" target="_blank" rel="noopener noreferrer">
            theysaidso.com/api/
          </a>
        </p>
      </div>
      <div className="content-wrap">
        <HomeCard title="Portfolio" path="/portfolio" />
        <HomeCard title="About" path="/about" />
        <HomeCard title="CV" path="/cv" />
      </div>
    </main>
  );
  return content;
};

export default Home;
