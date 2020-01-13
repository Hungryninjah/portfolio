import React, { useState } from 'react';
import { ReactGithubGist } from 'react-github-gist';
import './Gist.css';

interface Props {
  fileName: string;
  gistNb: string;
}

const Gist: React.FC<Props> = (props: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  if (isVisible) {
    return (
      <div>
        <div className="gist-table">
          <div className="gt-col1">{props.fileName}</div>
          <button className="gt-col2" onClick={() => toggleVisibility()}>
            {isVisible ? 'Collapse' : 'Show'}
          </button>
        </div>
        <div className="gist">
          <ReactGithubGist gist={props.gistNb} />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="gist-table">
          <div className="gt-col1">{props.fileName}</div>
          <button className="gt-col2" onClick={() => toggleVisibility()}>
            {isVisible ? 'Collapse' : 'Show'}
          </button>
        </div>
      </div>
    );
  }
};

export default Gist;
