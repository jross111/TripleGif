import React from 'react';
import { Card, CardImg, CardText, CardBlock, CardTitle, CardSubtitle, Button, Row, Col } from 'reactstrap';


export default (props) => {
  return (
    <div>

    <Row>
      <Col>
      <div>
            <Card>
              <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
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
