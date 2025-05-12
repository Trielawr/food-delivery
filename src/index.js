import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/reboot.css';
import './styles/variables.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles/layout.scss';
import './styles/helpers.scss';
import './index.scss';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
        <React.StrictMode>
          <App />
        </React.StrictMode>
);
