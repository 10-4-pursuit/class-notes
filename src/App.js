import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SkillSetsIndex from './components/SkillSetsIndex';
import TopicsIndex from './components/TopicsIndex';
import TopicsShow from './components/TopicsShow';

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/skillsets" element={<SkillSetsIndex />} />
        <Route path="/skillsets/:id/topics" element={<TopicsIndex />} />
        <Route path="/skillsets/:id/topics/:topicId" element={<TopicsShow />} />
      </Routes>
    </Router>
  );
}

export default App;
