import React from 'react';

const About: React.FC = () => (
  <main className="About">
    <h1>About</h1>
    <div className="content-wrap">
      <h2>Welcome!</h2>
      <p>
        Welcome to my website! Here I showcase the various programming works I’ve completed to improve my coding
        skill-set.
      </p>
      <h2>This Website</h2>
      <p>
        I created this website using Facebook‘s React library. It started off with me just wanting to put my work on
        display; it unexpectedly became an immersive course on web-development using React. You can access this
        website‘s git repository here:
      </p>

      <a
        href="https://github.com/judemlim/judemlim.github.io.git"
        className="external-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Link to website‘s github repo
      </a>

      <h2>My Coding Environment</h2>
      <p>I use different text editors/IDEs depending on what I‘m trying to achieve:</p>
      <ul>
        <li>For web development I use Visual Studio Code</li>
        <li>For coding Python I use PyCharm</li>
        <li>For coding Java I use Intellij</li>
        <li>For coding C++ I use Microsoft Visual Studio.</li>
      </ul>

      <h2>My Setup</h2>
      <h4>OS</h4>
      <p>
        I‘ve recently become a Linux user (mid-2019) and settled on using the Debian 10 distribution (which was
        DebianTesting during the time I wrote this). Debian 9 was indeed stable, however some of the desktop apps I
        liked were buggy and out of date. Nowadays I only use Windows whenever I have no choice but to use Microsft
        Word, and that is through a virtual machine on Debian.
      </p>
      <p>
        I chose Debian because I read that it was one of the more reliable Linux distributions reccomended for advanced
        users. Having no experience with Linux, I figured this would be a challenging and rewarding learning experience.
        I‘m enjoying the customisability of Linux and the little challenges I regularly face from having taken Windows
        for granted. I also figured that changing from Debian to Ubuntu (when the time comes) wouldn‘t be too much of a
        learning curve.
      </p>
      <p>It is a goal of mine to be able to customise and debug the kernal.</p>
      <h4>Hardware</h4>
      <p>
        All my work is done on my humble Acer Aspire S5-371T. Its extremely loud fan that roared whenever I was using
        Windows 10, was what inspired me to use lightweight alternatives like Debian.
      </p>
    </div>
  </main>
);

export default About;
