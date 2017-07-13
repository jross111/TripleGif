import React from 'react';
 import '../styles/three_card_group.css';
 import image from '../assets/images/twf-small.png'





const LinkBack = (props) => {


  return (
  <div id="link_back">
    <a target="_blank" rel="noopener noreferrer" href="https://triplegif.com/"> <img src={image} alt="make your own message!"/>{' '} </a>
  </div>

  );
};

export default LinkBack;
