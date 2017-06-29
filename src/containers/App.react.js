import React, { Component } from 'react';
import '../styles/App.css';
import { Container, Row, Col, CardDeck} from 'reactstrap';


import BoilerPlate from '../components/boilerplate.react.js'
import NavBar from '../components/navbar.react.js'
import SavePreview from '../components/save_preview.react.js'
import Search from '../components/search.react.js'
import UrlField from '../components/url_field.react.js'
import ThreeCardGroup from "../components/three_card_group.react.js"
import {fetchGifs} from "../adapters/index.react.js"
import {postPhrase} from "../adapters/index.react.js"


class App extends Component {
  constructor(){
    super()
      this.state = {
          images_1: ["3o7TKwxYkeW0ZvTqsU"],
          images_2: ["ikXcqqlSNH2Mw"],
          images_3: ["LLjvtJwvzaTni"],
          shuffle_1: 0,
          shuffle_2: 0,
          shuffle_3: 0,
          term_1: "hello",
          term_2: "hey",
          term_3: "cheese"
      }
  }

  createPhrase(){
    let word_1 = {term:this.state.term_1, gif: this.state.images_1[this.state.shuffle_1]}
    let word_2 = {term:this.state.term_2, gif: this.state.images_2[this.state.shuffle_2]}
    let word_3 = {term:this.state.term_3, gif: this.state.images_3[this.state.shuffle_3]}

    postPhrase(word_1, word_2, word_3)

  }

  handleTermChange(term, number, term_number) {
    fetchGifs(term, number, term_number)
    .then(items=>this.setState({
      [number]: items.data.map(function(a) {return a.id;},)
    }))
    .then(this.setState({[term_number]: term}))
  }





    handleShuffle = (shuffle) => {
       this.setState(prevState => ({
         [shuffle]: Math.floor(Math.random() * 24) + 1
       }));
     }


  render() {
    return (
    <Container>
        <Row>
          <Col> < NavBar /> </Col>
        </Row>

        <Row>
          <ThreeCardGroup shuffle_1={this.state.shuffle_1} shuffle_2={this.state.shuffle_2} shuffle_3={this.state.shuffle_3} images={this.state} onTermChange={this.handleTermChange.bind(this)} onShuffle={this.handleShuffle.bind(this)}/>
        </Row>

        <Row>
          <Col  xs="12" md="4" sm="12">  </Col>
          <Col   xs="12" md="4" sm="12">< SavePreview createPhrase={this.createPhrase.bind(this)} /><UrlField/> </Col>
          <Col  xs="12" md="4" sm="12"> </Col>
        </Row>

    </Container>



    );
  }
}

export default App;
