import React from 'react';
import { Form, Input } from 'reactstrap';

export default class UrlField extends React.Component {
  render() {
    return (
      <Form>
        <Input readOnly="true" placeholder="generated URL" size="lg" value={`http://localhost:3001/show/` + `${this.props.url}`} />
      </Form>
    );
  }
}
