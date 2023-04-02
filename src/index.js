import React from 'react';
import ReactDOM from 'react-dom/client';
import StarSky from 'react-star-sky';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <StarSky/>
  </React.StrictMode>
);

