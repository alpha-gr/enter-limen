import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './home';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Home />
);

reportWebVitals();
