import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class Search extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleEmail" hidden>Email</Label>
          <Input type="text" name="search" id="search" placeholder="Search" />
        </FormGroup>
      </Form>
    );
  }
}
