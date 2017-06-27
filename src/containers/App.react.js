import React, { Component } from 'react';
import '../styles/App.css';
import { Container, Row, Col, CardDeck} from 'reactstrap';


import BoilerPlate from '../components/boilerplate.react.js'
import Card from '../components/card.react.js'
import NavBar from '../components/navbar.react.js'
import SavePreview from '../components/save_preview.react.js'
import Search from '../components/search.react.js'
import UrlField from '../components/url_field.react.js'
import ThreeCardGroup from "../components/three_card_group.react.js"


class App extends Component {

state = {
  images: ["3o7TKwxYkeW0ZvTqsU", "ikXcqqlSNH2Mw", "LLjvtJwvzaTni"]
}



  render() {
    return (
    <Container>
        <Row>
          <Col> < NavBar /> </Col>
        </Row>

        <Row>

          <ThreeCardGroup images={this.state.images} />
        </Row>

        <Row>
          <Col  xs="12" md="4" sm="12">  </Col>
          <Col   xs="12" md="4" sm="12">< SavePreview /><UrlField/> </Col>
          <Col  xs="12" md="4" sm="12"> </Col>
        </Row>

    </Container>



    );
  }
}

export default App;
