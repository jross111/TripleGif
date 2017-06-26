import React, { Component } from 'react';
import '../styles/App.css';
import { Container, Row, Col} from 'reactstrap';


import BoilerPlate from '../components/boilerplate.react.js'
import Card from '../components/card.react.js'
import NavBar from '../components/navbar.react.js'
import SavePreview from '../components/save_preview.react.js'
import Search from '../components/search.react.js'


class App extends Component {
  render() {
    return (
    <Container>
      <Row>
        <Col> < NavBar /> </Col>
      </Row>


        <Row>
          <Col xs="12" md="4" sm="12"> <Search /> < Card /> </Col>
          <Col xs="12" md="4" sm="12"> <Search /> < Card /> </Col>
          <Col xs="12" md="4" sm="12"> <Search /> < Card /> </Col>
        </Row>

        <Row>
          <Col>  </Col>
          <Col xs="12" sm="12" md="6">< SavePreview /> </Col>
          <Col> </Col>
        </Row>

        <Row>

        </Row>
    </Container>



    );
  }
}

export default App;
