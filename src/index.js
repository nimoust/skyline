import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Lato:wght@400&display=swap';
link.rel = 'stylesheet';

document.head.appendChild(link);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

