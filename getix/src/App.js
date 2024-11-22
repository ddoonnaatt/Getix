import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ContactPage from './components/ContactPage';
import ImprintPage from './components/ImprintPage';
import LoginPage from './components/LoginPage'
import EventDetails from './components/EventDetails';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/imprint" element={<ImprintPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/event/:eventId" element={<EventDetails />} />
    </Routes>
  </Router>
);

export default App;
