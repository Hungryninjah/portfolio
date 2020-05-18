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
        website, you can access the project page{' '}
        <Link to="/portfolio/website-information" className="external-link" target="_blank" rel="noopener noreferrer">
          here.
        </Link>
      </p>
      <h2>My Coding Environment</h2>
      <h4>Text Editor</h4>
      <p>
        I do all my programming on Neovim. I have my config file set up for web development, C/C++, Python, R, and
        Latex. You can see my configuration files{' '}
        <a
          href={'https://github.com/judemlim/config-files/tree/master/nvim'}
          className="external-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          here.
        </a>
      </p>
      <h4>OS</h4>
      <p>
        I currently use the Arch Linux distribution with the popular i3 window tiling manager. All my configuration
        files and scripts are located{' '}
        <a
          href={'https://github.com/judemlim/config-files'}
          className="external-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          here.
        </a>
      </p>
      <p>A goal of mine is to be able to customise and debug the kernel.</p>
      <h4>Hardware</h4>
      <p>
        I do all my work on my humble Acer Aspire S5-371T. Its extremely loud fan that roared whenever I was using
        Windows 10 is what inspired me to use lightweight Linux distributions.
      </p>
    </div>
  </main>
);

export default About;
