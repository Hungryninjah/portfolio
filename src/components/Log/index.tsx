import React from 'react';
import './Log.css';
import LogContents from './LogContents';

interface Entry {
  event: string;
  description: string;
  date: string;
  key: number;
}

interface Props {
  entries: Entry[];
}

const Log: React.FC<Props> = (props: Props) => {
  return (
    <div className="log">
      <div className="log-table header">
        <div className="lt-col1">Event</div>
        <div className="lt-col2">Description</div>
        <div className="lt-col3">Date</div>
      </div>
      {props.entries.map(item => (
        <LogContents event={item.event} description={item.description} date={item.date} key={item.key} />
      ))}
    </div>
  );
};

export default Log;
