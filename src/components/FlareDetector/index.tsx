import React from 'react';
import Gist from '../Gist';
import './FlareDetector.css';
import percentageOrgImg from './Images/example1_1.JPG';
import percentageBinImg from './Images/example1_2.JPG';
import ellipticalOrgImg from './Images/example2_1.JPG';
import ellipticalBinImg from './Images/example2_2.JPG';
import raysOrgImg from './Images/example3_1.JPG';
import raysBinImg from './Images/example3_2.JPG';
import raysFinalImg from './Images/example3_3.JPG';
import reportPdf from './flare_detector_report.pdf';

const FlareDetector = () => {
  return (
    <main className="flare-detector-page">
      <div className="content-wrap">
        <h1>Lens Flare Detector</h1>
        <h2>Problem Scope</h2>
        <p>
          Robotics are used to inspect infrastructure in places that are hard for people to reach. In this problem, a
          manually controlled robotic drone takes pictures of marine walls for later inspection of defects. Lens flaring
          on cameras inhibits visibility of defects and so it would be beneficial to automate the notification and
          removal of such images. Produce a program that can tag whether or not an image is experienceing lens
          flaring.
        </p>
        <h2>Proposed Solution</h2>
        <strong>
          <a
            href="https://github.com/judemlim/Flare-Detection"
            className="external-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Link to project&lsquo;s github repo
          </a>
        </strong>
        <p>
          A python program takes in an image, converts it into a binary black and white image and searches for patterns
          that are expected from lens flaring. These patterns are;
        </p>
        <ul>
          <li> Case 1 - Light percentage</li>
          <li> Case 2 - Clear elliptical shapes </li>
          <li> Case 3 - Angled rays of light </li>
        </ul>
        <a href={reportPdf} className="external-link" target="_blank" rel="noopener noreferrer">
          Detailed explanation of implementation here
        </a>
        <p>Examples of these implementations visually are shown below with a relevant image with the feature </p>
        <h3>Case 1 - Light percentage</h3>
        <img src={percentageOrgImg} alt="flare-proportion" className="example-image"></img>
        <img src={percentageBinImg} alt="flare-proportion-bin" className="example-image"></img>
        <h3>Case 2 - Clear elliptical shapes</h3>
        <img src={ellipticalOrgImg} alt="flare-elliptical" className="example-image"></img>
        <img src={ellipticalBinImg} alt="flare-elliptical-bin" className="example-image"></img>
        <h3>Case 3 - Angled rays of light</h3>
        <img src={raysOrgImg} alt="flare-ray" className="example-image"></img>
        <img src={raysBinImg} alt="flare-ray-bin" className="example-image"></img>
        <img src={raysFinalImg} alt="flare-ray-final" className="example-image"></img>
        <h2>Limitation of solution</h2>
        <p>
          The solution proposed would not work very well for any other use case; it is expected to only be used for
          tagging images like the ones shown above. Additionally, the implementation for the detection of angled rays of
          light was ad-hoc, whereby it made use of observations seen when using a particular library function and not
          what the library was originally intended for. Additional information is in the &ldquo;Detailed
          explanation&rdquo; link above. Not all lens flaring cases can be detected.
        </p>
        <h2>Source Code</h2>
        <Gist fileName="Flare Detector" gistNb="98c248296adf48883677b1890ce0fc2f" />
      </div>
    </main>
  );
};

export default FlareDetector;
