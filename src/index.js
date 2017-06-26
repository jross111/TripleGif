import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App.react.js';
import registerServiceWorker from './registerServiceWorker';
import './styles/index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
