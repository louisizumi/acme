import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Notice from './components/Notice';
import Navbar from './components/Navbar';

ReactDOM.render(
  <React.StrictMode>
    <Notice />
    <Navbar />
  </React.StrictMode>,
  document.getElementById('root')
);
