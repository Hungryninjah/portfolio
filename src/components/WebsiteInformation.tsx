import React from 'react';

const WebsiteInformation = () => {
  return (
    <main className="website-information">
      <div className="content-wrap">
        <h1>Website Information</h1>
        <h2>General Information</h2>
        <p>
          This website was created using Facebook’s <strong>React</strong> library. It is written primarily in{' '}
          <strong>TypeScript</strong> and mainly employs React stateful functional components as opposed to the more
          wide-spread class based components.
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
        <h2>Production Environment</h2>
        <p>
          I developed this website using Visual Studio Code, with ESLint as my linter, and the prettier package as my
          formatter.
        </p>
        <h2>Major Project Events</h2>
        <ol>
          <li>Initially developed in JavaScript</li>
          <li>Added linter and formatter to production environment</li>
          <li>Refactored into TypeScript</li>
          <li>Refactored into using React hooks and only functional components</li>
          <li>Automated publishing of website changes using github’s branch relationships</li>
          <li>Implemented hash-routing to solve server side rendering issues with React</li>
          <li>Added the Random Quote Generator at the home page for quick doses of inspiration</li>
        </ol>
      </div>
    </main>
  );
};

export default WebsiteInformation;
