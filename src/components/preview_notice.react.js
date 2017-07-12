import React from 'react';
import {Button} from 'reactstrap';
 import '../styles/three_card_group.css';




const PreviewNotice = (props) => {
    const btn_back ={backgroundColor: '#FFDA40', border: 0}

  return (
  <div id="preview_mode">
    <div>  <Button color="secondary" size="lg" id="back_button" style={btn_back} onClick={props.back}>Back</Button>{' '} <span id="preview_mode_text"><strong>Preview Mode:</strong> Save it to share it!</span> </div>
  </div>

  );
};

export default PreviewNotice;
