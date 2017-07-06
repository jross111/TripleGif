import React from 'react';
import { Button, Form, FormGroup, Label, InputGroup, InputGroupButton, Input  } from 'reactstrap';


export default class Search extends React.Component {
  constructor(props){
      super(props)
      this.state = {term: ""}
  }

  onInputChange(term) {
    if (term !== ""){
      this.setState({term});
      this.props.onTermChange(term, this.props.number, this.props.term_number, this.props.shuffle_number);
    } else {
      this.props.blankTerm(term, this.props.number, this.props.term_number)
    }
  }

  componentDidMount(){
      this.props.initialLoad(this.props.term, this.props.number, this.props.term_number);
  }


  render() {
    return (
<Form onSubmit={e => e.preventDefault()}>
  <FormGroup>
    <InputGroup>
        <Input tabIndex = "1"   onChange={event => this.onInputChange(event.target.value)} size="lg" type="search" name="search" id="exampleSearch" placeholder="search placeholder" value={this.props.term} />

      </InputGroup>
  </FormGroup>
</Form>
    );
  }
}
