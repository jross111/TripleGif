import React from 'react';
import { Form, Input } from 'reactstrap';

export default class ShowPage extends React.Component {
  render() {
    return (
      <h1>
        Show Page {this.props.term_1}
      </h1>
    );
  }
}
