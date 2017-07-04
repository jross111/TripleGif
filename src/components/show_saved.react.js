import React from 'react';
import '../styles/show.css';
import '../styles/obnoxious.css';


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
      <div id="content">
      <h1 className="animated intensifies" id={this.props.words[0].text_theme}>  {this.props.words[0].text} </h1>
        <div className= "horizontal div3" id={this.props.words[0].gif_theme}>
          <img className="background-image" src={"https://media.giphy.com/media/" + this.props.words[0].gif_id + "/giphy.gif"} alt="Image 1"/>
        </div>
      </div>

      <div id="primary">
      <h1 className="animated intensifies" id={this.props.words[1].text_theme}>{this.props.words[1].text} </h1>
      <div className="horizontal div3" id={this.props.words[1].gif_theme}>
            <img className="background-image" src={"https://media.giphy.com/media/" + this.props.words[1].gif_id + "/giphy.gif"} alt="Image 2"/>
          </div>
      </div>

      <div id="secondary">
      <h1 className="animated intensifies" id={this.props.words[2].text_theme}> {this.props.words[2].text} </h1>
      <div className="horizontal div3" id={this.props.words[2].gif_theme}>
          <img className="background-image" src={"https://media.giphy.com/media/" + this.props.words[2].gif_id + "/giphy.gif"} alt="Image 3"/>
        </div>
      </div>
    </container>
      );
    }
    else {
      return <h1>Maybe loading</h1>
    }
  }

}
