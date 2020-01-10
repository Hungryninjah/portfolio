import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => (
  <main className="About">
    <h1>About</h1>
    <div className="content-wrap">
      <h2>Welcome!</h2>
      <p>
        Welcome to my website! Here I showcase the various programming works I’ve completed to improve my programming
        skill-set.
      </p>
      <h2>This Website</h2>
      <p>
        I created this website using Facebook‘s React library. It started off with me just wanting to put my work on
        display; it unexpectedly became an immersive course on web-development using React. To learn more about this
        website, you can access the project page here:
      </p>

      <Link to="/portfolio/website-information" className="external-link" target="_blank" rel="noopener noreferrer">
        Link to website’s project page
      </Link>

      <h2>My Coding Environment</h2>
      <h4>IDEs and Text Editors</h4>
      <ul>
        <li>For web development I use Visual Studio Code</li>
        <li>For coding C/C++ and Python I use Neovim.</li>
        <li>For coding Java I use Intellij</li>
      </ul>
      <h4>OS</h4>
      <p>
        I use the Debian 10 linux distribution. I chose Linux because I wanted to learn more about operating systems;
        Linux encourages me to delve into OS lower levels. I chose Debian because I read that it was one of the more
        reliable Linux distributions reccomended for advanced users. Having no experience with Linux, I figured this
        would be a challenging and rewarding learning experience.
      </p>
      <p>A goal of mine is to be able to customise and debug the kernal.</p>
      <h4>Hardware</h4>
      <p>
        I do all my work on my humble Acer Aspire S5-371T. Its extremely loud fan that roared whenever I was using
        Windows 10, was what inspired me to use lightweight alternatives like Debian.
      </p>
    </div>
  </main>
);

export default About;
