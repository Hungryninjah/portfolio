import React, { useState, useEffect } from 'react';
import HomeCard from './HomeCard';
import portfolioImg from './images/portfolio.png';
import cvImg from './images/cv.png';
import aboutImg from './images/about.png';
import quotes from './quotes.json';
import './Home.css';

interface Props {
  homeHeader(): void;
  awayHeader(): void;
}

const Home: React.FC<Props> = (props: Props) => {
  const [quote, setQuote] = useState();
  const [author, setAuthor] = useState();
  const [count, setCount] = useState(0);

  useEffect(() => {
    props.homeHeader();
    let item = quotes.quotes[Math.floor(Math.random() * quotes.quotes.length)];
    setQuote(item.quote);
    setAuthor(item.author);
    return () => {
      props.awayHeader();
    };
  }, []);

  useEffect(() => {
    let item = quotes.quotes[Math.floor(Math.random() * quotes.quotes.length)];
    setQuote(item.quote);
    setAuthor(item.author);
  }, [count]);

  const content = (
    <main className="home-page">
      <br />
      <div className="rqg-wrap">
        <p className="rqg-quote">‘{quote}’</p>
        <p className="rqg-author">~ {author}</p>
        <button className="rqg-info" onClick={() => setCount(count + 1)}>
          CLICK FOR NEW QUOTE
        </button>
      </div>
      <div className="home-wrap">
        <HomeCard title="Portfolio" path="/portfolio" imgPath={portfolioImg} />
        <HomeCard title="About" path="/about" imgPath={aboutImg} />
        <HomeCard title="CV" path="/cv" imgPath={cvImg} />
      </div>
    </main>
  );
  return content;
};

export default Home;
