import React from 'react';
import { Card, Button, CardTitle, CardText, ButtonGroup } from 'reactstrap';

const SavePreview = (props) => {
  return (
    <div>
    <ButtonGroup size="lg">
      <Button onClick={props.showPreview}>Preview </Button>
      <Button onClick={props.createPhrase}>Save</Button>
    </ButtonGroup>
    </div>
  );
};

export default SavePreview;
