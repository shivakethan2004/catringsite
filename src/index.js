import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';  // Use HashRouter here
import App from './App';

ReactDOM.render(
  <HashRouter>   {/* Wrap the app here with HashRouter */}
    <App />
  </HashRouter>,
  document.getElementById('root')
);
