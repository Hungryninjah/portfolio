import React, { useState } from 'react';
import './Log.css';
import LogContents from './LogContents';

interface Entry {
  event: string;
  page: string;
  description: string;
  date: string;
  key: number;
}

interface Props {
  entries: Entry[];
}

const Log: React.FC<Props> = (props: Props) => {
  const [maxItems, setMaxItems] = useState<number>(5);
  const showMore = () => {
    let newValue = maxItems + 5;
    if (newValue > props.entries.length) {
      setMaxItems(props.entries.length);
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
    <div className="log-component">
      <div className="log-table header">
        <div className="lt-col1">Page</div>
        <div className="lt-col2">Event</div>
        <div className="lt-col3">Description</div>
        <div className="lt-col4">Date</div>
      </div>
      {props.entries.slice(0, maxItems).map(item => (
        <LogContents
          event={item.event}
          description={item.description}
          date={item.date}
          key={item.key}
          page={item.page}
        />
      ))}
      <button onClick={() => showMore()}>Show More</button>
      <button onClick={() => showLess()}>Show Less</button>
    </div>
  );
};

export default Log;
