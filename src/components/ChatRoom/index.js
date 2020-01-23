import React from 'react';
import Gist from '../Gist';
import BriefPdf from './9331_Assignment.pdf';
import ReportPdf from './report.pdf';
import example1Img from './images/example1.png';
import example2Img from './images/example2.png';
import example3Img from './images/example3.png';

const ChatRoom = () => {
  return (
    <main className="chat-room-page">
      <div className="content-wrap">
        <h1>Chat Room</h1>
        <h2>Assignment Background Information</h2>
        <ul>
          <li>Course: COMP9331 - Computer Networks and Applications</li>
          <li>Date submitted: 22/11/2019</li>
          <li>Language: Python3</li>
          <li>Resulting mark: 100%</li>
        </ul>
        <h2>Assignment Brief Summary</h2>
        <p>
          <strong>Task:</strong> Create a Python client and server command line chat application. The programs need only
          run on the same machine, and the processes must communicate to each other using TCP. Only libraries from
          &ldquo;The Python Standard Library&rdquo; are allowed to be used.
        </p>
        <p>The client side application include the following functionalities:</p>
        <ul>
          <li>login/logout</li>
          <li>listing who is online</li>
          <li>messaging to online users</li>
          <li>messaging to offline users, who will receive Zthe message when they log in</li>
          <li>blocking (and effects of blocking on other commands)</li>
          <li>peer to peer messaging</li>
          <li>(the rest of the functionality can be read in the full assignment specification)</li>
        </ul>
        <p>Example: (taken from the assignment specification)</p>
        <img src={example1Img} alt="example-1" className="block-image"></img>
        <img src={example2Img} alt="example-2" className="block-image"></img>
        <img src={example3Img} alt="example-3" className="block-image"></img>
        <p>
          <a href={BriefPdf} className="external-link" target="_blank" rel="noopener noreferrer">
            Open full assignment brief
          </a>
        </p>
        <h2>Personal Remarks</h2>
        <p>I did not attempt the extension. I ranked first in this entire course.</p>
        <p>Here is an explanation of my coding design below. This report was also marked.</p>
        <p>
          <a href={ReportPdf} className="external-link" target="_blank" rel="noopener noreferrer">
            Open program design report
          </a>
        </p>
        <h2>Source Code</h2>
        <Gist fileName="client.py" gistNb="5695a3701589b7bf8163c19be349a730" />
        <Gist fileName="server.py" gistNb="4809b34922470c8dea9585340a2ae824" />
        <Gist fileName="interface.py" gistNb="3ee7437f0122fcbfb63616d2b2269155" />
      </div>
    </main>
  );
};

export default ChatRoom;
