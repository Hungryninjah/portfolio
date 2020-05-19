import React from 'react';
import './Log.css';

interface Props {
  event: string;
  description: string;
  date: string;
}

const LogContents: React.FC<Props> = (props: Props) => {
  return (
    <div>
      <div className="log-table">
        <div className="lt-col1">{props.event}</div>
        <div className="lt-col2">{props.description}</div>
        <div className="lt-col3">{props.date}</div>
      </div>
    </div>
  );
};
export default LogContents;
