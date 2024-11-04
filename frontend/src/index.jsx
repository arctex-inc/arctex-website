import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import ShoppingPage from './shopping';
import ContactPage from './contact';
import CareerPage from './careers';

const Index = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/shopping" element={<ShoppingPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/careers" element={<CareerPage />} />
    </Routes>
  </Router>
);

export default Index;
