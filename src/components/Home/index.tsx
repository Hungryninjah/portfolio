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
  const [quote, setQuote] = useState<string>();
  const [author, setAuthor] = useState<string>();
  const [count, setCount] = useState<number>(0);

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
      <button className="rqg-btn" onClick={() => setCount(count + 1)}>
        <p className="rqg-quote">‘{quote}’</p>
        <p className="rqg-author">~ {author}</p>
      </button>
      <div className="content-wrap">
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
