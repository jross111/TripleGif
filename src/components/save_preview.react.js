import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import '../styles/radio.css';

const SavePreview = (props) => {
  const btn_yellow ={backgroundColor: '#FFDA40', border: 0, width: "49%", marginRight: "2%", borderRadius: "5px"};
  const btn_pink ={backgroundColor: '#EA4C89', border: 0, width: "49%", borderRadius: "5px"};
  const button_group ={width: "100%"}
  return (

    <div>

    <ButtonGroup style={button_group}>
      <Button disabled ={props.disableButtons} tabIndex = "5"  size="lg" color="secondary" style={btn_yellow} onClick={props.showPreview}>Preview</Button>
      <Button disabled ={props.disableSaveButton} tabIndex = "6"  size="lg" color="success" style={btn_pink} onClick={props.createPhrase}>Save</Button>
    </ButtonGroup>


    </div>
  );
};

export default SavePreview;
