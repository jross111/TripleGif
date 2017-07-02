import React from 'react';
import '../styles/show.css';



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

    return (

  <container id="container">
    <div id="content">

      <div className="horizontal div3">
        <h1 id="term1"> {this.props.term_1} </h1>
        <img className="background-image" src={"https://media.giphy.com/media/" + this.props.images_1 + "/giphy.gif"} alt="Image 1"/>
      </div>
    </div>

    <div id="primary">
        <div className="horizontal div3">
          <h1 id="term2"> {this.props.term_2} </h1>
          <img className="background-image" src={"https://media.giphy.com/media/" + this.props.images_2 + "/giphy.gif"} alt="Image 2"/>
        </div>
    </div>

    <div id="secondary">
      <div className="horizontal div3">
        <h1 id="term3"> {this.props.term_3} </h1>
        <img className="background-image" src={"https://media.giphy.com/media/" + this.props.images_3 + "/giphy.gif"} alt="Image 3"/>
      </div>
    </div>
  </container>
    );
  }

}
