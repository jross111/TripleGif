import React from 'react';
import '../styles/show.css';



export default class ShowPage extends React.Component {


  render(props) {

    return (

  <container id="container">
    <div id="content">

      <div className="horizontal div3">
        <h1 id="term1"> {this.props.term_1} </h1>
        <img className="background-image" src={"https://media.giphy.com/media/" + this.props.images.images_1[`${this.props.shuffle_1}`] + "/giphy.gif"} alt="Image 1"/>
      </div>
    </div>

    <div id="primary">
        <div className="horizontal div3">
          <h1 id="term2"> {this.props.term_2} </h1>
          <img className="background-image" src={"https://media.giphy.com/media/" + this.props.images.images_2[`${this.props.shuffle_2}`] + "/giphy.gif"} alt="Image 2"/>
        </div>
    </div>

    <div id="secondary">
      <div className="horizontal div3">
        <h1 id="term3"> {this.props.term_3} </h1>
        <img className="background-image" src={"https://media.giphy.com/media/" + this.props.images.images_3[`${this.props.shuffle_3}`] + "/giphy.gif"} alt="Image 3"/>
      </div>
    </div>
  </container>
    );
  }

}
