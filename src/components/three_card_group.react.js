import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBlock, CardGroup, CardFooter } from 'reactstrap';
 import Search from './search.react.js'
 import '../styles/three_card_group.css';

const ThreeCardGroup = (props) => {
  return (
    <CardGroup>

      <Card>
      <Search onTermChange={props.onTermChange} number={"images_1"} term_number={"term_1"} shuffle_number={"shuffle_1"} term={props.term_1} blankTerm={props.blankTerm}/>
        <CardImg top width="100%" src={"https://media.giphy.com/media/" + props.images.images_1[`${props.shuffle_1}`] + "/giphy.gif"} alt="Card image cap 1" />
        <CardBlock/>
        <CardFooter className="card-footer">
        <Button onClick={() => props.onShuffle("shuffle_1")} color="primary" size="lg" block >Shuffle</Button>

        </CardFooter>
      </Card>
      <Card>
      <Search onTermChange={props.onTermChange} number={"images_2"} term_number={"term_2"} shuffle_number={"shuffle_2"} term={props.term_2} blankTerm={props.blankTerm}/>
        <CardImg top width="100%" src={"https://media.giphy.com/media/" + props.images.images_2[`${props.shuffle_2}`] + "/giphy.gif"} alt="Card image cap 2" />

        <CardBlock>
        </CardBlock>
        <CardFooter className="card-footer">
        <Button onClick={() => props.onShuffle("shuffle_2")} color="primary" size="lg" block >Shuffle</Button>

        </CardFooter>
      </Card>
      <Card>
      <Search onTermChange={props.onTermChange} number={"images_3"} term_number={"term_3"} shuffle_number={"shuffle_3"} term={props.term_3} blankTerm={props.blankTerm}/>
        <CardImg top width="100%" src={"https://media.giphy.com/media/" + props.images.images_3[`${props.shuffle_3}`] + "/giphy.gif"} alt="Card image cap 3" />


        <CardFooter className="card-footer">
        <Button color="primary" onClick={() => props.onShuffle("shuffle_3")} size="lg" block>Shuffle</Button>

        </CardFooter>
      </Card>
    </CardGroup>
  );
};

export default ThreeCardGroup;
