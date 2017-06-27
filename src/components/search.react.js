import React from 'react';
import { Button, Form, FormGroup, Label, InputGroup, InputGroupButton, Input  } from 'reactstrap';

export default class Search extends React.Component {
  render() {
    return (
  <FormGroup>
    <InputGroup>
        <Input size="lg" type="search" name="search" id="exampleSearch" placeholder="search placeholder" />
        <InputGroupButton size="m" color="info">🔍</InputGroupButton>
      </InputGroup>
  </FormGroup>
    );
  }
}
