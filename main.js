import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/components/APP/App';
import './assets/css/style.css';
const render = () => (ReactDOM.render(
    <App render={render} />,
    document.getElementById('root')));
render();
