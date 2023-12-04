import React from "react";
import { useParams } from "react-router-dom";

import "./TopicsShow.css";

const content = require("../data/content.json");
const topics = require("../data/topics.json");

// Example data. Replace this with actual data fetching logic.

function TopicsShow() {
  let { id, topicId } = useParams();
  const samples = content[id][topicId] || [];

  const topic = topics[id].find((t) => t.id === Number(topicId));
  const links = topic.links || [];
  const exercises = topic.exercises || [];

  return (
    <div>
      <h1>Topic: {topic.title}</h1>
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
        <h1>External Links</h1>
        {links.length === 0 ? (
          <p className="no-links">No links for this topic</p>
        ) : (
          <ul>
            {links.map((link, index) => (
              <li key={index}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="exercises-container">
        <h2 className="exercises-heading">Exercises</h2>
        <div className="exercise-card">
          {exercises.map((repo, index) => (
            <div key={index} className="exercise-item">
              <a
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="exercise-link"
              >
                {repo}
              </a>
              {/* Include additional repo details if needed */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopicsShow;
