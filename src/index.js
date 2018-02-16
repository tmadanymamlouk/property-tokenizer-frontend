import ReactDOM from 'react-dom';
import React from 'react';

import App from 'containers/App/App';
import { BrowserRouter } from 'react-router-dom'

import 'index.html';
import './styles/styles.scss';

ReactDOM.render((
    <BrowserRouter >
        <App />
    </BrowserRouter >
), document.getElementById('root'));
