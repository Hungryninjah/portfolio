import React, { useState, useEffect } from 'react';
import AdditionalInfo from '../AdditionalInfo';
import './style.css';

const MemeGeneratorApp: React.FC = () => {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [randomImg, setRandomImg] = useState('http://i.imgflip.com/1bij.jpg');
  const [allMemeImgs, setAllMemeImgs] = useState([]);
  // const [loading, setLoading] = useState(false); TODO set loading screen

  useEffect(() => {
    // setLoading(true);
    fetch('https://api.imgflip.com/get_memes')
      .then(response => response.json())
      .then(response => {
        const { memes } = response.data;
        setAllMemeImgs(memes);
        // setLoading(false);
      });
  }, []);

  const handleTopTxt = (event: React.FormEvent<HTMLInputElement>): void => {
    setTopText(event.currentTarget.value);
  };

  const handleBottomTxt = (event: React.FormEvent<HTMLInputElement>): void => {
    setBottomText(event.currentTarget.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const memesList = allMemeImgs;
    const newRandomImg = memesList[Math.floor(Math.random() * memesList.length)];
    const { url } = newRandomImg;
    setRandomImg(url);
  };

  const content = (
    <main className="meme-generator-page">
      <AdditionalInfo>
        <p>Learning objective: To execute API calls</p>
        <p>TODO: Properly scale text, make image downloadable</p>
        <p>
          Learning Resource:{' '}
          <a
            href="https://scrimba.com/playlist/p7P5Hd"
            className="external-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://scrimba.com/playlist/p7P5Hd
          </a>{' '}
        </p>
      </AdditionalInfo>
      <h1>Meme Generator</h1>
      <form className="meme-form" onSubmit={handleSubmit}>
        <input type="text" name="topText" onChange={handleTopTxt} value={topText} placeholder="Top Text" />
        <input type="text" name="bottomText" onChange={handleBottomTxt} value={bottomText} placeholder="Bottom Text" />
        <button>Generate</button>
      </form>
      <div className="meme">
        <img src={randomImg} alt="" />
        <h2 className="top">{topText}</h2>
        <h2 className="bottom">{bottomText}</h2>
      </div>
    </main>
  );
  return content;
};

export default MemeGeneratorApp;
