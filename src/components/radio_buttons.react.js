import React from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import '../styles/radio.css';


export default class RadioButtons extends React.Component {
  render(props) {
    return (
      <Form inline>

      <FormGroup check>
           <Label check>
             <Input onChange={this.props.handleOptionChange} id="Vanilla" type="radio" name="radio1" checked={this.props.selectedOption === "vanilla"} value="vanilla" />{' '}
            Vanilla
           </Label>
         </FormGroup>

      <FormGroup check>
           <Label check>
             <Input onChange={this.props.handleOptionChange} id="Crazy" type="radio" name="radio1" value="spicy" checked={this.props.selectedOption === "spicy"} />{' '}
            Spicy
           </Label>
         </FormGroup>


      </Form>
    );
  }
}
