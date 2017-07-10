import React from 'react';
import { Form, FormGroup, InputGroup, InputGroupButton, Input} from 'reactstrap';
import '../styles/three_card_group.css';



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
    const btn ={backgroundColor: '#23C8DE', border: 0};
    return (
<Form  onSubmit={e => e.preventDefault()}>
  <FormGroup >
    <InputGroup>
        <Input tabIndex = "1"   onChange={event => this.onInputChange(event.target.value)} size="lg" type="search" name="search" id="exampleSearch" placeholder="type something..." value={this.props.term} />
        <InputGroupButton onClick={() => this.props.onShuffle(this.props.shuffle_number, this.props.term)} color="primary" style={btn} size="lg">Shuffle</InputGroupButton>
      </InputGroup>
  </FormGroup>
</Form>
    );
  }
}
