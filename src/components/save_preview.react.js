import React from 'react';
import { Card, Button, CardTitle, CardText, ButtonGroup, ButtonToolbar, Col } from 'reactstrap';
import '../styles/radio.css';

const SavePreview = (props) => {
  const btn_yellow ={backgroundColor: '#FFDA40', border: 0 };
  const btn_pink ={backgroundColor: '#EA4C89', border: 0 };
  return (

    <div>
  <ButtonGroup>
    <Col xs="12" md="12" sm="12">
      <Button size="lg" color="secondary" style={btn_yellow} onClick={props.showPreview}>Preview </Button>
      <Button size="lg" color="success" style={btn_pink} onClick={props.createPhrase}>Save</Button>
    </Col>
  </ButtonGroup>

    </div>
  );
};

export default SavePreview;
