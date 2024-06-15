import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import ShoppingPage from './shopping';

const Index = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/shopping" element={<ShoppingPage />} />
    </Routes>
  </Router>
);

export default Index;
