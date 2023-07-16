import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import ReactDOM from 'react-dom/client';
import './index.css';

import WeatherMain from './WeatherMain';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='container'>
    <WeatherMain city="Toronto" />
    </div>
    
    <div className='codeLink'>
    <span><a href='https://github.com/Melissa1825/react-weather-app' target='_blank' rel='noreferrer'>Open-source code</a>, by Melissa</span>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


