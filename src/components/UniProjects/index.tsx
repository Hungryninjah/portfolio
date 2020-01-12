import React from 'react';
import CardSmall from '../CardSmall';
import romanNumeralImg from './images/roman-numerals.png';
import chatRoomImg from './images/chat-room.png';
import opinionMinerImg from './images/opinion-mining.png';
import patternFinderImg from './images/pattern-finder.png';
import schedulerImg from './images/scheduling.png';
import tripPlannerImg from './images/trip-planner.png';

const UniProjects = () => {
  return (
    <main className="uniprojects-page">
      <div className="small-card-wrap">
        <h1>University Projects</h1>
        <CardSmall imgSrc={chatRoomImg} path="/portfolio/uni-projects/chat-room" title="Chat Room" />
        <CardSmall imgSrc={tripPlannerImg} path="/portfolio/uni-projects/trip-planner" title="Trip Planner" />
        <CardSmall imgSrc={opinionMinerImg} path="/portfolio/uni-projects/opinion-miner" title="Opinion Miner" />
        <CardSmall imgSrc={schedulerImg} path="/portfolio/uni-projects/scheduler" title="Scheduler" />
        <CardSmall imgSrc={patternFinderImg} path="/portfolio/uni-projects/polygons" title="Polygons" />
        <CardSmall imgSrc={romanNumeralImg} path="/portfolio/uni-projects/roman-numerals" title="Roman Numerals" />
      </div>
    </main>
  );
};

export default UniProjects;
