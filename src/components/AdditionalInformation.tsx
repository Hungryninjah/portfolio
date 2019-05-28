import React, { useState } from 'react';
import { UnmountClosed } from 'react-collapse';

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const AdditionalInformation = (props: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className="learning-objectives">
      <button onClick={() => toggleVisibility()}>
        {!isVisible ? 'Show Additional Information' : 'Hide Additional Information'}
      </button>
      <UnmountClosed isOpened={isVisible}>{props.children}</UnmountClosed>
    </div>
  );
};

export default AdditionalInformation;
