import React from 'react';
import Gist from '../Gist';
import PDF from './pdf/9021_Assignment_2.pdf';
import analysisImg from './images/example_analysis.png';
import inputImg from './images/example_input.png';
import polygonsImg from './images/example_polygons.png';

const Polygons = () => {
  // TODO add instructions on how to run code
  return (
    <main className="pattern-finder-page">
      <div className="content-wrap">
        <h1>Polygons</h1>
        <h2>Assignment Background Information</h2>
        <ul>
          <li>Course: 9021 - Principles of Programming</li>
          <li>Date submitted: 11/08/2019</li>
          <li>Languages: Python3, Tex</li>
          <li>Resulting mark: 79%</li>
        </ul>

        <h2>Assignment Brief Summary</h2>
        <p>
          <strong>Task 1:</strong> Create a python class that takes in a text file of 1s and 0s and displays all the
          polygons that can be created from connecting all 1s to one another. Calculate all the properties of each
          polygon found (Area, perimeter, convex, inside of another polygon). Class functions will be called using an
          external program for marking.
        </p>
        <p>
          <strong>Task 2:</strong> Extend the program to output a .tex file, which can then be converted into a pdf that
          displays all the polygons, and colours them according to their relative sizes, larger polygons being darker
          coloured and smaller polygons being lighter coloured.
        </p>
        <p>Example input:</p>
        <img src={inputImg} alt="example-input"></img>
        <p>Example property calculation extract:</p>
        <img src={analysisImg} alt="example-analysis"></img>
        <p>Example pdf image output:</p>
        <img src={polygonsImg} alt="example-polygons"></img>
        <p>
          {' '}
          <a href={PDF} className="external-link" target="_blank" rel="noopener noreferrer">
            Open full assignment brief
          </a>
        </p>
        <h2>Source Code</h2>
        <Gist fileName="Polygons" gistNb="7337534352b2c913ffaaf0d219e09a94" />
      </div>
    </main>
  );
};

export default Polygons;
