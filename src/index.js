import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import { AppProvider } from './context/AppContext';

ReactDOM.render(
    <AppProvider><App /></AppProvider>,
    document.getElementById('root')
);