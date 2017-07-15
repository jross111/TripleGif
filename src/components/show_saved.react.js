import React from 'react';
import '../styles/show.css';
import '../styles/obnoxious.css';
import '../styles/animate.css';
import giphy from '../assets/images/giphy.png'
import LinkBack from './link_back.react.js'


export default class ShowPageSaved extends React.Component {


  componentDidMount() {
    var url_bar = window.location.pathname.slice(1)
    var url_token = window.location.pathname.slice(6)
     if ( url_bar !== "show" ) {
    this.props.fetchPhrase(url_token)

     }
   }

   componentWillReceiveProps(newProps) {
    this.render(newProps);
  }


  render(props) {


    if (this.props.words[2].gif_id) {
      return (

    <container id="container">
    <LinkBack/>
      <div id="content" className={this.props.words[0].gif_theme}>
        <div className= "horizontal div3" id={this.props.words[0].gif_theme}>
          <img className="background-image" src={"https://media.giphy.com/media/" + this.props.words[0].gif_id + "/giphy.gif"} alt="1"/>
        </div>
        <h1 className="animated intensifies bounceInUp" id={this.props.words[0].text_theme}>  {this.props.words[0].text} </h1>
      </div>

      <div id="primary" className={this.props.words[1].gif_theme}>
      <div className="horizontal div3" id={this.props.words[1].gif_theme}>
            <img className="background-image" src={"https://media.giphy.com/media/" + this.props.words[1].gif_id + "/giphy.gif"} alt="2"/>
          </div>
          <h1 className="animated intensifies bounceInDown" id={this.props.words[1].text_theme}>{this.props.words[1].text} </h1>
      </div>

      <div id="secondary" className={this.props.words[2].gif_theme}>
      <div className="horizontal div3" id={this.props.words[2].gif_theme}>
          <img className="background-image" src={"https://media.giphy.com/media/" + this.props.words[2].gif_id + "/giphy.gif"} alt="3"/>
        </div>
        <h1 className="animated intensifies bounceInRight" id={this.props.words[2].text_theme}> {this.props.words[2].text} </h1>
      </div>
      <div className={this.props.words[0].gif_theme}><b></b></div>
      <img id="watermark" src={giphy} alt="giphy logo"/>
    </container>
      );
    }
    else {
      return <div><h1 id="loadingText">Three Word Fraiser</h1><p id="loadingText">Loading a phrase for you...</p></div>
    }
  }

}
