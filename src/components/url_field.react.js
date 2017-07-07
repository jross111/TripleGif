import React from 'react';
import { Form, Input, Alert, Popover, PopoverTitle, PopoverContent } from 'reactstrap';
import CopyToClipboard from 'react-copy-to-clipboard';

export default class UrlField extends React.Component {

  constructor(){
    super()

    this.state = {}
    this.onDismiss = this.onDismiss.bind(this);
    this.handleCopy = this.handleCopy.bind(this)
  }

  onDismiss() {
    this.setState({ visible: false });
  }

  handleCopy(){
    if (this.props.url !== ""){
      this.setState({ visible: true });
    }

  }


  render() {

    return (
           <Form>
             <CopyToClipboard text={this.props.url}
               onCopy={() => this.setState({copied: true})}>
               <span id="url"><Input  readOnly="true" placeholder="generated URL" size="lg" value={this.props.url} onClick={this.handleCopy} /></span>
             </CopyToClipboard>

             {this.state.copied ?
               <Popover isOpen={this.state.visible} target="url" toggle={this.onDismiss}>
                    <PopoverTitle >Copied to Clipboard!</PopoverTitle>
                </Popover>
                            : null}
           </Form>
    );
  }
}
