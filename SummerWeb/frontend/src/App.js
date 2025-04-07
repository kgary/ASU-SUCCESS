import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TutorialPage from './components/TutorialPage';
import IntroPage from './components/IntroPage'; // Assuming the original button is on HomePage

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/tutorial" element={<TutorialPage />} />
      </Routes>
    </Router>
  );
}

export default App;
