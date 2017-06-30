import React, { Component } from 'react';
import '../styles/App.css';
import { Container, Row, Col, CardDeck} from 'reactstrap';
import {Switch, Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'


import BoilerPlate from '../components/boilerplate.react.js'
import NavBar from '../components/navbar.react.js'
import SavePreview from '../components/save_preview.react.js'
import Search from '../components/search.react.js'
import UrlField from '../components/url_field.react.js'
import ThreeCardGroup from "../components/three_card_group.react.js"
import ShowPage from "../components/show.react.js"
import {fetchGifs} from "../adapters/index.react.js"
import {postPhrase} from "../adapters/index.react.js"


class App extends Component {
  constructor(){
    super()
      this.state = {
        images:{
          images_1: ["3o7TKwxYkeW0ZvTqsU","fasdfasdf"],
          images_2: ["ikXcqqlSNH2Mw"],
          images_3: ["LLjvtJwvzaTni"]
        },

          shuffle_1: 0,
          shuffle_2: 0,
          shuffle_3: 0,
          term_1: "hello",
          term_2: "hey",
          term_3: "cheese"
      }
      this.mainPage = this.mainPage.bind(this)
      this.showPage = this.showPage.bind(this)
  }

  createPhrase(){
    let word_1 = {term:this.state.term_1, gif: this.state.images.images_1[this.state.shuffle_1]}
    let word_2 = {term:this.state.term_2, gif: this.state.images.images_2[this.state.shuffle_2]}
    let word_3 = {term:this.state.term_3, gif: this.state.images.images_3[this.state.shuffle_3]}
    postPhrase(word_1, word_2, word_3)
    .then(response => this.setState({url: response.hash_token}))
  }


  handleTermChange(term, number, term_number, shuffle_num) {
    fetchGifs(term, number, term_number)
    .then(gifs => {return gifs.data.map( gifObj => gifObj.id )})
    .then( gifObjIds => {console.log(this.state);this.setState( Object.assign({},this.state,{images:{...this.state.images,[number]:gifObjIds}}) );console.log(this.state)} )
    .then(this.setState({[term_number]: term}))
    .then(this.setState({[shuffle_num]: 0}))
  }


  handlePreview = () => {
    this.props.history.push("/show")
  }


  handleShuffle = (shuffle) => {
       this.setState(prevState => ({
         [shuffle]: Math.floor(Math.random() * 24) + 1
       }));
     }

  mainPage(){
       return(
         <div>
         <ThreeCardGroup shuffle_1={this.state.shuffle_1} shuffle_2={this.state.shuffle_2} shuffle_3={this.state.shuffle_3} images={this.state.images} onTermChange={this.handleTermChange.bind(this)} onShuffle={this.handleShuffle.bind(this)}/>
         <Row>
           <Col  xs="12" md="4" sm="12">  </Col>
           <Col   xs="12" md="4" sm="12">< SavePreview showPreview={this.handlePreview.bind(this)}  createPhrase={this.createPhrase.bind(this)} /><UrlField url={this.state.url}/> </Col>
           <Col  xs="12" md="4" sm="12"> </Col>
         </Row>
         </div>
       )
     }

  showPage(){
       return(
         <ShowPage images={this.state.images} shuffle_1={this.state.shuffle_1} shuffle_2={this.state.shuffle_2} shuffle_3={this.state.shuffle_3} term_1={this.state.term_1} term_2={this.state.term_2} term_3={this.state.term_3}/>
       )
     }


  render() {
    return (

      <div>
        <Route exact path='/show' render={this.showPage} />

    <Container>

        <Row>
          <Col> < NavBar /> </Col>
        </Row>
        <Row>


        <Route exact path='/' render={this.mainPage} />

        </Row>


    </Container>
    </div>


    );
  }
}

export default App;
