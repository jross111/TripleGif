import React from 'react';
import '../styles/show.css';
import '../styles/obnoxious.css';
import '../styles/animate.css';
import giphy from '../assets/images/giphy.png'
import ryan from '../assets/images/ryan.png'


export default class ShowPageSaved extends React.Component {


  componentDidMount() {
    var url_bar = this._reactInternalInstance._context.router.route.location.pathname.slice(1)
    var url_token = this._reactInternalInstance._context.router.route.location.pathname.slice(6)
    console.log(url_bar)
    console.log(url_token)
     if ( url_bar !== "show" ) {
    this.props.fetchPhrase(url_token)

     }
   }

   componentWillReceiveProps(newProps) {
    this.render(newProps);
  }


  render(props) {
    console.log(props)

    if (this.props.words[2].gif_id) {
      return (

    <container id="container">
      <div id="content" className={this.props.words[0].gif_theme}>
        <div className= "horizontal div3" id={this.props.words[0].gif_theme}>
          <img className="background-image" src={"https://media.giphy.com/media/" + this.props.words[0].gif_id + "/giphy.gif"} alt="Image 1"/>
        </div>
        <h1 className="animated intensifies bounceInUp" id={this.props.words[0].text_theme}>  {this.props.words[0].text} </h1>
      </div>

      <div id="primary" className={this.props.words[1].gif_theme}>
      <div className="horizontal div3" id={this.props.words[1].gif_theme}>
            <img className="background-image" src={"https://media.giphy.com/media/" + this.props.words[1].gif_id + "/giphy.gif"} alt="Image 2"/>
          </div>
          <h1 className="animated intensifies bounceInDown" id={this.props.words[1].text_theme}>{this.props.words[1].text} </h1>
      </div>

      <div id="secondary" className={this.props.words[2].gif_theme}>
      <div className="horizontal div3" id={this.props.words[2].gif_theme}>
          <img className="background-image" src={"https://media.giphy.com/media/" + this.props.words[2].gif_id + "/giphy.gif"} alt="Image 3"/>
        </div>
        <h1 className="animated intensifies bounceInRight" id={this.props.words[2].text_theme}> {this.props.words[2].text} </h1>
      </div>
      <img id="watermark" src={giphy}/>
    </container>
      );
    }
    else {
      return <div><img id="loading" src={ryan}/><h1 id="loadingText">Three Word Fraiser</h1><p id="loadingText">Ryan is loading a message for you...</p></div>
    }
  }

}
