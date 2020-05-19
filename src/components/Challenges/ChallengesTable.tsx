import React, { useState } from 'react';
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
  const [maxItems, setMaxItems] = useState<number>(8);
  const showMore = () => {
    let newValue = maxItems + 5;
    if (newValue > props.challengeList.length) {
      setMaxItems(props.challengeList.length);
    } else {
      setMaxItems(newValue);
    }
  };
  const showLess = () => {
    let newValue = maxItems - 5;
    if (newValue < 0) {
      setMaxItems(0);
    } else {
      setMaxItems(newValue);
    }
  };
  return (
    <div className="challenge-table">
      <div className="challenges-table header">
        <div className="ct-col1">Title</div>
        <div className="ct-col2">Programming Language</div>
        <div className="ct-col3">Difficulty</div>
        <div className="ct-col4">Date Completed</div>
      </div>
      {props.challengeList.slice(0, maxItems).map(item => (
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
      <button onClick={() => showMore()}>Show More</button>
      <button onClick={() => showLess()}>Show Less</button>
    </div>
  );
};

export default ChallengesTable;
