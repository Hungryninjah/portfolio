import React from 'react';
import ChallengesTable from './ChallengesTable';
import hackerrankList from './coding_challenges/hackerrank_list.json';
import projecteulerList from './coding_challenges/projecteuler_list.json';
import './Challenges.css';

const Challenges: React.FC = () => {
  return (
    <main className="challenges">
      <div className="challenges-content-wrap">
        <h1>Coding Challenges</h1>
        <h2>Here are a list of coding challenges I’ve completed</h2>
        <h3>Hackerrank Challenges</h3>
        <ChallengesTable challengeList={hackerrankList} />
        <h3>Project Euler Challenges</h3>
        <ChallengesTable challengeList={projecteulerList} />
      </div>
    </main>
  );
};

export default Challenges;
