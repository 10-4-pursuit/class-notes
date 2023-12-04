import React from 'react';
import { useParams } from 'react-router-dom';

import "./TopicsShow.css";

const content = require("../data/content.json");
const topics = require("../data/topics.json");

// Example data. Replace this with actual data fetching logic.

function TopicsShow() {
  let { id, topicId } = useParams();
  const samples = content[id][topicId] || [];

  const links = samples.links || [];

  return (
    <div>
      <h1>Topic: {topics[id][topicId].title}</h1>
      {samples.codeDescriptionPairs.map((sample, index) => (
        <div key={index} className="code-description-container">
          <div className="code-container">
            <pre>{sample.code}</pre>
          </div>
          <div className="description-container">
            <p>{sample.description}</p>
          </div>
        </div>
      ))}
      <div className="links-container">
        {
          links.length === 0 ? (
            <p className="no-links">No links for this topic</p>
          ) : (
            <ul>
              {links.map((link, index) => (
                <li key={index}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">{link.title}</a>
                </li>
              ))}
            </ul>
          )
        }
      </div>

    </div>
  );
}

export default TopicsShow;
