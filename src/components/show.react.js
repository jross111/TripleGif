import React from 'react';
import '../styles/show.css';



export default class ShowPage extends React.Component {
  render(props) {
    return (

      <container id="container">

      <div id="content"> {this.props.term_1}  </div>
      <div id="primary"> 2 </div>
      <div id="secondary"> 3 </div>

      </container>

    );
  }
}
