import React from 'react';
import Gist from '../Gist';

// For some reason my typescript settings read the line below as a module instead as a pdf,
// so I've decided to make this a javascript flie for the time being until I can solve the problem
import Pdf from './pdf/9021_assignment_1.pdf';
import task1Img from './images/task1.png';
import task2Img from './images/task2.png';
import task3Img from './images/task3.png';

const RomanNumerals = () => {
  // TODO add instructions on how to run code??
  return (
    <main className="roman-numerals-page">
      <div className="content-wrap">
        <h1>Extended Roman Numerals</h1>
        <h2>Assignment Background Information</h2>
        <ul>
          <li>Course: COMP9021 - Principles of Programming</li>
          <li>Date submitted: 14/07/2019</li>
          <li>Language: Python3</li>
          <li>Resulting mark: 80%</li>
        </ul>

        <h2>Assignment Brief Summary</h2>
        <p>
          <strong>Task 1:</strong> Create a command line application that can convert between Roman numerals and
          Hindu-Arabic numbers. The program need only range between 1 and 3999 inclusive.
        </p>
        <p>Task 1 example:</p>
        <img src={task1Img} alt="task1-example"></img>
        <p>
          <strong>Task 2:</strong> Extend the application to ask for a key which will then be used instead of Roman
          numerals. The order of characters in the key is important. The key must contain no repeating characters.
        </p>
        <p>Task 2 example:</p>
        <img src={task2Img} alt="task2-example"></img>
        <p>
          <strong>Task 3:</strong> Extend the application to convert an input string of characters into the smallest
          possible Hindu-Arabic number and return the key it uses to produce the number. The input string must have a
          valid roman numeral format.
        </p>
        <p>Task 3 example:</p>
        <img src={task3Img} alt="task3-example"></img>
        <p>
          {' '}
          <a href={Pdf} className="external-link" target="_blank" rel="noopener noreferrer">
            Open full assignment brief
          </a>
        </p>
        <h2>Personal Remarks</h2>
        <p>
          The solution shown is 100% my own; no external reference was used. My solution was successful in completing
          task 1 and 2, however it failed some instances of task 3.
        </p>
        <h2>Source Code</h2>
        <Gist fileName="Extended Roman Numerals" gistNb="2788d5c863c68e309a88a56b3c9c0771" />
      </div>
    </main>
  );
};

export default RomanNumerals;
