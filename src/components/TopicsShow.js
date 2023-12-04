import React from 'react';
import { useParams } from 'react-router-dom';

const content = require("../data/content.json");

// Example data. Replace this with actual data fetching logic.

function TopicsShow() {
  let { id, topicId } = useParams();
  const samples = content[id][topicId] || [];

  console.log(samples);

  return (
    <div>
      <h1>Topic Details: {topicId}</h1>
      {samples.codeDescriptionPairs.map((sample, index) => (
        <div key={index} style={{ display: 'flex', marginBottom: '20px' }}>
          <div style={{ flex: 1, marginRight: '10px', background: '#f0f0f0', padding: '10px' }}>
            <pre>{sample.code}</pre>
          </div>
          <div style={{ flex: 1, background: '#f7f7f7', padding: '10px' }}>
            <p>{sample.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TopicsShow;
