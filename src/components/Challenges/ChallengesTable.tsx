import React, { useState } from 'react';
import { UnmountClosed } from 'react-collapse';
import EmbeddedGist from './EmbeddedGist';
import './Challenges.css';

interface ListItem {
  title: string;
  language: string;
  url: string;
  challengeLink: string;
  dateCompleted: string;
  difficulty: string;
  key: number;
}

interface Props {
  challengeList: ListItem[];
}

const ChallengesTable: React.FC<Props> = (props: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVis = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className="challenge-table">
      <button onClick={() => toggleVis()}>{isVisible ? 'Hide all' : 'Show all'}</button>
      <UnmountClosed isOpened={isVisible}>
        <div className="challenges-table header">
          <div className="ct-col1">Title</div>
          <div className="ct-col2">Programming Language</div>
          <div className="ct-col3">Difficulty</div>
          <div className="ct-col4">Date Completed</div>
        </div>
        {props.challengeList.map(item => (
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
    </div>
  );
};

export default ChallengesTable;
