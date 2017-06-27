import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBlock, CardGroup, CardFooter } from 'reactstrap';
 import Search from './search.react.js'
 import '../styles/three_card_group.css';

const ThreeCardGroup = (props) => {
  return (
    <CardGroup>

      <Card>
      <Search />
        <CardImg top width="100%" src={"https://media.giphy.com/media/" + props.images[0] + "/giphy.gif"} alt="Card image cap 1" />
        <CardBlock/>
        <CardFooter className="card-footer">
        <Button color="primary" size="lg" block >Shuffle</Button>

        </CardFooter>
      </Card>
      <Card>
      <Search />
        <CardImg top width="100%" src={"https://media.giphy.com/media/" + props.images[1] + "/giphy.gif"} alt="Card image cap 2" />

        <CardBlock>
        </CardBlock>
        <CardFooter className="card-footer">
        <Button color="primary" size="lg" block >Shuffle</Button>

        </CardFooter>
      </Card>
      <Card>
      <Search />
        <CardImg top width="100%" src={"https://media.giphy.com/media/" + props.images[2] + "/giphy.gif"} alt="Card image cap 3" />


        <CardFooter className="card-footer">
        <Button  color="primary" size="lg" block>Shuffle</Button>

        </CardFooter>
      </Card>
    </CardGroup>
  );
};

export default ThreeCardGroup;
