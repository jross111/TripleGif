import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App.react.js';

import {BrowserRouter as Router, Route} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <Router>
    <Route path="/" component={App} />
  </Router>, document.getElementById('root'));
registerServiceWorker();
