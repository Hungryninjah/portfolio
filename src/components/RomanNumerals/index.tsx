import React from 'react';

const RomanNumerals = () => {
  return (
    <main className="roman-numerals-page">
      <div className="content-wrap">
        <h1>Extended Roman Numerals</h1>
        <h2>Assignment Background Information</h2>
        <ul>
          <li>Date completed: 14/07/2019</li>
          <li>Language: Python</li>
          <li>Resuting mark: 80%</li>
        </ul>

        <h2>Assignment Brief Summary</h2>
        <p>
          <strong>Task 1:</strong> Create a command line application that can convert between Roman numerals and
          Hindu-Arabic numbers. The program need only range between 1 and 3999 inclusive.
        </p>
        <p>Task 1 example:</p>
        <p>
          <strong>Task 2:</strong> Extend the application to ask for a key which will then be used instead of Roman
          numerals. The order of characters in the key is important. The key must contain no repeating characters.
        </p>
        <p>Task 2 example:</p>
        <p>
          <strong>Task 3:</strong> Extend the application to convert an input string of characters into the smallest
          possible Hindu-Arabic number. The input string must be in a valid roman numeral format.
        </p>
        <p>Task 3 example:</p>
        <p>
          <strong>Personal Remarks:</strong> The solution shown is 100% my own; no external reference was used. My
          solution was successful in completing task 1 and 2, however it failed some instances of task 3.
        </p>
        <a
          href="https://judemlim.github.io/#/9021_assignment_1.pdf"
          className="external-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Complete assignment brief
        </a>
      </div>
    </main>
  );
};

export default RomanNumerals;
