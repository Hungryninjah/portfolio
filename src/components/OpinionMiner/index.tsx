import React from 'react';
import Gist from '../Gist';
import BriefPdf from './9414_Assignment_2.pdf';
import ReportPdf from './report.pdf';

const OpinionMiner = () => {
  return (
    <main className="opinion-miner-page">
      <div className="content-wrap">
        <h1>Opinion Miner</h1>
        <h2>Assignment Background Information</h2>
        <ul>
          <li>Course: COMP9414 - Artificial Intelligence</li>
          <li>Date submitted: 09/08/2019</li>
          <li>Language: Python3</li>
          <li>Resulting mark: 98%</li>
        </ul>
        <h2>Assignment Brief Summary</h2>
        <p>
          <strong>Task:</strong> Using supervised machine learning methods create models that predict the sentiment
          (positive, negative, neutral) and topic of a tweet (out of a list of 20). From experimental observation and
          adjusting learning parameters, create your own model to submit.
        </p>
        <p>The supervised machine learning methods used were:</p>
        <ul>
          <li>Decision Trees</li>
          <li>Bernoulli Naive Bayes</li>
          <li>Multinomial Naive Bayes</li>
        </ul>
        <a href={BriefPdf} className="external-link" target="_blank" rel="noopener noreferrer">
          Open full assignment brief
        </a>
        <h2>Personal Remarks</h2>
        <p>
          This markers tested to see if we used the supervised machine learning methods correctly by comparing our
          models predictions to the Course Coordinator&rsquo;s. There was also a test to display our understanding of
          the learning methods and the justification behind our original model through report writing.
        </p>
        <p>
          The implementation of the supervised learning methods were already provided by{' '}
          <a
            href={'https://scikit-learn.org/stable/'}
            className="external-link"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
          scikit-learn
          <a />. Ensuring we correctly preprocessed the tweets and adjusted the right parameters was the main obstacle.
          Furthermore, most of the coding we had to create was to organise extraction of results since we had to perform
          many tests to justify our conclusions.
        </p>
        <h2>Report</h2>
        <a href={ReportPdf} className="external-link" target="_blank" rel="noopener noreferrer">
          Open report
        </a>
        <h2>Source Code</h2>
        <Gist fileName="Helper Functions" gistNb="ae08dde851a26a7fa3a237e82b65c319" />
        <Gist fileName="Decision Tree Sentiment Analyser" gistNb="8eaf4756330683a8319e0f1ab074808c" />
        <Gist fileName="Decision Tree Topic Analyser" gistNb="5241a15b8933954dbf22c23aea5cc28e" />
        <Gist fileName="Bernoulli Naive Bayes Sentiment Analyser" gistNb="d5912b2e40614530b260b4703dc03cc9" />
        <Gist fileName="Bernoulli Naive Bayes Topic Analyser" gistNb="18df242d7bb123ae0dbbf5ac940021cb" />
        <Gist fileName="Multinomial Naive Bayes Sentiment Analyser" gistNb="b9750da36cb70142d2fde5dbe7af9bd8" />
        <Gist fileName="Multinomial Naive Bayes Topic Analyser" gistNb="ce1da6ceae68c4caacb44970d34e9f73" />
        <Gist fileName="Proposed Sentiment Analyser" gistNb="c6b1cc83285bd917b8e92d95db5c4cae" />
        <Gist fileName="Proposed Topic Analyser" gistNb="274935fbb7cd8e6d610049509ba8a6c8" />
      </div>
    </main>
  );
};

export default OpinionMiner;
