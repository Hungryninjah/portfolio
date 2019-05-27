import React, { useState } from 'react';
import EmbeddedGist from './EmbeddedGist';
import hackerrankList from './hackerrank_list.json';
import { UnmountClosed } from 'react-collapse';

const Challenges = () => {
  const [isHackerrankVisible, setIsHackerrankVisible] = useState(false);
  const [isProjectEulerVisible, setIsProjectEulerVisible] = useState(false);
  const toggleHackerrankVis = () => {
    setIsHackerrankVisible(!isHackerrankVisible);
  };
  const toggleProjectEulerVis = () => {
    setIsProjectEulerVisible(!isProjectEulerVisible);
  };
  return (
    <main>
      <div className="content-wrap">
        <h1>Coding Challenges</h1>
        <h2>Hackerrank Challenges</h2>
        <button onClick={() => toggleHackerrankVis()}>{isHackerrankVisible ? 'Hide all' : 'Show all'}</button>
        <UnmountClosed isOpened={isHackerrankVisible}>
          {hackerrankList.map(item => (
            <EmbeddedGist
              title={item.title}
              language={item.language}
              gist={item.url}
              challenge={item.challengeLink}
              dateCompleted={item.dateCompleted}
              difficulty={item.difficulty}
              key={item.key}
            />
          ))}
        </UnmountClosed>

        <h2>Project Euler Challenges</h2>
        <button onClick={() => toggleProjectEulerVis()}>{isProjectEulerVisible ? 'Hide all' : 'Show all'}</button>
        <UnmountClosed isOpened={isProjectEulerVisible}>
          <p>Stuff in here</p>
        </UnmountClosed>
      </div>
    </main>
  );
};

export default Challenges;
