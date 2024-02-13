import React from 'react';
import { Link } from 'react-router-dom';
import skillsets from '../data/skillsets.json';

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
