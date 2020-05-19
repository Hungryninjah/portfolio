import React from 'react';
import Log from '../Log';
import websiteLog from './website_log.json';

const About: React.FC = () => (
  <main className="About">
    <h1>About</h1>
    <div className="content-wrap">
      <h2>Welcome!</h2>
      <p>
        Welcome to my website! Here I showcase the various programming works I’ve completed to improve my programming
        skill-set.
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
      <h2>This Website</h2>
      <p>
        This website was created using Facebook’s <strong>React</strong> library. It is written primarily in{' '}
        <strong>TypeScript</strong>.
      </p>
      <p>
        All the programming language features I display on this website, <strong>HTML</strong>, <strong>CSS</strong>,{' '}
        <strong>JavaScript</strong>, <strong>TypeScript</strong>, were all learnt from watching youtube tutorials,
        online courses on Lynda, and through reading documentation from official sources.
      </p>
      <p>
        This website is hosted using <strong>github pages</strong>. The repository for this website can be accessed
        here:
      </p>
      <a
        href="https://github.com/judemlim/judemlim.github.io.git"
        className="external-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Link to website’s github repo
      </a>
      <h3>Website Log</h3>
      <Log entries={websiteLog} />
    </div>
  </main>
);

export default About;
