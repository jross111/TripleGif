import React from 'react';
import { Button } from 'reactstrap';
import '../styles/radio.css';

const SavePreview = (props) => {
  const btn_yellow ={backgroundColor: '#FFDA40', border: 0, width: "50%" };
  const btn_pink ={backgroundColor: '#EA4C89', border: 0, width: "50%"};
  return (

    <div>


      <Button size="lg" color="secondary" style={btn_yellow} onClick={props.showPreview}>&nbsp;&nbsp;&nbsp;Preview&nbsp;&nbsp; </Button>
      <Button size="lg" color="success" style={btn_pink} onClick={props.createPhrase}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Save&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Button>



    </div>
  );
};

export default SavePreview;
