import React from 'react';
import Gist from '../Gist';
import Pdf from './9414_Assignment_1.pdf';
import inputImg from './images/example_input_file.png';
import outputImg from './images/example_output_file.png';

const Scheduler = () => {
  return (
    <main className="scheduler-page">
      <div className="content-wrap">
        <h1>Scheduler</h1>
        <h2>Assignment Background Information</h2>
        <ul>
          <li>Course: COMP9414 - Artificial Intelligence</li>
          <li>Date submitted: 06/07/2019</li>
          <li>Language: Python3</li>
          <li>Resulting mark: 100%</li>
        </ul>
        <h2>Assignment Brief Summary</h2>
        <p>
          <strong>Task:</strong> Using existing libraries, construct a program that will produce an optimised meeting
          schedule for a hypothetical university (i.e. minimise cost and penalties associated with comprimising on
          meeting schedules). The program must utilise the search, heuristic, arc consistency, and domain splitting
          methods learned during this course. Contraints are restrictions such as:
          <ul>
            <li>Meeting 1 must be on a monday</li>
            <li>Meeting 2 must be in the afternoon and a penalty applies the further away it is from 4pm</li>
            <li>Meeting 1 must be on a different day than meeting 2</li>
            <li>Meeting 3 must be right after Meeting 2</li>
            <li>etc.</li>
          </ul>
        </p>
        <p>Example input:</p>
        <img src={inputImg} alt="input-example"></img>
        <p>Exampe output:</p>
        <img src={outputImg} alt="output-example"></img>
        <p>
          {' '}
          <a href={Pdf} className="external-link" target="_blank" rel="noopener noreferrer">
            Open full assignment brief
          </a>
        </p>
        <h2>Personal Remarks</h2>
        The code heavily relies on existing libraries that have already implemented search trees, heuristics, arc
        consistency, and domain splitting seperately. The challenge here was understanding the implementations,
        extracting what we needed, and moulding the existing code into what we wanted. The libraries referenced in the
        source code come from{' '}
        <a href="https://artint.info/AIPython/" className="external-link" target="_blank" rel="noopener noreferrer">
          AI Python by David Poole and Alan Mackworth.
        </a>
        <h2>Source Code</h2>
        <Gist fileName="Scheduler" gistNb="b1a0c8be0f7e76a5b48f0b4f72cecdee" />
      </div>
    </main>
  );
};

export default Scheduler;
