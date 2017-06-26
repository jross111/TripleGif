import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App.react.js';
import registerServiceWorker from './registerServiceWorker';
import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
