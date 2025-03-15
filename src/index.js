import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/reboot.css';
import './styles/variables.css';
import './styles/layout.scss';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
