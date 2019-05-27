import React, { useState } from 'react';
import { ReactGithubGist } from 'react-github-gist';
import './Challenges.css';

interface Props {
  title: string;
  language: string;
  gist: string;
  challenge: string;
  dateCompleted: string;
  difficulty: string;
}

const EmbeddedGist: React.FC<Props> = (props: Props) => {
  const [isRender, setIsRender] = useState(false);
  const toggleRender = () => {
    setIsRender(!isRender);
  };

  if (isRender) {
    return (
      <div>
        <div className="challenges-table">
          <div className="ct-col1">{props.title}</div>
          <div className="ct-col2">{props.language}</div>
          <div className="ct-col3">{props.difficulty}</div>
          <div className="ct-col4">{props.dateCompleted}</div>
          <a href={props.challenge} className="ct-col5 external-link" target="_blank" rel="noopener noreferrer">
            Challenge Link
          </a>
          <button className="ct-col6" onClick={() => toggleRender()}>
            {isRender ? 'Collapse' : 'Show'}
          </button>
        </div>
        <div className="gist">
          <ReactGithubGist gist={props.gist.slice(24)} />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="challenges-table">
          <div className="ct-col1">{props.title}</div>
          <div className="ct-col2">{props.language}</div>
          <div className="ct-col3">{props.difficulty}</div>
          <div className="ct-col4">{props.dateCompleted}</div>
          <a href={props.challenge} className="ct-col5 external-link" target="_blank" rel="noopener noreferrer">
            Challenge Link
          </a>
          <button className="ct-col6" onClick={() => toggleRender()}>
            {isRender ? 'Collapse' : 'Show'}
          </button>
        </div>
      </div>
    );
  }
};

export default EmbeddedGist;
