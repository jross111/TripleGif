import React from 'react';
import { Form, Input } from 'reactstrap';

export default class UrlField extends React.Component {
  render() {
    return (
      <Form>
        <Input placeholder="generated URL" size="lg" value={`http://localhost:3001/` + `${this.props.url}`} />
      </Form>
    );
  }
}
