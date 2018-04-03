import React, {Component} from 'react'
import style from '../style'
import edit_logo from '../images/editlogo.png';
import delete_logo from '../images/deletelogo.png';
import marked from 'marked'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


class Device extends Component {
  constructor(props){
    super(props);
    this.state = {
      toBeUpdated: false,
      toBeDeleted: false,
      name: '',
      numLeft: ''
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleNumLeftChange = this.handleNumLeftChange.bind(this);
    this.deleteDevice = this.deleteDevice.bind(this);
    this.editDevice = this.editDevice.bind(this);
    this.handleEditDevice = this.handleEditDevice.bind(this);
    this.cancelEditDevice = this.cancelEditDevice.bind(this);
  }

  deleteDevice(e) {
    e.preventDefault();
    this.setState({toBeUpdated: !this.state.toBeUpdated})
    let id = this.props.uniqueID;
    this.props.onDeviceDelete(id);
    console.log('deleted');
  }

  editDevice(e) {
    e.preventDefault()
    this.setState({toBeUpdated: !this.state.toBeUpdated});
  }

  handleEditDevice(e) {
    e.preventDefault();
    let id = this.props.uniqueID;
    let name = (this.state.name) ? this.state.name : null;
    let numLeft = (this.state.numLeft) ? this.state.numLeft : null;
    let device = { name:  name, numLeft: numLeft};
    this.props.onDeviceEdit(id, device);
    this.setState({
      toBeUpdated: !this.state.toBeUpdated,
      name: '',
      numLeft: ''
    })
  }

  handleNameChange(e) {
    this.setState({name: e.target.value})
  }

  handleNumLeftChange(e) {
    this.setState({numLeft: e.target.value})
  }

  cancelEditDevice(e) {
    e.preventDefault();
    this.setState({toBeUpdated: !this.state.toBeUpdated});
  }

  render() {
    return (
      <div style={style.device} >
        {/*Table to display devices*/}
        <table>
          <thead style={style.tablehead}>
            <th>Device Name:</th>
            <th>Available Devices:</th>
            <th></th>
            <th></th>
          </thead>
          <tr style={style.row}>

            <td>{this.props.name}</td>
            <td>{this.props.numLeft}</td>
            <td>
            {/*Edit button shows up only when object is not updated*/}
            {(!this.state.toBeUpdated)
              ? (
                  <a href='' onClick={this.editDevice}>
                  <img alt='edit device' src={edit_logo} width="48" height="48"/>
                </a>
              ) :null
            }
            {/*Delete button */}
            </td>
            <td>
              <a href='' onClick={this.deleteDevice}>
                <img src={delete_logo} width="48" height="48" alt="delete device"/>
              </a>
            </td>
          </tr>
          {/*Additional row for edit form */}
          { (this.state.toBeUpdated)
            ? (
              <tr>
              <td>
                <form onSubmit={this.handleEditDevice}>
                  <MuiThemeProvider>
                    <TextField
                      id ="editName"
                      floatingLabelText="Change device name..."
                      value={this.state.name}
                      onChange={this.handleNameChange}
                    />
                  </MuiThemeProvider>
                </form>
              </td>
              <td>
                <form onSubmit={this.handleEditDevice}>
                <MuiThemeProvider>
                  <TextField
                    id ="editNumLeft"
                    floatingLabelText="Change available devices..."
                    value={this.state.numLeft}
                    onChange={this.handleNumLeftChange}
                  />
                </MuiThemeProvider>
                </form>
              </td>
              <td>
                <form onSubmit={this.handleEditDevice}>
                  <MuiThemeProvider>
                    <RaisedButton
                      label="Edit"
                      type="submit"
                      primary={true}
                    />
                    </MuiThemeProvider>
                </form>
              </td>
              <td>
              <MuiThemeProvider>
                <RaisedButton
                  label="Cancel"
                  type="submit"
                  secondary={true}
                  onClick={this.cancelEditDevice}
                />
                </MuiThemeProvider>
              </td>
              </tr>
              )
          :null  }
        </table>
      </div>
    )
  }
}

export default Device
