import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage/index';
import './App.css';

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
}

export default App;