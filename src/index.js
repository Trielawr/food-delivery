import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/reboot.css';
import './styles/variables.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles/layout.scss';
import './styles/helpers.scss';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
