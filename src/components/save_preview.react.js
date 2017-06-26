import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

const SavePreview = (props) => {
  return (
    <div>
      <Card block inverse color="primary">

        <Button color="secondary">Preview</Button>
        <Button color="secondary">Save</Button>
      </Card>
    </div>
  );
};

export default SavePreview;
