import React from 'react';
import briefPdf from './ProjectSpecification.pdf';
import reportPdf from './COMP9417_Report.pdf';
import Gist from '../Gist';

const LatestNews = () => {
  return (
    <main className="latest-news-page">
      <div className="content-wrap">
        <h1>Latest News Classifier</h1>
        <h2>Assignment Background Information</h2>
        <ul>
          <li>Course: COMP9417 - Machine Learning & Data Mining</li>
          <li>Date submitted: 27/04/2020</li>
          <li>Group project of 5 people</li>
          <li>Language: Python</li>
          <li>Resulting mark: 75%</li>
        </ul>
        <h2>Assignment Brief Summary</h2>
        <p>
          <strong>Task:</strong> Using supervised machine learning, develop a model to accurately classify news paper
          articles by topic and recommend the 10 most likely to be accurately classified.
        </p>
        <p>The supervised machine learning methods used in this project by my group was:</p>
        <ul>
          <li>SVM</li>
          <li>Multinomial Naive Bayes</li>
        </ul>
        <a href={briefPdf} className="external-link" target="_blank" rel="noopener noreferrer">
          Open full assignment brief
        </a>
        <h2>Final report</h2>
        <iframe src={reportPdf} width="1000" height="600" />
        <h2>Personal Remarks</h2>
        <p>I was in charge of implementing the SVM model.</p>
        <p>
          This assignment grounded us in fundamental concepts such as &ldquo;hyper-parameter tuning&rdquo;,
          &ldquo;feature selection&rdquo;, &ldquo;over-fitting&rdquo;, and &ldquo;cross-validation&rdquo;
        </p>
        <h2>Source Code</h2>
        <Gist fileName="Linear SVM" gistNb="dca859be105d4e0412a65d0506a19576" />
        <Gist fileName="SVM" gistNb="7a9c00261536d6a04a12fb8fc8920181" />
        <Gist fileName="MNB" gistNb="7469010f6730fb643e14716bbb3a91b2" />
      </div>
    </main>
  );
};

export default LatestNews;
