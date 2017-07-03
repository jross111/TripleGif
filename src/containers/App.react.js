import React, { Component } from 'react';
import '../styles/App.css';
import { Container, Row, Col, CardDeck} from 'reactstrap';
import {Switch, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import {BrowserRouter as Router} from 'react-router-dom'


import BoilerPlate from '../components/boilerplate.react.js'
import NavBar from '../components/navbar.react.js'
import SavePreview from '../components/save_preview.react.js'
import Search from '../components/search.react.js'
import UrlField from '../components/url_field.react.js'
import ThreeCardGroup from "../components/three_card_group.react.js"
import ShowPage from "../components/show.react.js"
import ShowPageSaved from "../components/show_saved.react.js"
import {fetchGifs} from "../adapters/index.react.js"
import {postPhrase} from "../adapters/index.react.js"
import {fetchPhrase} from "../adapters/index.react.js"


class App extends Component {
  constructor(){
    super()
      this.state = {
        images:{
          images_1: ["26AHIbtfGWCi2Q2C4"],
          images_2: ["3oKIPAGZzx2PY1wYjC"],
          images_3: ["iNJmdpZ8gp5sI"]
        },

          shuffle_1: 0,
          shuffle_2: 0,
          shuffle_3: 0,
          term_1: "three",
          term_2: "word",
          term_3: "fraiser",
          gif_1: "iF3M9gPPCdulq",
          gif_2: "iF3M9gPPCdulq",
          gif_3: "iF3M9gPPCdulq",
          url: ""
      }
      this.mainPage = this.mainPage.bind(this)
      this.showPage = this.showPage.bind(this)
      this.showPageSaved = this.showPageSaved.bind(this)
  }




  createPhrase(){
    let word_1 = {term:this.state.term_1, gif: this.state.images.images_1[this.state.shuffle_1]}
    let word_2 = {term:this.state.term_2, gif: this.state.images.images_2[this.state.shuffle_2]}
    let word_3 = {term:this.state.term_3, gif: this.state.images.images_3[this.state.shuffle_3]}
    postPhrase(word_1, word_2, word_3)
    .then(response => this.setState({url: `http://localhost:3001/show/` + `${response.hash_token}`}))
  }

handlePhraseFetch(url_token){
  fetchPhrase(url_token)
  .then(res => {this.setState(res)})
  .then(this.showPage())




}


  handleTermChange(term, number, term_number, shuffle_num) {
    fetchGifs(term, number, term_number)
    .then(gifs => {return gifs.data.map( gifObj => gifObj.id )})
    .then( gifObjIds => {this.setState( Object.assign({},this.state,{images:{...this.state.images,[number]:gifObjIds}}) )} )
    .then(this.setState({[term_number]: term}))
    .then(this.setState({[shuffle_num]: 0}))
    .then(this.setState({url: ""}))
  }

  handleBlankTerm(term, number, term_number){
    this.setState( Object.assign({},this.state,{images:{...this.state.images,[number]:["iF3M9gPPCdulq"]}}) )
    this.setState({[term_number]: term})
  }


  handlePreview = () => {
    this.props.history.push("/show!")

    }


  handleShuffle = (shuffle) => {
    var current_shuffle = this.state[shuffle]
    this.setState( Object.assign({},this.state,{...this.state,[shuffle]: current_shuffle + 1}) )
    this.setState({url: ""})
   }

  mainPage(){
       return(
      <div>
         <Row>
         <Col xs="12" md="12" sm="12"> <NavBar/> </Col>
         </Row>
         <ThreeCardGroup shuffle_1={this.state.shuffle_1} shuffle_2={this.state.shuffle_2} shuffle_3={this.state.shuffle_3} images={this.state.images} onTermChange={this.handleTermChange.bind(this)} onShuffle={this.handleShuffle.bind(this)} term_1={this.state.term_1} term_2={this.state.term_2} term_3={this.state.term_3} blankTerm={this.handleBlankTerm.bind(this)}/>
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
        <Router>
         <ShowPage theme_term_1={this.state.theme_term_1} theme_term_2={this.state.theme_term_2} theme_term_3={this.state.theme_term_3} theme_image_1={this.state.theme_image_1} theme_image_2={this.state.theme_image_2} theme_image_3={this.state.theme_image_3} images={this.state.images} shuffle_1={this.state.shuffle_1} shuffle_2={this.state.shuffle_2} shuffle_3={this.state.shuffle_3} term_1={this.state.term_1} term_2={this.state.term_2} term_3={this.state.term_3} fetchPhrase={this.handlePhraseFetch.bind(this)}/>
        </Router>
       )
     }

   showPageSaved(){
        return(
          <Router>
          <ShowPageSaved images_1={this.state.gif_1} images_2={this.state.gif_2} images_3={this.state.gif_3} term_1={this.state.term_1} term_2={this.state.term_2} term_3={this.state.term_3} fetchPhrase={this.handlePhraseFetch.bind(this)}/>
          </Router>
        )
      }


  render() {
    return (
    <div>
        <Route exact path='/show!' render={this.showPage} />
        <Route path='/show/' render={this.showPageSaved} />
      <Container>
        <Route exact path='/' render={this.mainPage} />
      </Container>
    </div>
    );
  }
}

export default App;
