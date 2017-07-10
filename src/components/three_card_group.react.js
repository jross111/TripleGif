import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBlock, CardGroup, CardFooter, Col, Row } from 'reactstrap';
 import Search from './search.react.js'
 import '../styles/three_card_group.css';


const ThreeCardGroup = (props) => {
  const btn ={backgroundColor: '#23C8DE', border: 0};
  return (


    <CardGroup>
    <Col xs="12" md="12" sm="12" lg="4" >
      <Card>
      <Search onTermChange={props.onTermChange} number={"images_1"} term_number={"term_1"} shuffle_number={"shuffle_1"} term={props.term_1} blankTerm={props.blankTerm} initialLoad={props.initialLoad} onShuffle={props.onShuffle}/>
        <CardImg top width="100%" className="card_image" src={"https://media3.giphy.com/media/" + props.images.images_1[`${props.shuffle_1}`] + "/200_d.gif"} alt="Card image cap 1" />
      </Card>
        </Col>

        <Col xs="12" md="12" sm="12" lg="4">
      <Card>
      <Search onTermChange={props.onTermChange} number={"images_2"} term_number={"term_2"} shuffle_number={"shuffle_2"} term={props.term_2} blankTerm={props.blankTerm} initialLoad={props.initialLoad} onShuffle={props.onShuffle} />


        <CardImg top width="100%" className="card_image" src={"https://media3.giphy.com/media/" + props.images.images_2[`${props.shuffle_2}`] + "/200_d.gif"} alt="Card image cap 2" />
      </Card>

      </Col>
      <Col xs="12" md="12" sm="12" lg="4">
      <Card>
      <Search onTermChange={props.onTermChange} number={"images_3"} term_number={"term_3"} shuffle_number={"shuffle_3"} term={props.term_3} blankTerm={props.blankTerm} initialLoad={props.initialLoad} onShuffle={props.onShuffle}/>
        <CardImg top width="100%" className="card_image" src={"https://media3.giphy.com/media/" + props.images.images_3[`${props.shuffle_3}`] + "/200_d.gif"} alt="Card image cap 3" />



      </Card>
    </Col>
    </CardGroup>

  );
};

export default ThreeCardGroup;
