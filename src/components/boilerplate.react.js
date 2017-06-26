import React, { Component } from 'react';
import logo from '../assets/images/logo.svg';
import '../styles/boilerplate.css';

class BoilerPlate extends Component {
  render() {
    return (
      <div className="BoilerPlate">
        <div className="BoilerPlate-header">
          <img src={logo} className="BoilerPlate-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="BoilerPlate-intro">
          To get started, edit <code>src/components/BoilerPlate.react.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default BoilerPlate;
