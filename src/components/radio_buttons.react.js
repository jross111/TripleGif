import React from 'react';
import { Form, FormGroup, Label, Input} from 'reactstrap';
import '../styles/radio.css';


export default class RadioButtons extends React.Component {




  render(props) {
    return (
<div>


<div className="float_center">

<div className="child">

      <Form inline id="radio_buttons" className="radio-label-vertical-wrapper">

      <FormGroup check >
        <h4 id="pick_a_theme">Theme:&nbsp;&nbsp;</h4>
           <Label check>
             <Input disabled={this.props.disableButtons} tabIndex = "2"  onChange={this.props.handleOptionChange} id="Vanilla" type="radio" name="radio1" value="vanilla" checked={this.props.selectedOption === "vanilla"} />{' '}
              <span id="Vanilla" role="img" aria-label="Vanilla">Vanilla🍦</span>
           </Label>
         </FormGroup>

      <FormGroup check>
           <Label check>
             <Input disabled={this.props.disableButtons} tabIndex = "3"  onChange={this.props.handleOptionChange} id="Spicy" type="radio" name="radio1" value="spicy" checked={this.props.selectedOption === "spicy"} />{' '}
            <span id="Spicy" role="img" aria-label="Spicy">Spicy🌶️</span>
           </Label>
         </FormGroup>

         <FormGroup check>
              <Label check>
                <Input disabled={this.props.disableButtons} tabIndex = "4"  onChange={this.props.handleOptionChange} id="Party" type="radio" name="radio1" value="party" checked={this.props.selectedOption === "party"} />{' '}
               <span id="Party"  role="img" aria-label="Party">Party🎉</span>
              </Label>
            </FormGroup>



            </Form>
       </div>



      </div>
  </div>

    );
  }
}
