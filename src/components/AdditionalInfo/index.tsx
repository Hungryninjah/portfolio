import React, { useState } from 'react';
import { UnmountClosed } from 'react-collapse';
import './AdditionalInfo.css';

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const AdditionalInfo = (props: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className="additional-info">
      <div className="additional-info-header">
        <button onClick={() => toggleVisibility()} className="additional-info-btn">
          {!isVisible ? 'Show Additional Information' : 'Hide Additional Information'}
        </button>
      </div>
      <div className="additional-info-text">
        <UnmountClosed isOpened={isVisible}>{props.children}</UnmountClosed>
      </div>
    </div>
  );
};

export default AdditionalInfo;
