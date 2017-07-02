import React from 'react';
import '../styles/show.css';



export default class ShowPage extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      images:{
        images_1: props.images.images_1,
        images_2: props.images.images_2,
        images_3: props.images.images_3
      },

        shuffle_1: props.shuffle_1,
        shuffle_2: props.shuffle_2,
        shuffle_3: props.shuffle_3,
        term_1: props.term_1,
        term_2: props.term_2,
        term_3: props.term_3
    }
  }


  componentDidMount() {
    var url_bar = this._reactInternalInstance._context.router.route.location.pathname.slice(1, -1)
    var url_token = this._reactInternalInstance._context.router.route.location.pathname.slice(6)
     if ( url_bar !== "show" ) {
       this.props.fetchPhrase(url_token)
     }
   }


  render(props) {

    return (

  <container id="container">
    <div id="content">

      <div className="horizontal div3">
        <h1 id="term1"> {this.state.term_1} </h1>
        <img className="background-image" src={"https://media.giphy.com/media/" + this.state.images.images_1[`${this.state.shuffle_1}`] + "/giphy.gif"} alt="Image 1"/>
      </div>
    </div>

    <div id="primary">
        <div className="horizontal div3">
          <h1 id="term2"> {this.state.term_2} </h1>
          <img className="background-image" src={"https://media.giphy.com/media/" + this.state.images.images_2[`${this.state.shuffle_2}`] + "/giphy.gif"} alt="Image 2"/>
        </div>
    </div>

    <div id="secondary">
      <div className="horizontal div3">
        <h1 id="term3"> {this.state.term_3} </h1>
        <img className="background-image" src={"https://media.giphy.com/media/" + this.state.images.images_3[`${this.state.shuffle_3}`] + "/giphy.gif"} alt="Image 3"/>
      </div>
    </div>
  </container>
    );
  }

}
