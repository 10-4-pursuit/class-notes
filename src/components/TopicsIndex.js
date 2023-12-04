import React from 'react';
import { useParams, Link } from 'react-router-dom';

const topicData = require("../data/topics.json");

// Example function to fetch topics based on skillset ID
// In a real app, this could be an API call
const fetchTopicsForSkillset = (skillsetId) => {
  // Dummy data; replace with actual data fetching logic



  return topicData[skillsetId] || [];
};

function TopicsIndex() {
  let { id } = useParams();
  const topics = fetchTopicsForSkillset(id);

  return (
    <div>
      <h1>Topics for Skillset {id}</h1>
      <ul>
        {topics.map(topic => (
          <li key={topic.id}>
            <Link to={`/skillsets/${id}/topics/${topic.id}`}>
              {topic.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TopicsIndex;
