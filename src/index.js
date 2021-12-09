import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hero from './components/Hero';
import Main from './components/Main';

ReactDOM.render(
  <React.StrictMode>
    <Hero />
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);
