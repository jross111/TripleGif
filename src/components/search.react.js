import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class Search extends React.Component {
  render() {
    return (
      <Form>
      <FormGroup>
       <Input size="lg" type="search" name="search" id="exampleSearch" placeholder="search placeholder" />
     </FormGroup>
      </Form>
    );
  }
}
