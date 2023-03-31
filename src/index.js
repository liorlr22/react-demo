import React from 'react';
import ReactDOM from 'react-dom/client';
import Card from './Card.js';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Card name={"lior"} age={"20"} />
    <Card name={"lior"} age={"20"} />
    <Card name={"lior"} age={"20"} />
  </div>
);
