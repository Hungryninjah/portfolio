import React, { useState } from 'react';
import { ReactGithubGist } from 'react-github-gist';

interface Props {
  gistNb: string;
}

const Gist: React.FC<Props> = (props: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  if (isVisible) {
    return (
      <div className="content-wrap">
        <button onClick={() => toggleVisibility()}>{isVisible ? 'Hide' : 'Show'}</button>
        <div className="gist">
          <ReactGithubGist gist={props.gistNb} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="content-wrap">
        <button onClick={() => toggleVisibility()}>{isVisible ? 'Hide' : 'Show'}</button>
      </div>
    );
  }
};

export default Gist;
