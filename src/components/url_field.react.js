import React from 'react';
import { Form, Input } from 'reactstrap';

export default class UrlField extends React.Component {
  render() {
    return (
      <Form>
        <Input placeholder="generated URL" size="lg" />
      </Form>
    );
  }
}
