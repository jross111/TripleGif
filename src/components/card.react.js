import React from 'react';
import { Card, CardImg, CardText, CardBlock, CardTitle, CardSubtitle, Button, Row, Col } from 'reactstrap';


export default (props) => {
  return (
    <div>

    <Row>
      <Col>
      <div>
            <Card>
              <CardImg top width="100%" src={"https://media.giphy.com/media/" + props.image + "/giphy.gif"} alt="Card Image" />

              <CardBlock>
                <Button>Button</Button>
              </CardBlock>
            </Card>
          </div>
      </Col>
    </Row>


    </div>
  );
};
