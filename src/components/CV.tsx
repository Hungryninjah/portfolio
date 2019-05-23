import React from 'react';

const CV: React.FC = () => (
  <main className="cv center">
    <h1>CV</h1>
    <iframe src="https://drive.google.com/file/d/16fMzedXcrUWtGPhBHXp4EZjvtBwNEAqW/preview" width="800" height="600" />
    <br />
    <a href="https://drive.google.com/file/d/16fMzedXcrUWtGPhBHXp4EZjvtBwNEAqW/view" className="external-link">
      Open PDF for download
    </a>
  </main>
);

export default CV;
