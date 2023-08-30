// CODE = index.js
import './App.css'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'react-toastify/dist/ReactToastify.css';

const root = document.getElementById('root');

// SYNTAX = ReactDOM.render(element, container, [callback]);
ReactDOM.render(<App />, root);  // callback/any function not used it is optional
