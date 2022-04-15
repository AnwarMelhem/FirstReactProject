import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import 'C:/Users/anwar/Desktop/Full-Stack-2/FrontEND/react/REACT-PROJECT/npxs-project/node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'C:/Users/anwar/Desktop/Full-Stack-2/FrontEND/react/REACT-PROJECT/npxs-project/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css'
import './index.css';
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();