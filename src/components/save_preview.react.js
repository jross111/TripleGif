import React from 'react';
import { Card, Button, CardTitle, CardText, ButtonGroup } from 'reactstrap';

const SavePreview = (props) => {
  return (
    <div>
    <ButtonGroup size="lg">
      <Button>Preview</Button>
      <Button>Save</Button>
    </ButtonGroup>
    </div>
  );
};

export default SavePreview;
