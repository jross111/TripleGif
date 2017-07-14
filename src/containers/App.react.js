import React, { Component } from 'react';
import '../styles/App.css';
import { Container, Row, Col} from 'reactstrap';
import {Route} from 'react-router'
import {BrowserRouter as Router} from 'react-router-dom'
import {debounce} from 'throttle-debounce';
import {Link} from 'react-router-dom'

import SavePreview from '../components/save_preview.react.js'
import UrlField from '../components/url_field.react.js'
import ThreeCardGroup from "../components/three_card_group.react.js"
import ShowPage from "../components/show.react.js"
import ShowPageSaved from "../components/show_saved.react.js"
import RadioButtons from "../components/radio_buttons.react.js"
import {fetchGifs} from "../adapters/index.react.js"
import {postPhrase} from "../adapters/index.react.js"
import {fetchPhrase} from "../adapters/index.react.js"
import giphy from '../assets/images/giphy.png'



class App extends Component {
  constructor(){
    super()
      this.state = {
      images:{
        images_1: ["26gR0ojVae5XAPcKA"],
        images_2: ["3o7bufmhtIhZkP4pKE"],
        images_3: ["3o7bu4qAvyxdJtYYFi"]
      },

      words:
      [
        {
          text_theme: "text_1_vanilla",
          gif_theme: "gif_1_vanilla"
        },
        {
          text_theme: "text_2_vanilla",
          gif_theme: "gif_2_vanilla"
        },
        {
          text_theme: "text_3_vanilla",
          gif_theme: "gif_3_vanilla"
        }

      ],
      shuffle_1: 0,
      shuffle_2: 0,
      shuffle_3: 0,
      term_1: "",
      term_2: "",
      term_3: "",
      url: "",
      selectedOption: "vanilla"

      }
      this.mainPage = this.mainPage.bind(this)
      this.showPage = this.showPage.bind(this)
      this.showPageSaved = this.showPageSaved.bind(this)
      this.handleOptionChange = this.handleOptionChange.bind(this)
      this.handleShuffle = this.handleShuffle.bind(this)
      this.triggerFetchGifs = debounce(200, this.triggerFetchGifs.bind(this))
      this.initialLoad = this.initialLoad.bind(this)


  }


  createPhrase(){
    let word_1 = {text:this.state.term_1, gif_id: this.state.images.images_1[this.state.shuffle_1], text_theme: this.state.words[0].text_theme, gif_theme: this.state.words[0].gif_theme}
    let word_2 = {text:this.state.term_2, gif_id: this.state.images.images_2[this.state.shuffle_2], text_theme: this.state.words[1].text_theme, gif_theme: this.state.words[1].gif_theme}
    let word_3 = {text:this.state.term_3, gif_id: this.state.images.images_3[this.state.shuffle_3], text_theme: this.state.words[2].text_theme, gif_theme: this.state.words[2].gif_theme}
    postPhrase(word_1, word_2, word_3)
    .then(response => this.setState({url: `http://triplegif.com/show/${response.hash_token}`}))
  }

  handlePhraseFetch(url_token){
    fetchPhrase(url_token)
    .then( data => {this.setState( Object.assign({},this.state,  data ) )} )
  }

  handleOptionChange(event){
    var theme = event.target.value
    this.setState({selectedOption : theme})
    this.setState({
      words:
       [
        {
          text_theme: `text_1_${theme}`,
          gif_theme: `gif_1_${theme}`
        },
        {
          text_theme: `text_2_${theme}`,
          gif_theme: `gif_2_${theme}`
        },
        {
          text_theme: `text_3_${theme}`,
          gif_theme: `gif_3_${theme}`
        }
      ]
    })
    this.setState({url: ""})
  }

  initialLoad(term, number, term_number){
    var current_term = term_number
    fetchGifs(term, number, term_number)
    .then( gifObjIds => {
      if (this.state[current_term] !== "") {
        this.setState( Object.assign({},this.state,{images:{...this.state.images,[number]:gifObjIds}}) )} })

  }

  handleTermChange(term, number, term_number, shuffle_num) {
    this.setState({[shuffle_num]: 0})
    this.setState({[term_number]: term})
    this.setState({url: ""})
    this.triggerFetchGifs(term, number, term_number)
  }

  triggerFetchGifs(term, number, term_number){
    var current_term = term_number
    fetchGifs(term, number, term_number)

    .then( gifObjIds => {
      if (this.state[current_term] !== "") {
        this.setState( Object.assign({},this.state,{images:{...this.state.images,[number]:gifObjIds}}) )} })
  }

  handleBlankTerm(term, number, term_number, shuffle_num){
    this.setState({[shuffle_num]: 0})
    this.setState( Object.assign({},this.state,{images:{...this.state.images,[number]:Array(25).fill("iF3M9gPPCdulq")}}) )
    this.setState({[term_number]: term})
  }

  handlePreview = () => {
    this.props.history.push("/show!")
    }


  handleShuffle = (shuffle, term) => {
    var number = `images_${shuffle.slice(8)}`
    var imagesObject = this.state.images
    var selectedImagesArrayCountMinusTwo = (imagesObject[`${number}`].length)-2
    var current_shuffle = this.state[shuffle]

    if (term !== "") {

      if (current_shuffle <= selectedImagesArrayCountMinusTwo){
        this.setState( Object.assign({},this.state,{...this.state,[shuffle]: current_shuffle + 1}) )
        this.setState({url: ""})

      } else {
        current_shuffle = 0
        this.setState( Object.assign({},this.state,{...this.state,[shuffle]: current_shuffle}) )
        this.setState({url: ""})
      }
    } else { current_shuffle = 0 }
   }


  mainPage(){
       return(
      <div>
      <Link to="/" onClick={window.location.reload} style={{textDecoration: "none"}}><div id="title">TripleGif.com</div></Link>

      <div id="app-box">
         <ThreeCardGroup shuffle_1={this.state.shuffle_1} shuffle_2={this.state.shuffle_2} shuffle_3={this.state.shuffle_3} images={this.state.images} onTermChange={this.handleTermChange.bind(this)} onShuffle={this.handleShuffle.bind(this)} term_1={this.state.term_1} term_2={this.state.term_2} term_3={this.state.term_3} blankTerm={this.handleBlankTerm.bind(this)}
         initialLoad={this.initialLoad}/>
         </div>
         <Row>
         <Col xs="12" md="12" sm="12" lg="12">
           <div id="controls">
           <div><RadioButtons allSearch={this.handleAllSearches} handleOptionChange={this.handleOptionChange} selectedOption={this.state.selectedOption}/></div>< SavePreview showPreview={this.handlePreview.bind(this)}  createPhrase={this.createPhrase.bind(this)} /><div id="url_field"><UrlField url={this.state.url}/></div>
           </div>
            </Col>
        </Row>

        <Row id="footer">
        <Col xs="4" md="4" sm="4">  </Col>
        <Col   xs="4" md="4" sm="4"><div id="jonny"><a target="blank" title="Don't just hover there, get in touch: hello@jonnyxyz.com" href="http://jonnyxyz.com/"><span role="img" aria-label="Jonny">👨‍💻</span></a></div> </Col>
        <Col  xs="4" md="4" sm="4"> <div id="giphy"><img src={giphy} alt="giphy logo"/></div></Col>

        </Row>

      </div>
       )
     }

  showPage(){
       return(
        <Router>
         <ShowPage back={this.mainPage.bind(this)} words={this.state.words} images={this.state.images} shuffle_1={this.state.shuffle_1} shuffle_2={this.state.shuffle_2} shuffle_3={this.state.shuffle_3} term_1={this.state.term_1} term_2={this.state.term_2} term_3={this.state.term_3}  fetchPhrase={this.handlePhraseFetch.bind(this)}/>
        </Router>
       )
     }

   showPageSaved(){
        return(
          <Router>
          <ShowPageSaved words={this.state.words} fetchPhrase={this.handlePhraseFetch.bind(this)}/>
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
