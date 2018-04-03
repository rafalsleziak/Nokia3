import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
  Route,
  Link
} from 'react-router-dom';
import DeviceBlock from './DeviceBlock';
import ReservationBlock from './ReservationBlock';
import style from '../style';

const Home = () => (
  <div>
    <h1>Home page</h1>
  </div>
);

class HomeComponent extends Component{
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let mountNode = ReactDOM.findDOMNode(this.refs.links);
    ReactDOM.unmountComponentAtNode(mountNode);
  }

  render() {
    return (
      <div ref="links">
        <ul>
          <li><Link to="/" key={1} onClick={this.handleClick} style={style.LinkBlock} >Home page</Link></li>
          <li><Link to="/devices" onClick={this.handleClick}>Devices</Link></li>
          <li><Link to="/reservations" onClick={this.handleClick}>Reservations</Link></li>
        </ul>
        <Route exact path="/" component={Home}/>
        <Route path="/devices" component={() => <DeviceBlock url='http://localhost:3001/api/devices'/>}/>
        <Route path="/reservations" component={() => <ReservationBlock url='http://localhost:3001/api/reservations'/>}/>
      </div>


    );
  }
}

export default HomeComponent;
