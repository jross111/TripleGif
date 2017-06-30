import React from 'react';
import '../styles/show.css';



export default class ShowPage extends React.Component {
  render(props) {
    return (

      <container id="container">

      <div id="content">

      <div className="horizontal div3">

        <img className="background-image" src={"https://media.giphy.com/media/" + this.props.images.images_1[`${this.props.shuffle_1}`] + "/giphy.gif"} alt="Card image cap 1"/>

        </div>



 </div>
      <div id="primary">

      <div className="horizontal div3">

        <img className="background-image" src={"https://media.giphy.com/media/" + this.props.images.images_2[`${this.props.shuffle_2}`] + "/giphy.gif"} alt="Card image cap 2"/>

        </div>


      </div>
      <div id="secondary">


      <div className="horizontal div3">

        <img className="background-image" src={"https://media.giphy.com/media/" + this.props.images.images_3[`${this.props.shuffle_3}`] + "/giphy.gif"} alt="Card image cap 3"/>

        </div>


      </div>

      </container>

    );
  }
}
