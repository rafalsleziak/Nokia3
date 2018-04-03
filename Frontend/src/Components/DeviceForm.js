import React, { Component } from 'react';
import style from '../style';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


class DeviceForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', numLeft: '' };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleNumLeftChange = this.handleNumLeftChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }
  handleNumLeftChange(e) {
    this.setState({ numLeft: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    let name = this.state.name.trim();
    let numLeft = this.state.numLeft.trim();
    if (!numLeft || !name) {
      return;
    }
    this.props.onDeviceSubmit({ name: name, numLeft: numLeft });
    this.setState({name: '', numLeft: ''});
  }
  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
      <MuiThemeProvider>
        <TextField
          id ="name"
          floatingLabelText="Enter device name..."
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <TextField
          id ="numleft"
          floatingLabelText="Available devices.."
          value={this.state.numLeft}
          onChange={this.handleNumLeftChange}
        />
        <RaisedButton
          label="Submit"
          type="submit"
          primary={true}
        />
      </MuiThemeProvider>
      </form>
    )
  }
}

export default DeviceForm;
