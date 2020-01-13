import React from 'react';
import BriefPdf from './9024_Assignment.pdf';
import Gist from '../Gist';
import inputImg from './images/input.png';
import outputImg from './images/output.png';

const TripPlanner = () => {
  return (
    <main className="trip-planner-page">
      <div className="content-wrap">
        <h1>Trip Planner</h1>
        <h2>Assignment Background Information</h2>
        <ul>
          <li>Course: COMP9024 - Data Structures and Algorithms</li>
          <li>Date submitted: 19/11/2019</li>
          <li>Language: C11</li>
          <li>Resulting mark: 98%</li>
        </ul>
        <h2>Assignment Brief Summary</h2>
        <p>
          <strong>Task:</strong> Create a command line C program that takes in existing train schedules and plans the
          optimal route when given a start station and time, and an end station and time. The program must suggest a
          solution that departs as late as possible and arrives as early as possible if choosing between two routes that
          have similar start times.
        </p>
        <p>Example Input:</p>
        <img src={inputImg} alt="example-input"></img>
        <p>Example Output:</p>
        <img src={outputImg} alt="example-output"></img>
        <p>
          <a href={BriefPdf} className="external-link" target="_blank" rel="noopener noreferrer">
            Open full assignment brief
          </a>
        </p>
        <h2>Personal Remarks</h2>
        <p>
          The program relies on existing data structures. The data structures used were based on programs in the course.
          Small changes were made to the data structures to suit the program.
        </p>
        <h2>Source Code</h2>
        <h4>Main Program File</h4>
        <Gist fileName="myTrain.c" gistNb="47456506c9c95128a017424e33a2a113" />
        <h4>Supporting Program Files</h4>
        <Gist fileName="queue.c" gistNb="922bd92967ff5931021928258c0736f6" />
        <Gist fileName="queue.h" gistNb="247a5370bbf89d3bc58c1055de913f5a" />
        <Gist fileName="stack.c" gistNb="b756debbbf6dcfa338da95b96a035d7c" />
        <Gist fileName="stack.h" gistNb="9fa8b40f8011b259004e56ddf4184bfa" />
        <Gist fileName="WGraph.c" gistNb="81c5c7857f5f1c2fe167e8fed6abc9ba" />
        <Gist fileName="WGraph.h" gistNb="38d98023464dce2c562018ba0427b818" />
        <Gist fileName="Makefile" gistNb="917a6c1de0bc2d07ee99a4f1bc14679f" />
      </div>
    </main>
  );
};

export default TripPlanner;
