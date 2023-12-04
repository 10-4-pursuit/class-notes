import React from 'react';
import { Link } from 'react-router-dom';

// Example data structure for skillsets
const skillsets = [
  { id: 1, title: 'JavaScript Fundamentals', icon: 'icon1.png' },
  { id: 2, title: 'HTML/CSS', icon: 'icon2.png' },
  { id: 3, title: 'React', icon: 'icon3.png' }
  // ... other skillsets
];

function SkillSetsIndex() {
  return (
    <div>
      <h1>Skillsets</h1>
      <ul>
        {skillsets.map(skillset => (
          <li key={skillset.id}>
            <Link to={`/skillsets/${skillset.id}/topics`}>
              <img src={skillset.icon} alt={skillset.title} />
              <span>{skillset.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SkillSetsIndex;
