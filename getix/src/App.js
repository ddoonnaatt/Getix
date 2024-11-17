import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ContactPage from './components/ContactPage';
import ImprintPage from './components/ImprintPage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/imprint" element={<ImprintPage />} />
    </Routes>
  </Router>
);

export default App;
